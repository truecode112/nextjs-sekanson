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
    const [is_denied, setDenied] = useState(false)

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
                    setDenied(true);
                    setTimeout(() => {
                        setPlay(false)
                    }, 3000)
                } else {
                    router.push('/main');
                    //window.location.href = "/main"
                }
            } catch (e) {
                setPlay(true);
                setDenied(true);
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
                <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="intro_bg">
                <div className="intro_piece_center">
                    {play == true ? (
                        <Image
                            src="/images/intro_piece.gif"
                            width={200}
                            height={240}
                            alt="" />
                    ) : (
                        <Image
                            src="/images/intro_piece_still.gif"
                            alt=""
                            width={200}
                            height={240}
                        />
                    )}

                    {is_denied == true && (
                        <div className="intro_layout">
                            <p className="intro_piece_text">ACCESS DENIED</p>
                            <p className="intro_piece_text" style={{color: "#00cf00"}}>&quot;OBTAIN KEY&quot;</p>
                        </div>
                    )}
                </div>

                <button
                    className="intro_connect"
                    onClick={handleConnect}>
                </button>
            </div>
        </section>
    );
};

export default Intro;
