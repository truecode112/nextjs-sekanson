import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectPayouts = (props: Props) => {
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
        <ProjectLayout selectedNetwork={selectedNetwork} >
            <div className="container w-full h-full p-6 relative">
                <div className="flex flex-col sticky top-0 bg-frosted z-10 flex-shrink py-2">
                    <div className="flex items-center space-x-10 ">
                        <h1 className="text-5xl font-black text-gray-700">Project Payouts</h1>
                    </div>
                    <p className="my-2 text-gray-800">This is the list of addresses who will be paid out from your contract.<br />You can withdraw the ETH in your contract at any time and it will be paid out according to the table defined here.
                    </p>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="w-fit p-4 rounded-lg border border-blue-700 text-blue-700 bg-blue-100 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-700 mr-2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg><p className="text-blue-600 text-md">You <b>CANNOT</b> modify these addresses or payouts once deployed!</p></div></div>
                <table className="w-3/4 table p-4 border border-gray-200 rounded-lg mt-5">
                    <thead>
                        <tr>
                            <th className="border-b-2 p-4 text-3xl whitespace-nowrap font-heavy text-gray-700">ETH Address</th>
                            <th className="border-b-2 p-4 text-3xl whitespace-nowrap font-normal text-gray-700"></th>
                            <th className="border-b-2 p-4 whitespace-nowrap font-normal text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-gray-700">
                            <td className="border-b-2 p-4 text-left">
                                <div className="flex flex-col">
                                    <p className="text-2xl font-semibold text-gray-700 ">mintplex.eth</p>
                                    <p className="text-xs text-gray-700 italic">Mintplex takes no fees on primary or secondary sales!
                                    </p>
                                </div>
                            </td>
                            <td className="border-b-2 p-4 text-2xl font-semibold text-gray-700 text-left">0%</td>
                            <td className="border-b-2 p-4 dark:border-dark-5 text-center">
                            </td>
                        </tr>
                        <tr className="text-gray-700">
                            <td className="border-b-2 p-2  text-center">
                                <input type="text" className="w-full text-2xl font-semibold text-gray-700 text-left"
                                    autoComplete="off" placeholder=""
                                    value="0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3" />
                            </td>
                            <td className="border-b-2 p-2 text-left">
                                <div className="flex items-center">
                                    <input type="number" min="1" max="100" className="w-14 text-2xl font-semibold text-gray-700 text-left" autoComplete="off" placeholder="" value="100" />
                                    <p className="text-2xl font-semibold text-gray-700 text-center">%</p>
                                </div>
                            </td>
                            <td className="border-b-2 p-2 dark:border-dark-5 text-center">
                            </td>
                        </tr>
                        <tr className="text-gray-700">
                            <td colSpan={3} className="border-b-2 p-4 dark:border-dark-5 text-center">
                                <button className=" mx-auto p-2 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 mx-1">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="16"></line>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>Add payout address
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ProjectLayout>
    );
};

export default ProjectPayouts;
