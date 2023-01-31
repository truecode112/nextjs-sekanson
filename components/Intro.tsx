import { Yeseva_One } from "@next/font/google";
import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useListen } from "../hooks/useListen";
import { useMetamask } from "../hooks/useMetamask";
import Head from "next/head";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Image from 'next/image'

type Props = {};


const Intro = (props: Props) => {
    const { dispatch, state: { status, isMetamaskInstalled, wallet, balance }, } = useMetamask();
    const [play, setPlay] = useState(false)
    const handleConnect = async () => {
        dispatch({ type: "loading" });
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            try {
                const sdk = new ThirdwebSDK("goerli");
                const edition = await sdk.getContract("0xEe58A930D719469eCa78A63f62a1064d6b686d49", "nft-collection");
                const balance = await edition.balanceOf(accounts[0]);
                
                if (balance.eq(0)) {
                    //alert('No NFT on this account');
                    //return window.location.href = "/";
                    setPlay(true);
                    setTimeout(() => {
                        setPlay(false)
                      }, 3000)
                } else {
                    window.location.href = "/main"
                }
            } catch (e) {
                console.log(e);
                setPlay(true);
                setTimeout(() => {
                    setPlay(false)
                  }, 3000)
            }
            
        }
    };

    return (
        <section>
            <Head>
                <title>Sekanson - Build and grow your NFT community without code</title>
                <meta name="description" content="Launching and managing an NFT community is hard. Sekanson has all the tools you need to launch, track, and manage your NFT community and project at scale. All without code."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="intro">
                    {play == true ? (
                        <Image 
                            src="/images/intro.gif" 
                            alt=""
                            fill/>
                    ) : (
                        <Image
                            src="/images/intro_still.png"
                            alt=""
                            fill
                        />
                    )}
                
                <button 
                    className="intro_connect" 
                    onClick={handleConnect}>
                </button>
            </div>
        </section>
    );
};

export default Intro;
