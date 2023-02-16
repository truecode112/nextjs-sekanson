import clsx from 'clsx';
import { ChainId } from '@thirdweb-dev/sdk';
import { Field, FormikContextType, useFormikContext } from 'formik';
import React, { useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import { ApplicationType } from '../../../types/applications';

type Props = {}
const networkChains: Array<{ id: ChainId, name: string, src: string, className: string, activeClass: string }> = [
    {
        id: ChainId.Mainnet,
        name: "Ethereum",
        src: "/images/eth-logo.svg",
        className: "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
        activeClass: "bg-gray-200 text-gray-700 border-gray-700",
    },
    {
        id: ChainId.Polygon,
        name: "Polygon",
        src: "/images/polygon-logo.svg",
        className: "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
        activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 "
    },
    {
        id: ChainId.Optimism,
        name: "Optimism",
        src: "/images/optimism-logo.svg",
        className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100"
    },
    {
        id: ChainId.Arbitrum,
        name: "Arbitrum",
        src: "/images/arbitrum-logo.svg",
        className: "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
        activeClass: "border-blue-700 text-blue-700 bg-blue-100"
    },
    {
        id: ChainId.Avalanche,
        name: "Avalanche",
        src: "/images/avalanche-logo.svg",
        className: "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100"
    },
    {
        id: ChainId.BinanceSmartChainMainnet,
        name: "BNB Chain",
        src: "/images/bnb-logo.svg",
        className: "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
        activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100"
    }

]

const ProjectContractSettingsAccordion = (props: Props) => {
    const [active, setActive] = useState(true);
    const { handleChangeApplication } = useManageShopifyPluginContext()
    const formik: FormikContextType<ApplicationType> = useFormikContext()
    const handleChange = (value: string) => {
        handleChangeApplication({ type: "network", value })
    }

    const NetworkOption = () => {

        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <button
                            key={networkChain.id}
                            onClick={async () => {
                                // setSelectedNetwork(networkChain)
                                // if (isMismatched) {
                                // await switchNetwork(networkChain.id)
                                // }
                                console.log("nati")
                            }}
                            className={
                                clsx(
                                    "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border"
                                    // JSON.stringify(selectedNetwork) === JSON.stringify(networkChain) ? networkChain.activeClass : ""
                                )
                            }>
                            <img
                                alt="ethereum"
                                src={networkChain.src}
                                className="h-8"
                            />
                            <p>{networkChain.name}</p>
                        </button>
                    )
                })}
            </>
        )
    }
    return (
        <>
            <div
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
                    {formik.errors.url && formik.touched.url ? (
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
                            className="h-6 w-6 text-yellow-600"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                    ) : (
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
                            className="h-6 w-6 text-green-600"
                        >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    )}
                    <h2 className="font-semibold text-xl text-white hover:text-black">
                        Plugin Contract Settings
                    </h2>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                        "transition duration-500 ease-in-out",
                        active ? "0" : "rotate-180"
                    )}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </div>
            <div
                className={clsx(
                    " transition ease-in-out duration-[2000ms] delay-300",
                    active ? "block" : "hidden"
                )}
            >
                <div className="relative w-3/4 my-4">
                    <label className="text-white">Blockchain</label>
                    <p className="text-xs text-white">
                        Select the blockchain of where your contract is deployed. This
                        contract must exist.
                    </p>
                    <div className="mt-4 mb-6 w-full grid grid-cols-3 gap-4 items-center ">

                        {/* {networkChains.map((networkChain, index) => {
                            return (
                                <button type='button' key={index + networkChain.id}
                                    onClick={() => {
                                        formik.setFieldValue("network", networkChain.name.toLowerCase())
                                    }}
                                    className={
                                        clsx(
                                            "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
                                            JSON.stringify(formik.values.network?.toLowerCase()) === JSON.stringify(networkChain.name.toLowerCase())
                                                ? networkChain.activeClass
                                                : ""
                                        )
                                    }>
                                    <img
                                        alt="ethereum"
                                        src={networkChain.src}
                                        className="h-8"
                                    />
                                    <p>{networkChain.name}</p>
                                </button>
                            )
                        })} */}

                        {networkChains.map((networkChain) => {
                            return (
                                <div
                                    key={networkChain.id}
                                    onClick={() => {
                                        handleChange(networkChain.name.toLowerCase())
                                    }}
                                    className={clsx(
                                        "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border text-white",
                                        JSON.stringify(formik.values.network?.toLowerCase()) === JSON.stringify(networkChain.name.toLowerCase())
                                            ? networkChain.activeClass
                                            : ""
                                    )}
                                >
                                    <img alt="ethereum" src={networkChain.src} className="h-8" />
                                    <p>{networkChain.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="url" className="text-white">
                        Store URL
                    </label>
                    <p className="text-xs text-white">
                        This is the URL of your shopify store people shop on.
                    </p>
                    <Field
                        onChange={(e: any) => {
                            handleChangeApplication({ type: "url", value: e.target.value })
                        }}
                        value={formik.values.url}
                        type="url"
                        className={
                            clsx(
                                "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent ",
                                formik.errors.url && "border-red-700"
                            )
                        }
                        name="url"
                        autoComplete="off"
                        placeholder="https://mystore.com"
                    />
                    {formik.errors.url && formik.touched.url && (
                        <p className="text-red-700 font-light">
                            {formik.errors.url}
                        </p>
                    )}
                </div>
                <div className="relative w-3/4 my-4 flex flex-col">
                    <label className="text-white">Contract Type</label>
                    <p className="text-xs text-white">
                        Mintplex supports ERC-721, ERC-1155, and ERC-20 contracts.
                    </p>
                    <Field
                        as="select"
                        name="contractType"
                        // onChange={formik.handleChange}
                        onChange={(e: any) => {
                            handleChangeApplication({ type: "contractType", value: e.target.value })
                        }}
                        value={formik.values.contractType}
                        className="mt-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                    >
                        <option value="ERC-721A">ERC-721 / ERC-721A</option>
                        <option value="ERC-1155">ERC-1155</option>
                        <option value="ERC-20">ERC-20</option>
                    </Field>
                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="testnetContractAddress" className="text-white">
                        Testnet Contract address
                    </label>
                    <p className="text-xs text-white">
                        This is the contract address of your contract on a testnet
                        (Goerli, Mumbai, etc). This is so you can test out the Mintplex
                        Shopify Plugin without having to deploy a mainnet contract.
                    </p>
                    <Field
                        type="text"
                        onChange={(e: any) => {
                            handleChangeApplication({ type: "testnetContractAddress", value: e.target.value })
                        }}
                        value={formik.values.testnetContractAddress}
                        className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                        name="testnetContractAddress"
                        autoComplete="off"
                        placeholder="0x9a68563da....abe2372665"
                    />
                </div>
                <div className="relative w-3/4 my-4">
                    <label
                        htmlFor="productionContractAddress"
                        className="text-white"
                    >
                        Production Contract address
                    </label>
                    <p className="text-xs text-white">
                        This is the contract address of your live contract.
                    </p>
                    <Field
                        onChange={(e: any) => {
                            handleChangeApplication({ type: "productionContractAddress", value: e.target.value })
                        }}
                        value={formik.values.productionContractAddress}
                        type="text"
                        className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                        name="productionContractAddress"
                        autoComplete="off"
                        placeholder="0x9a68563da....abe2372665"
                    />
                </div>
            </div>
        </>

    )
}

export default ProjectContractSettingsAccordion