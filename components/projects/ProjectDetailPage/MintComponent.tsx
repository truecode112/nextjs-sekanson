import { useContract, useAddress, useContractMetadata, useClaimConditions, useActiveClaimConditionForWallet, useClaimerProofs, useClaimIneligibilityReasons, useUnclaimedNFTSupply, useClaimedNFTSupply, Web3Button } from '@thirdweb-dev/react';
import { BaseContract, BigNumber, utils } from 'ethers';
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react'
import { parseIneligibility } from '../../../utils/parseIneligibility';
import { SmartContract } from '@thirdweb-dev/sdk';

type Props = {
    myNftDropContractAddress: string,
    disabled: boolean
    // setMyNftDropContractAddress: Dispatch<SetStateAction<string>>
}

const MintComponent = (props: Props) => {
    const { contract: nftDrop } = useContract(props.myNftDropContractAddress);
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


    return (
        <div>
            {/* <div className="relative w-3/4 md:w-1/2 my-4">
                    <div>
                        <h1>{contractMetadata?.name}</h1>
                        <p>
                            {contractMetadata?.description}
                        </p>
                    </div>
                </div> */}
            <div className="relative w-3/4 my-4 flex justify-between items-center">
                {/* <div> */}
                {/* <img
                            className="w-52 h-52"
                            src={contractMetadata?.image}
                            alt={`${contractMetadata?.name} preview image`}
                        /> */}
                {/* <div>
                            <div >
                                <p>Total Minted</p>
                            </div>
                            <div >
                                {claimedSupply && unclaimedSupply ? (
                                    <p>
                                        <b>{numberClaimed}</b>
                                        {numberTotal}
                                    </p>
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div> */}
                {/* </div> */}
                <div className="flex flex-col gap-4 items-center ">
                    {claimConditions.data?.length === 0 ||
                        claimConditions.data?.every(
                            (cc) => cc.maxClaimableSupply === "0"
                        ) ? (
                        <div>
                            <h2>
                                This drop is not ready to be minted yet. (No claim condition set)
                            </h2>
                        </div>
                    ) : (
                        <div>
                            <div
                                className="w-fit flex items-center space-x-2  cursor-pointer my-2"
                                data-tip="This is the network that you contract will be deployed on. This cannot be changed after deployment"
                            >
                                <label className="text-base font-black uppercase text-gray-500">
                                    Quantity 1
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
                            {/* <div className="flex gap-x-3 justify-center items-center my-4">
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
                                </div> */}

                            <div className="my-5" >
                                {isSoldOut ? (
                                    <div>
                                        <h2>Sold Out</h2>
                                    </div>
                                ) : (
                                    <Web3Button
                                        contractAddress={nftDrop?.getAddress() || ""}
                                        action={(cntr) => cntr.erc721.claim(quantity)}
                                        isDisabled={!canClaim || buttonLoading || props.disabled}
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
    )
}

export default MintComponent