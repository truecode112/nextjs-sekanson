import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import ProjectLayout from "./projectLayout";

type Props = {};

const ProjectHeaderMark = (props: Props) => {
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

    const NetworkOption = () => {
        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <div
                            key={networkChain.id}
                            onClick={() => setSelectedNetwork(networkChain)}
                            className={clsx(
                                "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
                                JSON.stringify(selectedNetwork) === JSON.stringify(networkChain)
                                    ? networkChain.activeClass
                                    : ""
                            )}
                        >
                            <img alt="ethereum" src={networkChain.src} className="h-8" />
                            <p>{networkChain.name}</p>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <ProjectLayout selectedNetwork={selectedNetwork}>
            <div className="w-5/6 h-auto bg-white rounded-lg">
                <div className="container w-full h-full m-6">
                    <div className="flex items-center space-x-10">
                        <h1 className="text-5xl font-black text-gray-700">
                            Contract ASCII Mark
                        </h1>
                        <button className="px-4 py-2 flex items-center rounded-md text-white font-semibold bg-black">
                            Save changes
                        </button>
                    </div>
                    <p className="mt-2 text-gray-800">
                        Add a little bit of ✨spice✨ to the top of your contracts code with
                        a custom ascii mark.
                    </p>
                    <a
                        href="https://patorjk.com/software/taag/#p=display&amp;f=Slant&amp;t=My Mintplex Project"
                        target="_blank"
                        rel="noreferrer"
                        className="text-ramppblue underline hover:text-blue-600 cursor-pointer"
                    >
                        You can generate one from this ASCII generator →
                    </a>
                    <div className="relative w-3/4 my-4">
                        <label className="text-gray-500">Paste in your header mark</label>
                        <pre
                            contentEditable="true"
                            className="border border-gray-300 rounded-lg h-fit"
                            style={{ minHeight: "300px" }}
                        >
                            fasfas
                        </pre>
                    </div>
                </div>
            </div>
        </ProjectLayout>
    );
};

export default ProjectHeaderMark;
