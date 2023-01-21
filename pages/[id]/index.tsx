import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimConditions,
    useClaimedNFTSupply,
    useClaimerProofs,
    useClaimIneligibilityReasons,
    useContract,
    useContractMetadata,
    useUnclaimedNFTSupply,
    Web3Button,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import styles from "../../styles/Theme.module.css";
import { parseIneligibility } from "../../utils/parseIneligibility";
import BaseLayout from "../../components/BaseLayout";
import clsx from "clsx";
import { Field } from "formik";

// Put Your NFT Drop Contract address from the dashboard here
const myNftDropContractAddress = "0x90E2dD8C48cA35534Dd70e3eC19B362cdf71981E";

const ProjectDetail: NextPage = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);

    const address = useAddress();
    const [quantity, setQuantity] = useState(1);

    const { data: contractMetadata } = useContractMetadata(nftDrop);

    const claimConditions = useClaimConditions(nftDrop);

    const activeClaimCondition = useActiveClaimConditionForWallet(
        nftDrop,
        address || ""
    );
    const claimerProofs = useClaimerProofs(nftDrop, address || "");
    const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
        quantity,
        walletAddress: address || "",
    });
    const unclaimedSupply = useUnclaimedNFTSupply(nftDrop);
    const claimedSupply = useClaimedNFTSupply(nftDrop);

    const numberClaimed = useMemo(() => {
        return BigNumber.from(claimedSupply.data || 0).toString();
    }, [claimedSupply]);

    const numberTotal = useMemo(() => {
        return BigNumber.from(claimedSupply.data || 0)
            .add(BigNumber.from(unclaimedSupply.data || 0))
            .toString();
    }, [claimedSupply.data, unclaimedSupply.data]);

    const priceToMint = useMemo(() => {
        const bnPrice = BigNumber.from(
            activeClaimCondition.data?.currencyMetadata.value || 0
        );
        return `${utils.formatUnits(
            bnPrice.mul(quantity).toString(),
            activeClaimCondition.data?.currencyMetadata.decimals || 18
        )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
    }, [
        activeClaimCondition.data?.currencyMetadata.decimals,
        activeClaimCondition.data?.currencyMetadata.symbol,
        activeClaimCondition.data?.currencyMetadata.value,
        quantity,
    ]);

    const maxClaimable = useMemo(() => {
        let bnMaxClaimable;
        try {
            bnMaxClaimable = BigNumber.from(
                activeClaimCondition.data?.maxClaimableSupply || 0
            );
        } catch (e) {
            bnMaxClaimable = BigNumber.from(1_000_000);
        }

        let perTransactionClaimable;
        try {
            perTransactionClaimable = BigNumber.from(
                activeClaimCondition.data?.maxClaimablePerWallet || 0
            );
        } catch (e) {
            perTransactionClaimable = BigNumber.from(1_000_000);
        }

        if (perTransactionClaimable.lte(bnMaxClaimable)) {
            bnMaxClaimable = perTransactionClaimable;
        }

        const snapshotClaimable = claimerProofs.data?.maxClaimable;

        if (snapshotClaimable) {
            if (snapshotClaimable === "0") {
                // allowed unlimited for the snapshot
                bnMaxClaimable = BigNumber.from(1_000_000);
            } else {
                try {
                    bnMaxClaimable = BigNumber.from(snapshotClaimable);
                } catch (e) {
                    // fall back to default case
                }
            }
        }

        const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

        let max;
        if (maxAvailable.lt(bnMaxClaimable)) {
            max = maxAvailable;
        } else {
            max = bnMaxClaimable;
        }

        if (max.gte(1_000_000)) {
            return 1_000_000;
        }
        return max.toNumber();
    }, [
        claimerProofs.data?.maxClaimable,
        unclaimedSupply.data,
        activeClaimCondition.data?.maxClaimableSupply,
        activeClaimCondition.data?.maxClaimablePerWallet,
    ]);

    const isSoldOut = useMemo(() => {
        try {
            return (
                (activeClaimCondition.isSuccess &&
                    BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
                        0
                    )) ||
                numberClaimed === numberTotal
            );
        } catch (e) {
            return false;
        }
    }, [
        activeClaimCondition.data?.availableSupply,
        activeClaimCondition.isSuccess,
        numberClaimed,
        numberTotal,
    ]);

    console.log("claimIneligibilityReasons", claimIneligibilityReasons.data);

    const canClaim = useMemo(() => {
        return (
            activeClaimCondition.isSuccess &&
            claimIneligibilityReasons.isSuccess &&
            claimIneligibilityReasons.data?.length === 0 &&
            !isSoldOut
        );
    }, [
        activeClaimCondition.isSuccess,
        claimIneligibilityReasons.data?.length,
        claimIneligibilityReasons.isSuccess,
        isSoldOut,
    ]);

    const isLoading = useMemo(() => {
        return (
            activeClaimCondition.isLoading ||
            unclaimedSupply.isLoading ||
            claimedSupply.isLoading ||
            !nftDrop
        );
    }, [
        activeClaimCondition.isLoading,
        nftDrop,
        claimedSupply.isLoading,
        unclaimedSupply.isLoading,
    ]);

    const buttonLoading = useMemo(
        () => isLoading || claimIneligibilityReasons.isLoading,
        [claimIneligibilityReasons.isLoading, isLoading]
    );
    const buttonText = useMemo(() => {
        if (isSoldOut) {
            return "Sold Out";
        }

        if (canClaim) {
            const pricePerToken = BigNumber.from(
                activeClaimCondition.data?.currencyMetadata.value || 0
            );
            if (pricePerToken.eq(0)) {
                return "Mint (Free)";
            }
            return `Mint (${priceToMint})`;
        }
        if (claimIneligibilityReasons.data?.length) {
            return parseIneligibility(claimIneligibilityReasons.data, quantity);
        }
        if (buttonLoading) {
            return "Checking eligibility...";
        }
        return "Claiming not available";
    }, [
        isSoldOut,
        canClaim,
        claimIneligibilityReasons.data,
        buttonLoading,
        activeClaimCondition.data?.currencyMetadata.value,
        priceToMint,
        quantity,
    ]);

    const networkChains = [
        {
            id: "1",
            name: "Ethereum",
            src: "/images/eth-logo.svg",
            className: "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
            activeClass: "bg-gray-100 text-gray-700 border-gray-700",
        },
        {
            id: "2",
            name: "Polygon",
            src: "/images/polygon-logo.svg",
            className: "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
            activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 "
        },
        {
            id: "3",
            name: "Optimism",
            src: "/images/optimism-logo.svg",
            className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
            activeClass: "border-red-700 text-red-700 bg-red-100"
        },
        {
            id: "4",
            name: "Arbitrum",
            src: "/images/arbitrum-logo.svg",
            className: "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
            activeClass: "border-blue-700 text-blue-700 bg-blue-100"
        },
        {
            id: "5",
            name: "Avalanche",
            src: "/images/avalanche-logo.svg",
            className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
            activeClass: "border-red-700 text-red-700 bg-red-100"
        },
        {
            id: "6",
            name: "BNB Chain",
            src: "/images/bnb-logo.svg",
            className: "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
            activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100"
        }

    ]
    const [selectedNetwork, setSelectedNetwork] = useState(networkChains[0])

    const NetworkOption = () => {
        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <div
                            key={networkChain.id}
                            onClick={() => setSelectedNetwork(networkChain)}
                            className={
                                clsx(
                                    "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
                                    JSON.stringify(selectedNetwork) === JSON.stringify(networkChain) ? networkChain.activeClass : ""
                                )
                            }>
                            <img
                                alt="ethereum"
                                src={networkChain.src}
                                className="h-8"
                            />
                            <p>{networkChain.name}</p>
                        </div>
                    )
                })}
            </>
        )
    }



    return (
        <BaseLayout >
            <div
                id="mainbg"
                className="fixed w-screen h-screen top-0"
                style={{
                    zIndex: -1,
                    opacity: 0.75,
                    backgroundImage: "url(/images/bg.svg)",
                }}
            >
                {/* <Image src="/images/bg.svg" alt={"bg-project"} /> */}
            </div>

            {
                isLoading ? (
                    <div className="flex gap-x-2 py-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin h-6">
                            <line x1="12" y1="2" x2="12" y2="6"></line>
                            <line x1="12" y1="18" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                            <line x1="2" y1="12" x2="6" y2="12"></line>
                            <line x1="18" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24">
                            </line>
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <section className="flex w-11/12 py-10">
                        <div className="w-1/3 h-full">
                            <img
                                src="/android-chrome-192x192.png"
                                alt="thirdweb Logo"
                                width={135}
                                className={styles.buttonGapTop}
                            />
                        </div>
                        <div className="w-2/3 flex flex-col border relative">
                            <div className="relative w-3/4 my-4">
                                <div
                                    className="w-fit flex items-center space-x-2 cursor-pointer"
                                    data-tip="This is the network that you contract will be deployed on. This cannot be changed after deployment"
                                >
                                    <label className="text-base font-black uppercase text-gray-500">
                                        Network
                                    </label>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4 text-gray-500"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                                <div className="my-3 w-full grid grid-cols-3 gap-4 items-center ">
                                    <NetworkOption />
                                </div>
                            </div>
                            <div className="relative w-3/4 md:w-1/2 my-4">
                                <label
                                    htmlFor="productionContractAddress"
                                    className="text-gray-500"
                                >
                                    Contract address
                                </label>
                                <p className="text-xs text-gray-500">
                                    This is the contract address of your live contract.
                                </p>
                                <input
                                    // onChange={formik.handleChange}
                                    type="text"
                                    className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                                    name="productionContractAddress"
                                    autoComplete="off"
                                    placeholder="0x9a68563da....abe2372665"
                                />
                            </div>
                            <div className="relative w-3/4 md:w-1/2 my-4">
                                <div>
                                    {/* Title of your NFT Collection */}
                                    <h1>{contractMetadata?.name}</h1>
                                    {/* Description of your NFT Collection */}
                                    <p className={styles.description}>
                                        {contractMetadata?.description}
                                    </p>
                                </div>
                            </div>
                            <div className="relative w-3/4 my-4 flex justify-between items-center">
                                <div>
                                    {/* Image Preview of NFTs */}
                                    <img
                                        // className={styles.image}
                                        className="w-52 h-52"
                                        src={contractMetadata?.image}
                                        alt={`${contractMetadata?.name} preview image`}
                                    />

                                    {/* Amount claimed so far */}
                                    <div className={styles.mintCompletionArea}>
                                        <div className={styles.mintAreaLeft}>
                                            <p>Total Minted</p>
                                        </div>
                                        <div className={styles.mintAreaRight}>
                                            {claimedSupply && unclaimedSupply ? (
                                                <p>
                                                    <b>{numberClaimed}</b>
                                                    {" / "}
                                                    {numberTotal}
                                                </p>
                                            ) : (
                                                // Show loading state if we're still loading the supply
                                                <p>Loading...</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center ">
                                    {claimConditions.data?.length === 0 ||
                                        claimConditions.data?.every(
                                            (cc) => cc.maxClaimableSupply === "0"
                                        ) ? (
                                        <div>
                                            <h2>
                                                This drop is not ready to be minted yet. (No claim condition
                                                set)
                                            </h2>
                                        </div>
                                    ) : (
                                        <div>
                                            <div
                                                className="w-fit flex items-center space-x-2  cursor-pointer my-2"
                                                data-tip="This is the network that you contract will be deployed on. This cannot be changed after deployment"
                                            >
                                                <label className="text-base font-black uppercase text-gray-500">
                                                    Quantity
                                                </label>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="h-4 w-4 text-gray-500"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                                </svg>
                                            </div>
                                            <div className="flex gap-x-3 justify-center items-center">
                                                <button
                                                    className="border rounded-full border-gray-600 flexjustify-center items-center p-3 h-10 w-10"
                                                    onClick={() => setQuantity(quantity - 1)}
                                                    disabled={quantity <= 1}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 124 124">
                                                        <g>
                                                            <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" fill="#000000" >
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                                <h4>{quantity}</h4>
                                                <button
                                                    className="border rounded-full cursor-pointer border-gray-600 flexjustify-center items-center p-3 h-10 w-10"
                                                    onClick={() => setQuantity(quantity + 1)}
                                                    disabled={quantity >= maxClaimable}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 512 512">
                                                        <g>
                                                            <path d="M492 236H276V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v216H20c-11.046 0-20 8.954-20 20s8.954 20 20 20h216v216c0 11.046 8.954 20 20 20s20-8.954 20-20V276h216c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                                                fill="#000000" >
                                                            </path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className={styles.mintContainer}>
                                                {isSoldOut ? (
                                                    <div>
                                                        <h2>Sold Out</h2>
                                                    </div>
                                                ) : (
                                                    <Web3Button
                                                        contractAddress={nftDrop?.getAddress() || ""}
                                                        action={(cntr) => cntr.erc721.claim(quantity)}
                                                        isDisabled={!canClaim || buttonLoading}
                                                        onError={(err) => {
                                                            console.error(err);
                                                            alert("Error claiming NFTs");
                                                        }}
                                                        onSuccess={() => {
                                                            setQuantity(1);
                                                            alert("Successfully claimed NFTs");
                                                        }}
                                                    >
                                                        {buttonLoading ? "Loading..." : buttonText}
                                                    </Web3Button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </BaseLayout>
    );
};

export default ProjectDetail;
