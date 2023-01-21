import clsx from 'clsx';
import { Field, FormikContextType, useFormikContext } from 'formik';
import React, { useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import { ApplicationType } from '../../../types/applications';

type Props = {}

const ShopifyStoreSettingsAccordion = (props: Props) => {

    const [active, setActive] = useState(true);
    const formik: FormikContextType<ApplicationType> = useFormikContext()
    const { validationError } = useManageShopifyPluginContext()
    const SetupTabs = () => {
        const [activeTab, setActiveTab] = useState(0);
        const formik: FormikContextType<ApplicationType> = useFormikContext()
        return (
            <div className=" flex flex-col transition duration-500 ease-in-out">
                <div className="w-full flex space-x-8">
                    <button
                        type="button"
                        onClick={() => setActiveTab(0)}
                        className={clsx(
                            "cursor-pointer text-lg ",
                            activeTab === 0
                                ? "text-ramppblue underline"
                                : "text-gray-400  hover:text-ramppblue"
                        )}
                    >
                        Advanced Setup
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveTab(1)}
                        className={clsx(
                            "cursor-pointer text-lg ",
                            activeTab === 1
                                ? "text-ramppblue underline"
                                : "text-gray-400  hover:text-ramppblue"
                        )}
                    >
                        Basic Setup
                    </button>
                </div>
                {activeTab === 0 ? (
                    <>
                        <p className="text-sm my-2 text-gray-600">
                            Advanced setup will create a <u>unique</u> discount per validation
                            for wallet that expires 15 minutes from creation.
                        </p>
                        <div className="relative w-3/4 my-4">
                            <label className="text-gray-500">Minimum Token/NFT balance</label>
                            <p className="text-xs text-gray-500">
                                This is the minimum amount of NFTs/Tokens you want holders to
                                hold in order to be able to receive the discount code.
                            </p>
                            <Field
                                onChange={formik.handleChange}
                                type="number"
                                className={clsx(
                                    "mt-1 flex-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent",
                                    formik.touched.desiredBalance && formik.errors.desiredBalance && "border-red-700"

                                )}
                                name="desiredBalance"
                                autoComplete="off"
                                min={1}
                            />
                            {formik.errors.desiredBalance && formik.touched.desiredBalance && (
                                <p className="text-red-700 font-light">
                                    {formik.errors.desiredBalance}
                                </p>
                            )}
                        </div>
                    </>
                ) : (
                    <div>
                        <div className="relative w-3/4 my-4">
                            <label className="text-gray-500">Minimum Token/NFT balance</label>
                            <p className="text-xs text-gray-500">
                                This is the minimum amount of NFTs/Tokens you want holders to
                                hold in order to be able to receive the discount code.
                            </p>
                            <Field
                                type="number"
                                onChange={formik.handleChange}
                                name="desiredBalance"
                                className={clsx(
                                    "mt-1 flex-1 appearance-none w-fit py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent",
                                    formik.touched.desiredBalance && formik.errors.desiredBalance && "border-red-700"

                                )}
                                autoComplete="off"
                                min={1}
                            />
                            {formik.errors.desiredBalance && formik.touched.desiredBalance && (
                                <p className="text-red-700 font-light">
                                    {formik.errors.desiredBalance}
                                </p>
                            )}
                        </div>
                        <div className="relative w-3/4 my-4">
                            <label htmlFor="discountCode" className="text-gray-500">
                                Shopify Discount Code
                            </label>
                            <p className="text-xs text-gray-500">
                                This is the discount code from your Shopify store you wish to
                                apply to holders who pass verification.
                            </p>
                            <Field
                                type="text"
                                className="mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                                name="discountCode"
                                onChange={formik.handleChange}
                                autoComplete="off"
                                placeholder="Discount code from Shopify"
                            />
                            <a
                                href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/basic-setup-faq/how-to-generate-a-discount-code"
                                target="_blank"
                                rel="noreferrer"
                                className="underline text-blue-500 text-xs"
                            >
                                How do I set a discount code on Shopify?
                            </a>
                        </div>
                    </div>
                )}
            </div>
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
                        className="h-6 w-6 text-yellow-600"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <h2 className="font-semibold text-xl text-gray-800">
                        Shopify Store Settings
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
                <SetupTabs />
                <div className="relative w-3/4 my-4">
                    <label htmlFor="shopURL" className="text-gray-500">
                        Store Admin URL
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the base url in which you administrate your store from.
                    </p>
                    <Field
                        onChange={formik.handleChange}
                        type="url"
                        required
                        className={
                            clsx(
                                "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg  border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent ",
                                formik.errors.shopURL && "border-red-700"
                            )
                        }
                        name="shopURL"
                        autoComplete="off"
                        placeholder="https://mystore.myshopify.com"
                    />
                    {formik.touched.shopURL && formik.errors.shopURL && (
                        <p className="text-red-700 font-light">
                            {formik.errors.shopURL}
                        </p>
                    )}

                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="shopifyAPIKey" className="text-gray-500">
                        Shopify App API Key
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the api key for a custom app on your store that we will
                        use to create new discount codes dynamically. This key is
                        encrypted before storing.
                    </p>
                    <Field
                        onChange={formik.handleChange}
                        type="password"
                        className={
                            clsx(
                                "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent",
                                formik.errors.shopifyAPIKey && "border-red-700"
                            )
                        }
                        name="shopifyAPIKey"
                        autoComplete="off"
                        placeholder="Shopify App API Key"
                    />
                    {formik.errors.shopifyAPIKey && formik.touched.shopifyAPIKey && (
                        <p className="text-red-700 font-light">
                            {formik.errors.shopifyAPIKey}
                        </p>
                    )}
                    <a
                        href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/advanced-setup-faq/how-to-create-a-shopify-app-key"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-blue-500 text-xs"
                    >
                        Learn how to get this API key easily.
                    </a>
                </div>
                <div className="relative w-3/4 my-4">
                    <label htmlFor="priceRuleId" className="text-gray-500">
                        Discount Price Rule ID
                    </label>
                    <p className="text-xs text-gray-500">
                        This is the template discount Mintplex will use when creating
                        discount codes for holders.
                    </p>
                    <Field
                        onChange={formik.handleChange}
                        type="text"
                        className={
                            clsx(
                                " mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg  border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent",
                                formik.errors.priceRuleId && "border-red-700"
                            )
                        }
                        name="priceRuleId"
                        autoComplete="off"
                        placeholder="Discount code from Shopify"
                    />
                    <a
                        href="https://docs.rampp.xyz/rampp-apps-faq/shopify-token-discount-plugin/advanced-setup-vs-basic-setup/advanced-setup-faq/how-to-generate-a-price-rule-id"
                        target="_blank"
                        rel="noreferrer"
                        className="underline text-blue-500 text-xs"
                    >
                        How to setup a price rule on Shopify
                    </a>
                </div>
            </div>
            {
                formik.isInitialValid || formik.isValid && (formik.isSubmitting ? (
                    <button className="px-6 py-1 flex space-x-2 items-center rounded-md bg-transparent border border-gray-600 text-gray-500 hover:bg-gray-300 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin h-6">
                            <line x1="12" y1="2" x2="12" y2="6"></line>
                            <line x1="12" y1="18" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                            <line x1="2" y1="12" x2="6" y2="12"></line>
                            <line x1="18" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24">
                            </line>
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg>
                        <p> Validating</p>
                    </button>
                ) : validationError.error ? (
                    <button className="px-6 py-1 flex space-x-2 items-center rounded-md bg-transparent border border-red-600 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2"
                            strokeLinecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <p>{validationError.message}</p>
                    </button>
                ) : (
                    <button className="px-6 py-1 flex space-x-2 items-center rounded-md bg-transparent border border-gray-600 text-gray-500 hover:bg-gray-300 hover:text-gray-600">
                        <p> Validate Shopify Settings</p>
                    </button>
                ))
            }
        </>
    )
}

export default ShopifyStoreSettingsAccordion