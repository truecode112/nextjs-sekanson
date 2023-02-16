import { Yeseva_One } from "@next/font/google";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "../context/AppContext";
import { useListen } from "../hooks/useListen";
import { useMetamask } from "../hooks/useMetamask";

type Props = {};


const Hero = (props: Props) => {
    const router = useRouter()
    const { connected } = useAppContext()
    const { currentChainId, setCurrentChainId } = useAppContext()
    const { dispatch, state: { status, isMetamaskInstalled, wallet, balance }, } = useMetamask();
    const listen = useListen();
    const showInstallMetamask = status !== "pageNotLoaded" && !isMetamaskInstalled;
    const showConnectButton = status !== "pageNotLoaded" && isMetamaskInstalled && !wallet;
    const isConnected = status !== "pageNotLoaded" && typeof wallet === "string";

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

            dispatch({ type: "connect", wallet: accounts[0], balance });

            // we can register an event listener for changes to the users wallet
            listen();
            router.push('/my/projects');
        }
    };

    const handleGoToDashboard = async () => {
        dispatch({ type: "loading" });
        router.push('/my/projects');
    };

    return (
        <section>
            <div className="">
                <div className="flex text-center w-full space-x-8 items-center justify-center">
                    {showConnectButton && (
                        <button
                            onClick={handleConnect}
                            className="skull_asset">
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
                        </button>
                    )}
                    {wallet && (
                        <button
                            onClick={handleGoToDashboard}
                            className="skull_asset">
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
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
