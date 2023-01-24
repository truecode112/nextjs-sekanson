import { useContract, useAddress, useContractMetadata, useClaimConditions, useActiveClaimConditionForWallet, useClaimerProofs, useClaimIneligibilityReasons, useUnclaimedNFTSupply, useClaimedNFTSupply, useNetwork, useNetworkMismatch, Web3Button } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import clsx from 'clsx';
import { BigNumber, ethers, utils } from 'ethers';
import React, { useMemo, useState } from 'react'
import { parseIneligibility } from '../../../utils/parseIneligibility';
import MintComponent from './MintComponent';
import Image from 'next/image';

type Props = {}

const networkChains: Array<{ id: ChainId, name: string, src: string, className: string, activeClass: string }> = [
    {
        id: ChainId.Goerli,
        name: "Ethereum",
        src: "/images/eth-logo.svg",
        className: "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
        activeClass: "bg-gray-100 text-gray-700 border-gray-700",
    },
    {
        id: ChainId.Polygon,
        name: "Polygon",
        src: "/images/polygon-logo.svg",
        className: "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
        activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 "
    },
    {
        id: ChainId.Optimism,
        name: "Optimism",
        src: "/images/optimism-logo.svg",
        className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100"
    },
    {
        id: ChainId.Arbitrum,
        name: "Arbitrum",
        src: "/images/arbitrum-logo.svg",
        className: "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
        activeClass: "border-blue-700 text-blue-700 bg-blue-100"
    },
    {
        id: ChainId.Avalanche,
        name: "Avalanche",
        src: "/images/avalanche-logo.svg",
        className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100"
    },
    {
        id: ChainId.BinanceSmartChainMainnet,
        name: "BNB Chain",
        src: "/images/bnb-logo.svg",
        className: "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
        activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100"
    }

]

const ProjectDetail = (props: Props) => {
    const [myNftDropContractAddress, setMyNftDropContractAddress] = useState("")
    const [selectedNetwork, setSelectedNetwork] = useState(networkChains[0])
    const [isValidContractAddress, setIsValidContractAddress] = useState(true)

    const NetworkOption = () => {
        const [, switchNetwork] = useNetwork();
        const isMismatched = useNetworkMismatch();

        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <div
                            key={networkChain.id}
                            onClick={async () => {
                                setSelectedNetwork(networkChain)
                                // if (isMismatched) {
                                // await switchNetwork(networkChain.id)
                                // }
                            }}
                            className={
                                clsx(
                                    "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
                                    JSON.stringify(selectedNetwork) === JSON.stringify(networkChain) ? networkChain.activeClass : ""
                                )
                            }>
                            <picture>
                                <img
                                    alt="ethereum"
                                    src={networkChain.src}
                                    className="h-8"
                                />
                            </picture>
                            <p>{networkChain.name}</p>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <section className="flex w-11/12 py-10">
            <div className="w-1/3 h-full">
                <img
                    src="/android-chrome-192x192.png"
                    alt="thirdweb Logo"
                    width={135}
                />
            </div>
            <div className="w-2/3 flex flex-col relative">
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
                        onChange={(e) => {
                            const value = e.target.value
                            setMyNftDropContractAddress(value)
                        }}
                        value={myNftDropContractAddress}
                        type="text"
                        onBlur={() => {
                            if (!ethers.utils.isAddress(myNftDropContractAddress)) {
                                setIsValidContractAddress(false)
                            } else {
                                setIsValidContractAddress(true)
                            }
                        }}
                        className={
                            clsx(
                                "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent ",
                                !isValidContractAddress && "border-red-500"
                            )
                        }
                        name="productionContractAddress"
                        autoComplete="off"
                        placeholder="0x9a68.............2665"
                    />
                    {
                        !isValidContractAddress && (
                            <p className='text-red-500'>Please enter a valid address</p>
                        )
                    }
                </div>
                <div>
                    <MintComponent disabled={!ethers.utils.isAddress(myNftDropContractAddress)} myNftDropContractAddress={myNftDropContractAddress} />
                </div>
            </div>
        </section>
    )
}

export default ProjectDetail