import clsx from "clsx";
import React from "react";

type Props = {};

const WhySekanson = (props: Props) => {
    return (
        <>
            <section className={clsx("py-4")}>
                <div className="flex-col space-y-4 pt-4 px-2 ">
                    <h2 className="ff text-5xl text-center font-bold text-black font-YesevaOne">
                        Why Sekanson?
                    </h2>
                    <p className="text-darkgray text-base text-center font-Lato">
                        Sekanson is a collection of all the tools you need to launch and
                        grow your NFT without compromises or code.
                    </p>
                </div>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-4 md:px-14 ">
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Tailor-made contracts
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Sekanson supports ERC-721A and ERC-1155 contract generation.
                            Create a gas efficient and purpose built contracts for your
                            project in 5 minutes.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                                    <path d="M13 13l6 6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                One-click deployments
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            No fuss or confusion, click a single button and be live on testnet
                            or mainnet in mere minutes.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Built for all collections
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Geared for collections of 100 or 10,000. Sekanson provides you all
                            the tools and resources to go from zero to 100% in minutes.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Minting Button &amp; Site
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            The contract is just the beginning - we help you take your
                            community public with a simple embed button that works on all
                            no-code website builders.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Own everything
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            With Sekanson you own everything. From IPFS to mint button - know
                            your project is totally decentralized.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Built-in utility
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Sekanson is writing the playbook for utility in NFTs. Our tools
                            allow you to easily add utility and purpose behind your collection
                            to keep your community engaged and growing.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Insights &amp; Analytics
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Get detailed metrics about who mints and owns your collection and
                            recommendations on how to scale better.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Free for all
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Sekanson is open for all. No payment upfront. No email signup.
                            Just connect your wallet and launch.
                        </p>
                    </div>
                    <div className="w-full py-8 px-6 rounded-lg border-2 border-ramppblue">
                        <div className="flex items-center">
                            <div className="w-auto h-auto p-2 rounded-full">
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
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                            </div>
                            <div className="ml-4 text-3xl ff font-semibold ff">
                                Marketplace ready
                            </div>
                        </div>
                        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
                            Once launched your collection is automatically listed and
                            compatible with all NFT marketplaces.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="py-1 px-2 flex text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">
                        Start your community →
                    </button>
                </div>
            </section>
            <section className="w-full flex bg-rampppink">
                <div className="flex flex-col space-y-4 py-4 mx-4 md:mx-14 w-full">
                    <h2 className="ff text-5xl text-center font-bold text-white pb-0 mb-0">
                        How is Sekanson doing?
                    </h2>
                    <p className="font-base text-center text-white w-full md:w-1/2 mx-auto leading-tight">
                        We are continously adding new tools and functionality to Sekanson.
                        The best time to start is today.
                    </p>
                    <div className="flex flex-wrap w-fit gap-10 justify-center md:justify-between mx-auto items-center py-4">
                        <div className="flex flex-col space-y-2 justify-center">
                            <p className="text-center text-5xl ff text-white font-black">
                                $8.1M+
                            </p>
                            <p className="text-center text-white">earned for creators</p>
                        </div>
                        <div className="flex flex-col space-y-2 justify-center">
                            <p className="text-center text-5xl ff text-white font-black">
                                1000+
                            </p>
                            <p className="text-center text-white">communities launched </p>
                        </div>
                        <div className="flex flex-col space-y-2 justify-center">
                            <p className="text-center text-5xl font-YesevaOne text-white font-black">
                                1.4M+
                            </p>
                            <p className="text-center text-white">
                                NFT &apos;s minted with Sekanson
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhySekanson;
