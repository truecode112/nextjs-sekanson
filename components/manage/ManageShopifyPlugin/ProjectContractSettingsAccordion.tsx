import clsx from 'clsx';
import { Field, FormikContextType, useFormikContext } from 'formik';
import React, { useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import { ApplicationType } from '../../../types/applications';

type Props = {}
const networkChains = [
    {
        id: "1",
        name: "Ethereum",
        src: "/images/eth-logo.svg",
        className:
            "border-gray-300  border hover:border-gray-700 text-gray-300 hover:text-gray-700",
        activeClass: "bg-gray-100 text-gray-700 border-gray-700",
    },
    {
        id: "2",
        name: "Polygon",
        src: "/images/polygon-logo.svg",
        className:
            "border-indigo-300 hover:border-indigo-700 text-gray-300 hover:text-indigo-700",
        activeClass: "border-indigo-700 bg-indigo-100 text-indigo-700 ",
    },
    {
        id: "3",
        name: "Optimism",
        src: "/images/optimism-logo.svg",
        className:
            "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100",
    },
    {
        id: "4",
        name: "Arbitrum",
        src: "/images/arbitrum-logo.svg",
        className:
            "border-blue-300 hover:border-blue-700 text-gray-300 hover:text-blue-700",
        activeClass: "border-blue-700 text-blue-700 bg-blue-100",
    },
    {
        id: "5",
        name: "Avalanche",
        src: "/images/avalanche-logo.svg",
        className:
            "border-red-300 hover:border-red-700 text-gray-300 hover:text-red-700",
        activeClass: "border-red-700 text-red-700 bg-red-100",
    },
    {
        id: "6",
        name: "BNB Chain",
        src: "/images/bnb-logo.svg",
        className:
            "border-yellow-300 hover:border-yellow-700 text-gray-300 hover:text-yellow-700",
        activeClass: "border-yellow-700 text-yellow-700 bg-yellow-100",
    },
];


const ProjectContractSettingsAccordion = (props: Props) => {
    const [active, setActive] = useState(true);
    const { handleChangeApplication } = useManageShopifyPluginContext()
    const formik: FormikContextType<ApplicationType> = useFormikContext()
    const NetworkOption = () => {
        const handleChange = (value: string) => {
            handleChangeApplication({ type: "network", value })
        }

        return (
            <>
                {networkChains.map((networkChain) => {
                    return (
                        <div
                            key={networkChain.id}
                            onClick={() => {
                                handleChange(networkChain.name.toLowerCase())
                            }}
                            className={clsx(
                                "w-auto flex justify-center items-center space-x-4 p-4 bg-transparent rounded-lg cursor-pointer border ",
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
            </>
        );
    };

    return (
        <>
            <div
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
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
                    <h2 className="font-semibold text-xl text-gray-800">
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
                    <label className="text-gray-500">Blockchain</label>
                    <p className="text-xs text-gray-500">
                        Select the blockchain of where your contract is deployed. This
                        contract must exist.
                    </p>
                    <div className="mt-4 mb-6 w-full grid grid-cols-3 gap-4 items-center ">
                        <NetworkOption />
                    </div>
                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="url" className="text-gray-500">
                        Store URL
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the URL of your shopify store people shop on.
                    </p>
                    <Field
                        key="application_url"
                        onChange={formik.handleChange}
                        type="text"
                        className={
                            clsx(
                                "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent ",
                                formik.touched.url && formik.errors.url && "border-red-700"
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
                    <label className="text-gray-500">Contract Type</label>
                    <p className="text-xs text-gray-500">
                        Mintplex supports ERC-721, ERC-1155, and ERC-20 contracts.
                    </p>
                    <Field
                        as="select"
                        name="contractType"
                        onChange={formik.handleChange}
                        className="mt-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                    >
                        <option value="ERC-721A">ERC-721 / ERC-721A</option>
                        <option value="ERC-1155">ERC-1155</option>
                        <option value="ERC-20">ERC-20</option>
                    </Field>
                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="testnetContractAddress" className="text-gray-500">
                        Testnet Contract address
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the contract address of your contract on a testnet
                        (Goerli, Mumbai, etc). This is so you can test out the Mintplex
                        Shopify Plugin without having to deploy a mainnet contract.
                    </p>
                    <Field
                        type="text"
                        onChange={formik.handleChange}
                        className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent "
                        name="testnetContractAddress"
                        autoComplete="off"
                        placeholder="0x9a68563da....abe2372665"
                    />
                </div>
                <div className="relative w-3/4 my-4">
                    <label
                        htmlFor="productionContractAddress"
                        className="text-gray-500"
                    >
                        Production Contract address
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the contract address of your live contract.
                    </p>
                    <Field
                        onChange={formik.handleChange}
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