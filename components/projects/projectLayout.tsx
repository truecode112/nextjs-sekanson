import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, Suspense, useState } from "react";
import { WithChildren } from "../../types/common";
import { LoaderLarge } from "../Loaders";
;
interface LayoutProps extends WithChildren {
    sidebar?: ReactNode;
    selectedNetwork?: any;
}
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

const ProjectLayout = ({ children, selectedNetwork }: LayoutProps) => {
    const [collapseSettings, setCollapseSettings] = useState(false)
    if (!selectedNetwork) selectedNetwork = networkChains[0]
    const router = useRouter()
    const activePath = router.pathname

    return (
        <div className="px-2 md:px-6 py-2 w-full flex space-x-2 xl:space-x-4">
            <div className="w-1/5 xl:1/6 h-auto relative">
                <div className="w-full bg-white rounded-lg sticky top-10">
                    <div className="w-full flex flex-col">
                        <div className="w-full flex flex-col space-y-4 px-1 mt-6 pb-4">
                            <div className="w-full flex items-center gap-2">
                                <img
                                    src={selectedNetwork.src}
                                    className="h-6"
                                    alt="current chain"
                                />
                                <div className="w-full flex flex-col bg-blue-50 rounded-lg h-auto p-2 overflow-hidden">
                                    <p className="font-black text-gray-800 whitespace-nowrap flex">
                                        My Sekanson Project
                                    </p>
                                    <p className="font-base text-gray-400 text-sm flex">
                                        ERC-721A
                                    </p>
                                    <div className="flex flex-col w-full">
                                        <div className="flex items-center gap-1">
                                            <p className="font-base text-gray-400 text-sm flex">
                                                Plan:
                                            </p>
                                            <p className="uppercase underline font-base text-gray-400 text-sm flex text-blue-500 font-semibold">
                                                Standard
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <a
                                                href="?new_sub=1"
                                                className="text-sm text-blue-500 underline"
                                            >
                                                Upgrade to Sekanson Pro →
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div
                                    onClick={() => setCollapseSettings(prev => !prev)}
                                    className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer transition duration-2000 ease-in-out">
                                    <div className="flex justify-left items-center space-x-4">
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
                                            className="h-6 w-6 text-ramppblue"
                                        >
                                            <line x1="4" y1="21" x2="4" y2="14"></line>
                                            <line x1="4" y1="10" x2="4" y2="3"></line>
                                            <line x1="12" y1="21" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12" y2="3"></line>
                                            <line x1="20" y1="21" x2="20" y2="16"></line>
                                            <line x1="20" y1="12" x2="20" y2="3"></line>
                                            <line x1="1" y1="14" x2="7" y2="14"></line>
                                            <line x1="9" y1="8" x2="15" y2="8"></line>
                                            <line x1="17" y1="16" x2="23" y2="16"></line>
                                        </svg>
                                        <p className="text-ramppblue font-semibold">Settings</p>
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
                                        className={
                                            clsx(
                                                "h-4 w-4 text-gray-400",
                                                collapseSettings ? "rotate-180" : ""
                                            )
                                        }
                                    >
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </div>
                                <div className={clsx(
                                    "bg-gray-100 rounded-lg",
                                    collapseSettings ? "hidden" : ""
                                )}>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/settings") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/settings"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className="">
                                                    Contract Information
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/features") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/features"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className=" ">Features</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/payouts") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/payouts"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className=" ">Payouts</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/teams") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/teams"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className=" ">Team &amp; Permissions</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/header-mark") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/header-mark"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className=" ">Header Mark</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/ipfs") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/ipfs"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className=" ">IPFS Setup</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={
                                        clsx(
                                            "flex flex-col space-y-3 ",
                                            activePath.includes("/generate") ? "border-l-4 border-ramppblue text-ramppblue font-semibold " : ""
                                        )
                                    }>
                                        <Link
                                            href="/xWDQUkBZ6qchztTuagNt/generate"
                                            target="_self"
                                            rel="noreferrer"
                                        >
                                            <div className="flex justify-left items-center py-4 px-2 ml-2">
                                                <p className="">Generate Contract</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <p className="uppercase text-xs font-semibold text-gray-600">
                                    testnet
                                </p>

                            </div>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/deploy/goerli"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                    <p className="text-black font-semibold">
                                        Deploy on Testnet
                                    </p>
                                </div>
                            </Link>
                            <div className="flex space-x-4 items-center">
                                <p className="uppercase text-xs font-semibold text-gray-600">
                                    mainnet
                                </p>
                                <div
                                    className="bg-gray-100 w-full"
                                    style={{ height: "2px" }}
                                ></div>
                            </div>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/deploy/mainnet"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <line x1="22" y1="2" x2="11" y2="13"></line>
                                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                    </svg>
                                    <p className="text-black font-semibold">
                                        Deploy on Mainnet
                                    </p>
                                </div>
                            </Link>
                            <div className="flex space-x-4 items-center">
                                <p className="uppercase text-xs font-semibold text-gray-600">
                                    Pro Tools
                                </p>
                                <div
                                    className="bg-gray-100 w-full"
                                    style={{ height: "2px" }}
                                ></div>
                            </div>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/hosting/marketplace"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <circle cx="9" cy="21" r="1"></circle>
                                        <circle cx="20" cy="21" r="1"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <p className="text-black font-semibold">
                                        Branded Marketplace
                                    </p>
                                </div>
                            </Link>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/snapshots"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                        <circle cx="12" cy="13" r="4"></circle>
                                    </svg>
                                    <p className="text-black font-semibold">
                                        Sekanson Snapshots
                                    </p>
                                </div>
                            </Link>
                            <div className="flex space-x-4 items-center">
                                <p className="uppercase text-xs font-semibold text-gray-600">
                                    Free Tools
                                </p>
                                <div
                                    className="bg-gray-100 w-full"
                                    style={{ height: "2px" }}
                                ></div>
                            </div>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/hosting"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                        ></rect>
                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                    </svg>
                                    <p className="text-black font-semibold">Custom Mint Site</p>
                                </div>
                            </Link>
                            <Link
                                target="_self"
                                rel="noreferrer"
                                href="/xWDQUkBZ6qchztTuagNt/landing/button-embed"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
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
                                        className="h-6 w-6 text-black"
                                    >
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                    <p className="text-black font-semibold">
                                        Embed Mint Button
                                    </p>
                                </div>
                            </Link>
                            <Link
                                href="https://mintparty.xyz/account?onboarding=sekanson"
                                rel="noreferrer"
                                target="_blank"
                                className="flex justify-between items-center hover:bg-gray-100 py-4 rounded-lg px-1 cursor-pointer"
                            >
                                <div className="flex justify-left items-center space-x-4">
                                    <img
                                        alt="mintparty.xyz"
                                        src="/images/mintparty.svg"
                                        className="h-6"
                                    />
                                    <p className="text-black font-semibold">
                                        Allowlist Presale Pages
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-4/5 xl:5/6 h-auto bg-white rounded-lg">
                {children}
            </div>
        </div>
    )

};

export default ProjectLayout;