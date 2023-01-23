import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import Web3 from "web3";
import { useAppContext } from "../context/AppContext";
import { useListen } from "../hooks/useListen";
import { useMetamask } from "../hooks/useMetamask";
import { AllChains, getChainByChainId, getChainInfoByChainId } from "../libs/constants";
import web3 from "../libs/getWeb3";
import { hexToDecimal, truncateAddress } from "../utils/address";
type Props = {};

const HomeNavbar = (props: Props) => {
    const { currentChainId, setCurrentChainId } = useAppContext()
    const { dispatch, state: { status, isMetamaskInstalled, wallet, balance }, } = useMetamask();
    const listen = useListen();
    const showInstallMetamask = status !== "pageNotLoaded" && !isMetamaskInstalled;
    const showConnectButton = status !== "pageNotLoaded" && isMetamaskInstalled && !wallet;
    const isConnected = status !== "pageNotLoaded" && typeof wallet === "string";
    const router = useRouter()
   
    const handleConnect = async () => {
        dispatch({ type: "loading" });
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            const balance = await window.ethereum!.request({
                method: "eth_getBalance",
                params: [accounts[0], "latest"],
            });

            console.log("nati ", accounts, balance)
            dispatch({ type: "connect", wallet: accounts[0], balance });

            // we can register an event listener for changes to the users wallet
            listen();
            window.location.href = "/my/projects"
        }
    };

    const handleGoToDashboard = async () => {
        dispatch({ type: "loading" });
        window.location.href = "/my/projects"
    };
    const [isMenuOpened, setIsMenuOpened] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            // start by checking if window.ethereum is present, indicating a wallet extension
            const ethereumProviderInjected = typeof window.ethereum !== "undefined";
            // this could be other wallets so we can verify if we are dealing with metamask
            // using the boolean constructor to be explecit and not let this be used as a falsy value (optional)
            const isMetamaskInstalled =
                ethereumProviderInjected && Boolean(window.ethereum.isMetaMask);

            const local = window.localStorage.getItem("metamaskState");

            // user was previously connected, start listening to MM
            if (local) {
                listen();
            }

            // local could be null if not present in LocalStorage
            const { wallet, balance } = local ? JSON.parse(local) : // backup if local storage is empty
                { wallet: null, balance: null };
            const getChainId = async () => {
                const chainId = await web3.eth.getChainId();
                setCurrentChainId(chainId);
            }
            getChainId()
            dispatch({ type: "pageLoaded", isMetamaskInstalled, wallet, balance });
        }
    }, []);


    const ToolsPopupMenu = () => {
        const [isActive, setIsActive] = useState(false)
        return (
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    onClick={() => setIsActive(prev => !prev)}
                    className="py-1 text-gray-800 border-b border-white hover:border-gray-200 flex items-center"
                    id="options-menu"
                >
                    Tools
                </button>
                {isActive &&
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <Link
                                href="https://nft-inator.com/?ref=sekanson.xyz"
                                rel="noreferrer"
                                target="_blank"
                                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                            >
                                <span>No-Code NFT Generator</span>
                            </Link>
                            <Link
                                href="/tools/metadata-maker"
                                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                            >
                                <span className="flex flex-col">
                                    <span>Metadata Editor</span>
                                </span>
                            </Link>
                            <Link
                                href="/tools/opensea-bulk-refresh"
                                className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                            >
                                <span className="flex flex-col">
                                    <span>OS Bulk Image Refresh</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                }
            </div>
        )
    }

    const addNetwork = async (networkDetails: any) => {
        try {
            await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                    networkDetails,
                ]
            });
            setCurrentChainId(networkDetails.chainId)
        } catch (err: any) {
            console.log(`error occured while adding new chain with chainId:${networkDetails.chainId}, err: ${err.message}`)
        }
    }



    const MenuButton = () => {
        return (
            <button
                onClick={() => {
                    setIsMenuOpened(prev => !prev)
                }}
                type="button"
                className={
                    clsx(
                        "transition duration-200 ease-in-out lg:hidden flex flex-col ml-4",
                        isMenuOpened ? "rotate-90" : "rotate-0"
                    )
                }
            >
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            </button>
        )
    }

    return (
        <div>
            <header className="h-16 bg-white md:h-20 flex justify-center items-center z-30 w-full overflow-visible border-b-2 border-gray-100">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="dark:text-white flex gap-x-6 items-center">
                        <Link href="/">
                            <picture>
                                <img
                                    src="/android-chrome-512x512.png"
                                    className="h-12"
                                    alt="sekanson.xyz"
                                />
                            </picture>
                        </Link>
                        <a
                            href="https://twitter.com/sekansonnft/status/1603589091043332096"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex gap-x-2 items-center hover:bg-gray-50 rounded-lg p-2">
                                <p className="text-2xl">🎉</p>
                                <div className=" flex flex-col">
                                    <p className="text-gray-500 text-sm">
                                        Sekanson Pro now only <b>$12.00 per month</b>!
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <nav className="text-gray-800 dark:text-white text-md  space-x-8 items-center hidden lg:flex">
                            <a
                                href="https://trusting-lungfish-ebb.notion.site/Sekanson-FAQ-s-91f5d2700d764031a44c064ed49f8aec"
                                target="_blank"
                                rel="noreferrer"
                                className=""
                            >
                                FAQ
                            </a>
                            <ToolsPopupMenu />
                            <a
                                href="https://twitter.com/@sekansonnft"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Twitter
                            </a>
                            {showConnectButton && (
                                <button
                                    onClick={handleConnect}
                                    className="py-1 px-2 flex items-center gap-x-2 text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue"
                                >
                                    {status === "loading" && (
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
                                    )}
                                    {status === "loading" ? "Loading" : "Launch a Project"}
                                </button>
                            )}
                            {wallet && (
                                <button
                                    onClick={handleGoToDashboard}
                                    className="py-1 px-2 flex items-center gap-x-2 text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue"
                                >
                                    {status === "loading" && (
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
                                    )}
                                    {status === "loading" ? "Loading" : "Dashboard"}
                                </button>
                            )}

                            {/* {showInstallMetamask && (
                                <a href="https://metamask.io/"
                                    rel="noreferrer"
                                    target="_blank">
                                    <button className="py-1 px-2 flex items-center gap-x-2 text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">
                                        Connect Wallet
                                    </button>
                                </a>
                            )} */}

                        </nav>

                        <MenuButton />

                    </div>

                </div>
            </header>
            <div className={
                clsx(
                    "fixed opacity-0 flex justify-center z-30 w-full transition duration-200 ease-in-out justify-center bg-white rounded-lg",
                    isMenuOpened ? "opacity-100" : "opacity-0"
                )
            }>
                <div className="flex flex-col text-xl space-y-4 items-baseline">
                    <a
                        href="https://twitter.com/@sekansonnft"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeNavbar;
