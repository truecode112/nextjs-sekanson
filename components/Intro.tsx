import { Yeseva_One } from "@next/font/google";
import clsx from "clsx";
import { useRouter } from 'next/router';
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useListen } from "../hooks/useListen";
import { useMetamask } from "../hooks/useMetamask";
import Head from "next/head";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Image from 'next/image'

type Props = {};


const Intro = (props: Props) => {
    const router = useRouter();

    const { dispatch, state: { status, isMetamaskInstalled, wallet, balance }, } = useMetamask();
    const [play, setPlay] = useState(false)
    const handleConnect = async () => {
        dispatch({ type: "loading" });
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            try {
                const sdk = new ThirdwebSDK("mainnet");
                const edition = await sdk.getContract("0x40AF75C18afF1DC542FA121CbC8Ae18f164004bC", "nft-collection");
                const balance = await edition.balanceOf(accounts[0]);
                
                if (balance.eq(0)) {
                    //alert('No NFT on this account');
                    //return window.location.href = "/";
                    setPlay(true);
                    setTimeout(() => {
                        setPlay(false)
                      }, 3000)
                } else {
                    router.push('/main');
                    //window.location.href = "/main"
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
        <section className="intro_bg">
            <Head>
                <title>sekanson - do you have the key?</title>
                <meta name="description" content="Adding value to those who seek it."></meta>
                <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="intro_bg">
                    {play == true ? (
                        <Image 
                            src="/images/intro_piece.gif"
                            className="intro_piece_center"
                            width={147}
                            height={170}
                            alt=""/>
                    ) : (
                        <Image
                            src="/images/intro_piece_still.gif"
                            className="intro_piece_center"
                            alt=""
                            width={147}
                            height={170}
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
