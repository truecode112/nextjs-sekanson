import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { NetworkEnum } from "../../types/chain";
import NFTStorageSetup from "../ipfs_setup/NFTStorageSetup";
import PinataSetup from "../ipfs_setup/PinataSetup";
import ProjectLayout from "./projectLayout";

type Props = {};
enum StorageProviderEnum {
    PINATA = "Pinata",
    NFTStorage = "NFT.Storage",
}
const ProjectIpfs = (props: Props) => {
    const [beginSetup, setBeginSetup] = useState(false)

    const [selectedStorageProvider, setSelectedStorageProvider] = useState<string | null>(null)
    const Step0 = () => {
        return (
            <div>
                <h1 className="text-5xl font-black text-gray-700">
                    Getting Started
                </h1>
                <p className="text-base text-gray-800 my-4">
                    In the spirit of decentralization Mintplex wants you to still
                    fully own your content. We want to ensure that even if Mintplex
                    disappears off the face of the Earth, that your project remains
                    online! To do that we are going to help you decentalize your
                    project fully with IPFS!
                </p>
                <div className="flex flex-col space-y-8">
                    <div onClick={() => setSelectedStorageProvider(StorageProviderEnum.PINATA)} className={
                        clsx(
                            "w-fit flex space-x-6 items-center rounded-lg border   hover:shadow-md p-4 cursor-pointer",
                            selectedStorageProvider === StorageProviderEnum.PINATA ? "border-pink-600 bg-pink-50" : ""

                        )
                    }>
                        <img
                            src="/images/pinatalogo.svg"
                            className="w-auto h-20 rounded-lg"
                            alt="Pinata.cloud"
                        />
                        <div className="flex flex-col">
                            <p className={
                                clsx(
                                    "text-4xl ff font-YesevaOne ",
                                    selectedStorageProvider === StorageProviderEnum.PINATA ? "text-pink-700 " : "text-gray-700"
                                )
                            }>Pinata.cloud</p>
                            <p className="text-gray-800 w-max-20 max-w-[500px]">
                                Pinata.cloud is a premium IPFS service provider that gives
                                you decentralized hosting with additional services like
                                gateways, private IPFS content, technicial support, and
                                more.
                            </p>
                            <p className="text-gray-800 w-max-20 my-2 italic max-w-[500px]">
                                First 100 files or 1GB free - then plans begin at $20/mth
                            </p>
                        </div>
                    </div>
                    <div onClick={() => setSelectedStorageProvider(StorageProviderEnum.NFTStorage)}
                        className={
                            clsx(
                                "w-fit flex space-x-6 items-center rounded-lg border hover:shadow-md p-4 cursor-pointer",
                                selectedStorageProvider === StorageProviderEnum.NFTStorage ? "border-blue-700 bg-blue-50 " : "bg-gray-50 border-gray-600 ",
                            )
                        }
                    >
                        <img
                            src="/images/nftstorage.webp"
                            className="w-auto h-20 rounded-lg"
                            alt="NFT.Storage"
                        />
                        <div className="flex flex-col">
                            <p className={
                                clsx(
                                    "text-4xl ff  font-YesevaOne",
                                    selectedStorageProvider === StorageProviderEnum.NFTStorage ? "text-blue-700 " : "text-gray-700"
                                )
                            }

                            >NFT.Storage</p>
                            <p className="text-gray-800 w-max-20 max-w-[500px]">
                                NFT.Storage is a no-frills open source tool to upload your
                                NFTs directly to IPFS. Limit of 31GB per upload.
                            </p>
                            <p className="text-gray-800 w-max-20 my-2 italic max-w-[500px]">
                                NFT.Storage is free to use
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/QU21DLBcts6RG674PcnZ/ipfs-advanced"
                        className="text-sm my-4 text-blue-600 underline mt-10"
                    >
                        (advanced) I want to use my own server to host my content →{" "}
                    </Link>
                </div>
                <button
                    type="button"
                    disabled={!selectedStorageProvider}
                    onClick={() => setBeginSetup(true)}
                    className={
                        clsx(
                            "mt-6 px-6 py-2 rounded-md  text-ramppblue font-semibold",
                            selectedStorageProvider ? "cursor-pointer border border-ramppblue  hover:bg-ramppblue hover:text-white" : "cursor-not-allowed bg-gray-200 text-gray-600"
                        )
                    }
                >
                    {
                        selectedStorageProvider ? (
                            `Begin with ${selectedStorageProvider} →`
                        ) : (
                            "Select a provider to begin"
                        )
                    }

                </button>
            </div>
        )
    }

    return (
        <ProjectLayout>
            <div className="container mx-auto my-8 w-full">
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4">
                    {
                        beginSetup ? (
                            selectedStorageProvider === StorageProviderEnum.PINATA ? (
                                <PinataSetup goToInitialStep={() => setBeginSetup(false)} />
                            ) : (
                                <NFTStorageSetup />
                            )
                        ) : (
                            <Step0 />
                        )
                    }
                </div>
            </div>
        </ProjectLayout>
    );
};

export default ProjectIpfs;
