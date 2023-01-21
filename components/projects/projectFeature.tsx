import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectFeature = (props: Props) => {
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

    return (
        <ProjectLayout selectedNetwork={selectedNetwork}>
            <div className="container w-full h-full p-6 relative">
                <div className="flex flex-col sticky top-0 bg-frosted z-10 flex-shrink py-2">
                    <div className="flex items-center space-x-10 ">
                        <h1 className="text-5xl font-black text-gray-700">
                            Contract Features
                        </h1>
                    </div>
                    <p className="my-2 text-gray-800">
                        Enable and set the initial features for your contract. Include all
                        features you intend to use now - as you cannot add new features to
                        the contract once deployed.
                    </p>
                </div>
                <div className="flex flex-col">
                    <div className="w-full flex items-center space-x-8 ">
                        <p className="text-base font-black uppercase text-gray-500 mt-4 mb-2">
                            styling
                        </p>
                        <div className="bg-gray-200 w-10/12 h-0.5"></div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-4">
                        <div className="flex h-max bg-white rounded-lg border-2 border-gray-200 w-fit hover:shadow-md">
                            <div className="flex-auto p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex flex-col">
                                            <h1 className="flex-auto text-xl font-semibold text-gray-600 max-w-sm break-words">
                                                Remove Mintplex.xyz Watermark
                                            </h1>
                                            <p className="w-fit uppercase rounded-full px-2 bg-yellow-300 text-yellow-800 text-xs">
                                                pro
                                            </p>
                                        </div>
                                        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input
                                                    type="checkbox"
                                                    name="hasWhiteLabel"
                                                    className="checked:bg-green-400 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                                />
                                                <label className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-fit flex-wrap text-sm font-medium text-gray-500 mt-2">
                                        <p className="max-w-sm">
                                            At the bottom of all Mintplex generated contracts is a
                                            comment disclosing how your project is powered by
                                            Mintplex. You can delete this comment by enabling this
                                            feature
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex h-max bg-white rounded-lg border-2 border-gray-200 w-fit hover:shadow-md">
                            <div className="flex-auto p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-wrap justify-between">
                                        <div className="flex gap-x-2 items-center">
                                            <img
                                                className="h-6 w-6"
                                                src="/images/open-sea-logo.svg"
                                                alt="Opensea.io"
                                            />
                                            <h1 className="flex-auto text-xl font-semibold text-gray-600 max-w-sm break-words">
                                                Enforce Royalties
                                            </h1>
                                        </div>
                                        <div className="text-xl font-semibold text-gray-500 dark:text-gray-300">
                                            <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                                <input
                                                    type="checkbox"
                                                    name="enforceRoyalties"
                                                    className="checked:bg-green-400 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none  cursor-pointer"
                                                    checked
                                                />
                                                <label className="block overflow-hidden h-6 rounded-full bg-green-300 cursor-pointer"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-fit flex-wrap text-sm font-medium text-gray-500 mt-2">
                                        <p className="max-w-sm mb-2">
                                            Not all marketplaces enforce royalties.
                                            <br />
                                            Enabling this feature will <b>block</b> the marketplaces
                                            Blur, SudoSwap and LooksRare from trading your collection.
                                        </p>
                                        <a
                                            href="https://support.opensea.io/hc/en-us/articles/1500009575482#:~:text=Adjusting%20%26%20setting%20creator%20fees%20on%20OpenSea"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            Learn More →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default ProjectFeature;
