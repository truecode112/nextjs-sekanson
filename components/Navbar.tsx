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

const Navbar = (props: Props) => {
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
        }
    };

    const handleDisconnect = () => {
        dispatch({ type: "loading" });
        dispatch({ type: "disconnect" });
        router.push('/');
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



    // const ChainMenu = () => {
    //     <Menu>
    //         <Menu.Button>More</Menu.Button>
    //         <Menu.Items>
    //             {chains.map((chain, index) => {
    //                 return (
    //                     <Menu.Item key={index + chain.id}>
    //                         {({ active }) => (
    //                             <button
    //                                 type="button"
    //                                 className={clsx(
    //                                     "w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent",
    //                                     active && "bg-blue-500"
    //                                 )}
    //                                 role="menuitem"
    //                             >
    //                                 <div className="flex space-x-2 items-center w-fit">
    //                                     <img alt={chain.alt} src={chain.img} className="h-4 w-4" />
    //                                     <p className="font-semibold text-gray-700">{chain.title}</p>
    //                                 </div>
    //                             </button>
    //                         )}
    //                     </Menu.Item>
    //                 );
    //             })}
    //         </Menu.Items>
    //     </Menu>;

    //     return (
    //         <>
    //             <ChainMenu />
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Ethereum chain"
    //                         src="/images/eth-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Ethereum</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Polygon chain"
    //                         src="/images/polygon-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Polygon</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Mumbai chain"
    //                         src="/images/polygon-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Mumbai</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Optimism chain"
    //                         src="/images/optimism-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Optimism</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Goerli Optimism chain"
    //                         src="/images/optimism-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Goerli Optimism</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 
    //   border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Arbitrum chain"
    //                         src="/images/arbitrum-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Arbitrum</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Arbitrum Testnet chain"
    //                         src="/images/arbitrum-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Arbitrum Testnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Avalanche chain"
    //                         src="/images/avalanche-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Avalanche</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700hover:bg-gray-100 hover:text-gray-900 border-b border-gray-200"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="Avalanche Testnet chain"
    //                         src="/images/avalanche-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">Avalanche Testnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="BNB Mainnet chain"
    //                         src="/images/bnb-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">BNB Mainnet</p>
    //                 </div>
    //             </button>
    //             <button
    //                 type="button"
    //                 className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
    //                 role="menuitem"
    //             >
    //                 <div className="flex space-x-2 items-center w-fit">
    //                     <img
    //                         alt="BNB Testnet chain"
    //                         src="/images/bnb-logo.svg"
    //                         className="h-4 w-4"
    //                     />
    //                     <p className="font-semibold text-gray-700">BNB Testnet</p>
    //                 </div>
    //             </button>
    //         </>
    //     );
    // };

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

    const ToolsWithExtraPopupMenu = () => {
        const [isActive, setIsActive] = useState(false)
        return (
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    onClick={() => setIsActive(prev => !prev)}
                    className="py-1 text-gray-800 border-b border-white hover:border-gray-200 flex items-center"
                    id="options-menu"
                >
                    Tools &amp; Extras
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
                        className={clsx(
                            "h-4 w-4 ml-2 transition duration-200 ease-in-out",
                            isActive ? "rotate-180" : "rotate-0"
                        )}
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>

                </button>
                {isActive &&
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                            className="py-1 "
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
                                <span className="flex flex-col">
                                    <span>No-Code NFT Generator</span>
                                </span>
                            </Link>
                            <Link
                                href="/tools/metadata-maker"
                                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                            >
                                <span className="flex flex-col">
                                    <span>Metadata Editor</span>
                                </span>
                            </Link>
                            <Link
                                href="/tools/opensea-bulk-refresh"
                                className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
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

    const ProfilePopupMenu = () => {
        const [isActive, setIsActive] = useState(false)
        return (
            <div className="relative inline-block text-left">
                <div onClick={() => setIsActive(prev => !prev)} className="flex items-center space-x-1 hover:bg-gray-200 p-2 cursor-pointer rounded-lg">
                    <div className="flex">
                        <div
                            style={{
                                borderRadius: " 50px",
                                overflow: "hidden",
                                padding: "0px",
                                margin: "0px",
                                width: "30px",
                                height: "30px",
                                display: "inline-block",
                                background: "rgb(200, 20, 59)",
                            }}
                        >
                            <svg x="0" y="0" width="30" height="30">
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-0.40947637363194944 -7.383047979261877) rotate(278.9 15 15)"
                                    fill="#F5DC00"
                                ></rect>
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-4.438295972664206 16.598233685650683) rotate(266.1 15 15)"
                                    fill="#1885F2"
                                ></rect>
                                <rect
                                    x="0"
                                    y="0"
                                    width="30"
                                    height="30"
                                    transform="translate(-26.953976728839613 -2.3223006953495564) rotate(242.8 15 15)"
                                    fill="#FB1849"
                                ></rect>
                            </svg>
                        </div>
                    </div>
                    <p className="text-gray-900 text-base font-semibold">
                        {truncateAddress(wallet || "")}
                    </p>
                </div>
                {isActive &&
                    <div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                        <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <button className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                                Refresh Cache
                            </button>
                            <button onClick={() => {
                                setIsActive(false)
                                handleDisconnect()
                            }} className="w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
                                Disconnect
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }

    const switchNetwork = async (chainId: number) => {
        if (typeof window !== "undefined") {
            if (currentChainId !== chainId) {
                try {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: Web3.utils.toHex(chainId) }]
                    });
                    listen();

                    setCurrentChainId(chainId)
                    console.log(`switched to chainid : ${chainId} succesfully`);
                } catch (err: any) {
                    console.log(`error occured while switching chain to chainId ${chainId}, err: ${err.message} code: ${err.code}`);
                    if (err.code === 4902) {
                        console.log(`Error in adding`);
                        addNetwork(getChainInfoByChainId(chainId));
                    }
                }
            }
        }
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

    const ChainSelectMenu = () => {
        const currentChain = getChainByChainId(currentChainId)
        return (
            <div className="relative">
                <Listbox
                    value={currentChainId} onChange={(data) => {
                        console.log(data.chainInfo.chainId, "selected Chain")
                    }}>
                    <Listbox.Button
                        type="button"
                        className="w-full flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent border border-gray-300 bg-white justify-between w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 w-max"
                    >
                        <div className="flex space-x-2 items-center w-fit">
                            <img
                                alt={currentChain.alt}
                                src={currentChain.img}
                                className="h-4 w-4"
                            />
                            <p className="font-semibold text-gray-700">
                                {currentChain.title}
                            </p>

                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
                            <polyline points="6 9 12 15 18 9">
                            </polyline>
                        </svg>
                    </Listbox.Button>
                    <Listbox.Options className="bg-white z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5
                    ">
                        {AllChains.map((chain) => (
                            <Listbox.Option
                                key={chain.id}
                                value={chain}
                                as={Fragment}
                            >
                                <button
                                    type="button"
                                    onClick={() => switchNetwork(chain.chainInfo.chainId)}
                                    className="w-full px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 border-b border-transparent"
                                    role="menuitem"
                                >
                                    <div className="flex space-x-2 items-center w-fit">
                                        <img
                                            alt={chain.alt}
                                            src={chain.img}
                                            style={chain.style}
                                            className="h-4 w-4"
                                        />
                                        <p className="font-semibold text-gray-700">{chain.title}</p>
                                    </div>
                                </button>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox>
            </div>

        )

    };

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
                        <Link href="/my/projects">
                            <img
                                src="/android-chrome-512x512.png"
                                className="h-12"
                                alt="sekanson.xyz"
                            />
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
                    {
                        wallet ?
                            (
                                <div className="flex items-center">
                                    <nav className="text-gray-800 dark:text-white text-md lg:flex space-x-8 items-center hidden">

                                        <div className="flex items-center space-x-2">
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
                                                        "h-4 w-4 text-gray-600",
                                                        balance !== null && "text-green-500"
                                                    )
                                                }
                                            >
                                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                            </svg>
                                            <p className={
                                                clsx(
                                                    "text-base text-gray-600",
                                                    balance !== null ? "text-green-400" : "text-gray-600"
                                                )
                                            }>{web3.utils.fromWei(balance || "", 'ether')}</p>
                                        </div>
                                        {/* <div className="relative inline-block text-left">
                                    <div>
                                        <button
                                            type="button"
                                            className="border border-gray-300 bg-white flex items-center justify-between w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0"
                                        >
                                            <div className="flex space-x-2 items-center">
                                                <img
                                                    alt="current chain"
                                                    src="/images/eth-logo.svg"
                                                    className="h-4 w-4"
                                                    style={{
                                                        filter: "sepia(100%)",
                                                    }}
                                                />
                                                <p className="font-semibold text-gray-700">Goerli</p>
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
                                    <div className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                        <div
                                            className="py-1 "
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        ></div>
                                    </div>
                                </div>  */}
                                        <ChainSelectMenu />
                                        <a
                                            href="https://trusting-lungfish-ebb.notion.site/Sekanson-FAQ-s-91f5d2700d764031a44c064ed49f8aec"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center pb-1 border-b border-white hover:border-gray-200"
                                        >
                                            Support
                                        </a>
                                        <ToolsWithExtraPopupMenu />

                                        <ProfilePopupMenu />
                                    </nav>
                                    <button className="transition duration-200 ease-in-out lg:hidden flex flex-col ml-4">
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                        <span className="w-6 h-1 bg-gray-800 mb-1"></span>
                                    </button>
                                </div>
                            ) : (
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
                                                    // <svg
                                                    //     className="animate-spin -ml-1 mr-3 h-5 w-5 text-ramppblue hover:text-white"
                                                    //     xmlns="http://www.w3.org/2000/svg"
                                                    //     fill="none"
                                                    //     viewBox="0 0 24 24"
                                                    // >
                                                    //     <circle
                                                    //         className="opacity-25"
                                                    //         cx="12"
                                                    //         cy="12"
                                                    //         r="10"
                                                    //         stroke="currentColor"
                                                    //         strokeWidth="4"
                                                    //     ></circle>
                                                    //     <path
                                                    //         className="opacity-75"
                                                    //         fill="currentColor"
                                                    //         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    //     ></path>
                                                    // </svg>
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
                                                {status === "loading" ? "Loading" : "Launch Project"}
                                            </button>
                                        )}

                                        {showInstallMetamask && (
                                            <a href="https://metamask.io/"
                                                rel="noreferrer"
                                                target="_blank">
                                                <button className="py-1 px-2 flex items-center gap-x-2 text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">
                                                    Connect Wallet
                                                </button>
                                            </a>
                                        )}

                                    </nav>

                                    <MenuButton />

                                </div>
                            )
                    }

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

export default Navbar;
