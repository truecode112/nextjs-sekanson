import React from "react";

type Props = {};

const SekansonRecipes = (props: Props) => {
    return (
        <section>
            <div className="bg-ramppdeepblue text-white py-8">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 overflow-x-scroll">
                    <div className="flex flex-col w-full md:top-36 w-fit mt-2 py-6 md:py-0 px-8">
                        <p className="text-5xl leading-normal md:leading-relaxed mb-2 ff">
                            Sekanson Recipes
                        </p>
                        <p className="text-2xl mb-4">
                            We offer tons of tools and plugins that make adding utility and
                            growing your community easier.
                        </p>
                        <button className="border border-white p-2 rounded-md w-fit hover:text-ramppblue hover:bg-white">
                            Launch your community →
                        </button>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-4 px-8 md:px-0 border border-blue-800 rounded-lg h-full md:items-start items-center">
                        <div className="bg-white rounded-lg shadow-md flex flex-col p-4 w-full md:w-80 h-120 shadow-md">
                            <p className="ff font-bold text-black text-2xl">
                                NFT Discounts with Shopify
                            </p>
                            <div className="w-full my-3">
                                <img
                                    alt="promo"
                                    src="/images/token-gated-shopify.webp"
                                    className="rounded-lg  w-full h-40"
                                />
                            </div>
                            <p className="text-gray-600 leading-tight text-base">
                                With Sekanson &apos; s Shopify Discount plugin you can dynamically
                                reward your NFT holders with discount codes on your own Shopify
                                merch store!
                            </p>
                            <div className="w-full flex justify-center mt-4">
                                <a
                                    href="https://www.youtube.com/watch?v=FSCCY_w2PRU"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cursor-pointer w-fit px-4 py-1 rounded-lg bg-ramppblue text-white"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col p-4 w-full md:w-80 h-120 shadow-md">
                            <p className="ff font-bold text-black text-2xl">
                                Bulk Airdrop with Sekanson
                            </p>
                            <div className="w-full my-3">
                                <img
                                    alt="promo"
                                    src="/images/bulk-airdrops.webp"
                                    className="rounded-lg  w-full h-40"
                                />
                            </div>
                            <p className="text-gray-600 leading-tight text-base">
                                Using Sekanson &apos; s advanced ERC-1155 standard you can easily
                                airdrop new items to all your current NFT holders.
                            </p>
                            <div className="w-full flex justify-center mt-4">
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cursor-pointer w-fit px-4 py-1 rounded-lg bg-gray-300 text-gray-800"
                                >
                                    Coming Soon
                                </a>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md flex flex-col p-4 w-full md:w-80 h-120 shadow-md">
                            <p className="ff font-bold text-black text-2xl">
                                Sekanson minting in Discord
                            </p>
                            <div className="w-full my-3">
                                <img
                                    alt="promo"
                                    src="/images/discord-mints.webp"
                                    className="rounded-lg  w-full h-40"
                                />
                            </div>
                            <p className="text-gray-600 leading-tight text-base">
                                With Sekanson &apos;s Discord bots you can host your public mint
                                inside of your project Discord.
                            </p>
                            <div className="w-full flex justify-center mt-4">
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cursor-pointer w-fit px-4 py-1 rounded-lg bg-gray-300 text-gray-800"
                                >
                                    Coming Soon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SekansonRecipes;
