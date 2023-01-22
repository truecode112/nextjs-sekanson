import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectGenerate = (props: Props) => {
    const networkChains = [
        {
            id: "1",
            name: "Ethereum",
            src: "/images/eth-logo.svg",
            className:
                "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
            activeClass: "bg-gray-100 text-gray-700 border-gray-700",
        },
        {
            id: "2",
            name: "Polygon",
            src: "/images/polygon-logo.svg",
            className:
                "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
            activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 ",
        },
        {
            id: "3",
            name: "Optimism",
            src: "/images/optimism-logo.svg",
            className:
                "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
            activeClass: "border-red-700 text-red-700 bg-red-100",
        },
        {
            id: "4",
            name: "Arbitrum",
            src: "/images/arbitrum-logo.svg",
            className:
                "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
            activeClass: "border-blue-700 text-blue-700 bg-blue-100",
        },
        {
            id: "5",
            name: "Avalanche",
            src: "/images/avalanche-logo.svg",
            className:
                "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
            activeClass: "border-red-700 text-red-700 bg-red-100",
        },
        {
            id: "6",
            name: "BNB Chain",
            src: "/images/bnb-logo.svg",
            className:
                "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
            activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100",
        },
    ];
    const [selectedNetwork, setSelectedNetwork] = useState(networkChains[0]);

    const SmartContractSourceCode = () => {
        const [isActive, setisActive] = useState(false)
        return (
            <div
                className="w-1/2">
                <div
                    onClick={() => setisActive(prev => !prev)}
                    className="flex justify-between text-xl transition duration-500 font-medium hover:bg-gray-100 hover:bg-opacity-50 duration-300 p-3 rounded-lg cursor-pointer mt-5">
                    Your Smart Contract Source Code
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
                        className={
                            clsx(isActive ? "rotate-180" : "rotate-0")
                        }
                    >
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                </div>
                <div className="w-full flex-col">
                    <p className="text-xs text-gray-600 px-3">
                        Here is your contract&apos;s compressed and flattened Solidity
                        file. It is just a single file you will deploy soon. You can
                        download it now if you want to, but it will always be
                        available here.
                    </p>
                    <a
                        href="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FZhvS2PNlQNVKgAGHlsGv%2FMyMintplexProjectContract-8ca0c68d-6bb1-4208-b668-454b99d31efa.sol?alt=media"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 underline text-blue-300"
                    >
                        Download source code
                    </a>
                </div>

                <div className={
                    clsx(!isActive ? "block" : "hidden")
                }>
                    source code
                </div>
            </div >
        )
    }

    const ContractABI = () => {
        const [isActive, setisActive] = useState(false)

        return (
            <div className="w-1/2">
                <div
                    onClick={() => setisActive(prev => !prev)}
                    className="flex justify-between text-xl font-medium hover:bg-gray-100 hover:bg-opacity-50 duration-300 p-3 rounded-lg cursor-pointer mt-5">
                    Your Contract&apos;s ABI
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
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div className="w-full flex-col">
                    <p className="text-xs text-gray-600 px-3">
                        Here is your contracts ABI JSON file. This is not something
                        you will need to review or reference often, but you will need
                        it to verify your contract on the blockchain. It will always
                        be here for you if you need it.
                    </p>
                    <a
                        href="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FZhvS2PNlQNVKgAGHlsGv%2FMyMintplexProjectContract_data-8ca0c68d-6bb1-4208-b668-454b99d31efa.json?alt=media"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs px-3 underline text-blue-300"
                    >
                        Download contract abi
                    </a>
                </div>
                <div className={
                    clsx(isActive ? "block" : "hidden")
                }>
                    source code
                </div>
            </div>
        )
    }

    return (
        <ProjectLayout selectedNetwork={selectedNetwork}>
            <div className="w-5/6 h-auto bg-white rounded-lg">
                <div className="container w-full h-full m-6">
                    <div className="flex items-center space-x-10">
                        <h1 className="text-5xl font-black text-gray-700">
                            Generate Contract
                        </h1>
                    </div>
                    <p className="my-2 text-gray-800">
                        Here you can generate and re-generate your contract. After it is
                        generated you can deploy to testnet!
                    </p>
                    <div className="flex flex-col space-y-4">
                        <div className="mt-5">
                            <button
                                className="px-4 py-2 border-2 transition-all border-gray-300 rounded-md text-gray-600 font-black text-xl"
                                style={{
                                    boxShadow: "rgb(187, 247, 208) 0px 0px 0px 0px inset",
                                    transition: "box-shadow 0.3s ease-in -out 0s",
                                }}
                            >
                                <p>Regenerate $MINTPLEX Contract</p>
                            </button>
                        </div>
                        <SmartContractSourceCode />
                        <ContractABI />
                        <Link
                            href="/ZhvS2PNlQNVKgAGHlsGv/deploy/mumbai"
                            className="w-fit px-3 py-2 mt-6 text-ramppblue border border-ramppblue rounded-md hover:bg-ramppblue hover:text-white"
                        >
                            Deploy your contract on testnet! →
                        </Link>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default ProjectGenerate;
