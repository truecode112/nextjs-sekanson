import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectTeams = (props: Props) => {
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
            <div className="w-5/6 h-auto bg-white rounded-lg">
                <div className="container w-full h-full m-6">
                    <div className="flex flex-col sticky top-0 bg-frosted z-10 flex-shrink py-2">
                        <div className="flex items-center space-x-10">
                            <h1 className="text-5xl font-black text-gray-700">
                                Team &amp; Permissions
                            </h1>
                        </div>
                        <p className="my-2 text-gray-800">
                            Here you can setup your team to help manage your project. You can
                            modify this at any time.
                            <br />
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://docs.rampp.xyz/rampp.xyz-documentation/guides/generating-a-contract/teams-and-permissions"
                                className="text-ramppblue underline font-semibold"
                            >
                                Learn more about teams &amp; permissions →
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4"></div>
                    <table className="w-3/4 table p-4 border border-gray-200 rounded-lg mt-5">
                        <thead>
                            <tr>
                                <th className="border-b-2 p-4 text-2xl whitespace-nowrap font-heavy text-gray-700 text-left">
                                    ETH Address
                                </th>
                                <th className="border-b-2 p-4 text-lg whitespace-nowrap font-heavy text-gray-700 text-left">
                                    Testnet
                                </th>
                                <th className="border-b-2 p-4 text-lg whitespace-nowrap font-heavy text-gray-700 text-left">
                                    Mainnet
                                </th>
                                <th className="border-b-2 p-4 whitespace-nowrap font-normal text-gray-700"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b-2 text-gray-700">
                                <td className="p-4 text-left">
                                    <div className="flex flex-col">
                                        <p className="text-2xl font-semibold text-gray-700 ">
                                            0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3
                                        </p>
                                        <p className="text-xs text-gray-700 italic">
                                            this is the primary project owner - they cannot be
                                            removed.
                                        </p>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="relative inline-block text-left ">
                                        <div>
                                            <button
                                                disabled
                                                type="button"
                                                className="border border-gray-300 bg-white flex items-center justify-between w-full rounded-md px-4 py-2 text-sm font-mediumtext-gray-700 bg-gray-300 cursor-not-allowed focus:outline-none focus:ring-0 focus:ring-offset-0"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <p className="font-semibold text-gray-700">
                                                        Full Access
                                                    </p>
                                                </div>
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
                                                    className="ml-2 h-4 w-4"
                                                >
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="relative inline-block text-left ">
                                        <div>
                                            <button
                                                disabled
                                                type="button"
                                                className="
          border border-gray-300 bg-white 
          flex items-center justify-between w-full 
          rounded-md px-4 py-2 text-sm font-medium 
          text-gray-700 bg-gray-300 cursor-not-allowed
          focus:outline-none focus:ring-0 focus:ring-offset-0"
                                            >
                                                <div className="flex space-x-2 items-center">
                                                    <p className="font-semibold text-gray-700">
                                                        Full Access
                                                    </p>
                                                </div>
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
                                                    className="ml-2 h-4 w-4"
                                                >
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4"></td>
                            </tr>
                            <tr className="text-gray-700">
                                <td
                                    colSpan={6}
                                    className="p-4 text-center border-t border-gray-300"
                                >
                                    <button className=" mx-auto p-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
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
                                            className="h-4 mx-1"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                        Add New Team Member
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default ProjectTeams;
