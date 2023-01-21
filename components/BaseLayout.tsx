import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { WithChildren } from "../types/common";
import Footer from "./Footer";
import HomeNavbar from "./HomeNavbar";
import { LoaderLarge } from "./Loaders";
import Navbar from "./Navbar";

interface LayoutProps extends WithChildren {
    sidebar?: ReactNode;
}
const BaseLayout = ({ children }: LayoutProps) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Sekanson - Build and grow your NFT community without code</title>
                <meta name="description" content="Launching and managing an NFT community is hard. Sekanson has all the tools you need to launch, track, and manage your NFT community and project at scale. All without code."></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={
                clsx(
                    "font-mono bg-white relative h-screen z-0 overflow-scroll",
                )
            }
            >
                {
                    router.pathname === "/" ? <HomeNavbar /> : <Navbar />
                }
                <div className="min-h-[70vh] flex flex-col items-center">
                    {children}
                </div>
                <Footer />
            </main>
        </>
    )

};

export default BaseLayout;