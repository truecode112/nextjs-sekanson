import React from "react";

type Props = {};

const WhoisSekanson = (props: Props) => {
    return (
        <section
            className="py-0 md:py-4 bg-white"
            style={{
                backgroundImage: "url(/images/teambg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <div className="bg-ramppgold w-full md:w-3/5 rounded-xl md:mx-auto md:m-6 px-8 py-4">
                <p className="text-5xl text-white ff text-center">Who is Sekanson?</p>
                <div className="grid grid-cols-2 gap-y-8 mx-auto p-14">
                    <div className="flex flex-col space-y-3 w-full justify-center items-center">
                        <img
                            src="/images/timfp.webp"
                            alt="Team member tcarambat.eth"
                            className="w-60 h-60 rounded-lg shadow-md cursor-pointer"
                        />
                        <p className="ff text-white font-bold text-3xl">tcarambat.eth</p>
                        <p className="w-full md:w-2/3 text-white leading-tight">
                            Web3 builder, passionate about community building and software
                        </p>
                        <div className="flex space-x-3 justify-start w-full md:w-2/3">
                            <a
                                aria-label="Tims Twitter Profile"
                                className="text-white"
                                href="https://twitter.com/@tcarambat"
                                target="_blank"
                                rel="noreferrer"
                            >
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
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a
                                aria-label="Tims OpenSea Profile"
                                className="text-white"
                                href="https://opensea.io/nulltxn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/os.svg"
                                    className="h-6 w-6"
                                    alt="Opensea.io"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-3 w-full justify-center items-center">
                        <img
                            src="/images/jorrelfp.webp"
                            alt="Team member jorrel.eth"
                            className="w-60 h-60 rounded-lg shadow-md cursor-pointer"
                        />
                        <p className="ff text-white font-bold text-3xl">jorrel.eth</p>
                        <p className="w-full md:w-2/3 text-white leading-tight">
                            Music NFT &amp; DAO enthusiast, data and customer obsessed
                        </p>
                        <div className="flex space-x-3 justify-start w-full md:w-2/3">
                            <a
                                aria-label="Jorrel Twitter Profile"
                                className="text-white"
                                href="https://twitter.com/@jorrel_s"
                                target="_blank"
                                rel="noreferrer"
                            >
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
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                            <a
                                aria-label="Jorrel OpenSea Profile"
                                className="text-white"
                                href="https://opensea.io/jorrel.eth"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src="/images/os.svg"
                                    className="h-6 w-6"
                                    alt="Opensea.io"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoisSekanson;
