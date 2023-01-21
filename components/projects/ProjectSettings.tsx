import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectSettings = (props: Props) => {
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
                {/* <div
                    onClick={() => setSelectedNetwork(NetworkEnum.Polygon)}
                    className={
                        clsx(
                            "w-auto flex justify-center items-center space-x-4 p-4 border  bg-transparent rounded-lg cursor-pointer ",
                            selectedNetwork === NetworkEnum.Polygon ? "" : ""
                        )
                    }>
                    <img
                        alt="polygon"
                        src=""
                        className="h-8"
                    />
                    <p>Polygon</p>
                </div>
                <div
                    onClick={() => setSelectedNetwork(NetworkEnum.Optimism)}
                    className={
                        clsx(
                            "w-auto flex justify-center items-center space-x-4 p-4 border  bg-transparent rounded-lg cursor-pointer ",
                            selectedNetwork === NetworkEnum.Optimism ? "border-red-700 text-red-700 bg-red-100" : ""
                        )
                    }>
                    <img
                        alt="optimism"
                        src="/images/optimism-logo.svg"
                        className="h-8"
                    />
                    <p>Optimism</p>
                </div>
                <div
                    onClick={() => setSelectedNetwork(NetworkEnum.Arbitrum)}
                    className={
                        clsx(
                            "w-auto flex justify-center items-center space-x-4 p-4 border  bg-transparent rounded-lg cursor-pointer ",
                            selectedNetwork === NetworkEnum.Arbitrum ? "border-blue-700 text-blue-700 bg-blue-100" : ""
                        )
                    }>
                    <img
                        alt="arbitrum"
                        src="/images/arbitrum-logo.svg"
                        className="h-8"
                    />
                    <p>Arbitrum</p>
                </div>
                <div
                    onClick={() => setSelectedNetwork(NetworkEnum.Avalanche)}
                    className={
                        clsx(
                            "w-auto flex justify-center items-center space-x-4 p-4 border border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700 bg-transparent rounded-lg cursor-pointer ",
                            selectedNetwork === NetworkEnum.Avalanche ? "border-red-700 text-red-700 bg-red-100" : ""
                        )
                    }>
                    <img
                        alt="avalanche"
                        src="/images/avalanche-logo.svg"
                        className="h-8"
                    />
                    <p>Avalanche</p>
                </div>
                <div onClick={() => setSelectedNetwork(NetworkEnum.BNBChain)}
                    className={clsx(
                        "w-auto flex justify-center items-center space-x-4 p-4 border bg-transparent rounded-lg cursor-pointer ",
                        selectedNetwork === NetworkEnum.BNBChain ? " " : ""
                    )}>
                    <img
                        alt="binance"
                        src="/images/bnb-logo.svg"
                        className="h-8"
                    />
                    <p>BNB Chain</p>
                </div> */}
            </>
        )
    }


    return (
        <ProjectLayout selectedNetwork={selectedNetwork} >
            <div className="container w-full h-full p-6 relative ">
                <div className="flex flex-col sticky top-0 bg-frosted z-10 flex-shrink py-2">
                    <div className="flex items-center space-x-10">
                        <h1 className="text-5xl font-black text-gray-700">
                            Contract Information
                        </h1>
                    </div>
                    <p className="my-2 text-gray-800">
                        All contracts are ERC-721A, audited, and based on the ERC-721
                        Open Zeppelin standard.
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div
                        className="__react_component_tooltip te504dc78-2b63-4f53-9c70-c252d1b80db1 place-top type-dark"
                        id="te504dc78-2b63-4f53-9c70-c252d1b80db1"
                        data-id="tooltip"
                        style={{ left: "111px", top: "195px" }}
                    >
                        This is the token symbol for your projects token. It cannot be
                        changed after deployment.
                    </div>
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
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the name of your project. It will appear on NFT marketplaces. It cannot be changed after deployment."
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Name
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

                        <input name="name" type="text"
                            className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                            autoComplete="off" placeholder="Your Project Name" defaultValue="My Mintplex Project"></input>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the token symbol for your projects token. It cannot be changed after deployment."
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Token Symbol
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
                        <input
                            name="tokenSymbol"
                            type="text"
                            className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                            autoComplete="off"
                            placeholder="RAMPP"
                            defaultValue="MINTPLEX"
                        />
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the description of your project. You can change it anytime."
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Description
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
                        <textarea
                            name="description"
                            className="my-2 w-1/2 p-2 rounded-lg border-2 border-gray-300 text-gray-700 text-base font-base "
                            autoComplete="off"
                            placeholder="Some details about your project"
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the % royalties you will collect on secondary sales"
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Royalties
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
                        <div className="flex items-center space-x-2">
                            <div className="flex flex-col">
                                <input
                                    name="sellerFeeBasisPoints"
                                    type="number"
                                    min="0"
                                    max="10"
                                    className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                                    autoComplete="off"
                                    placeholder="5.0"
                                    defaultValue="0"
                                />
                            </div>
                            <p className="text-3xl text-gray-500 font-black">%</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the URL in which minters can learn more about your project."
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Website
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
                        <input
                            name="website"
                            type="url"
                            className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black"
                            autoComplete="off"
                            placeholder="https://myproject.com"
                            defaultValue=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <div
                            className="w-fit flex items-center space-x-2 cursor-pointer"
                            data-tip="This is the URL in which minters can learn more about your project."
                        >
                            <label className="text-base font-black uppercase text-gray-500">
                                Twitter Handle
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
                        <input
                            name="twitter"
                            type="url"
                            className="my-2 w-fit outline-none order-transparent focus:border-transparent focus:ring-0 border-0 border-color-transparent text-gray-700 text-3xl font-black "
                            autoComplete="off"
                            placeholder="@sekansonnft"
                            defaultValue=""
                        />
                    </div>
                </div>
            </div>
        </ProjectLayout >
    );
};

export default ProjectSettings;
