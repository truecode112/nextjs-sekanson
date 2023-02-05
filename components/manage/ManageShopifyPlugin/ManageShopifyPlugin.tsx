import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import BannerStyleSettingsAccordion from './BannerStyleSettingsAccordion';
import GetYourEmbedScriptAccordion from './GetYourEmbedScriptAccordion';
import ProjectContractSettingsAccordion from './ProjectContractSettingsAccordion';
import ShopifyPluginBrowserFrame from './ShopifyPluginBrowserFrame';
import ShopifyStoreSettingsAccordion from './ShopifyStoreSettingsAccordion';
import { FormikContextType, useFormikContext } from 'formik';
import { ApplicationType } from '../../../types/applications';
import LoadingMessage from './LoadingMessage';
import { useRouter } from 'next/router';

type Props = {}

const ManageShopifyPlugin = (props: Props) => {
    const router = useRouter();
    const formik: FormikContextType<ApplicationType> = useFormikContext()
    const { validationError } = useManageShopifyPluginContext()

    return (
        <div>
            <section className=" mx-auto px-6 my-8 w-full flex">
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4">
                    <div className="mt-2 mb-6">
                        <button
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    router.push('/my/projects');
                                }
                            }}
                            className="text-blue-500 underline text-base"
                        >
                            ← Dashboard
                        </button>
                    </div>
                    <LoadingMessage />
                    <div
                        className=" place-top type-dark"
                        id="t28f06b82-fc74-4fd8-8ad3-b6d0303fab79"
                        data-id="tooltip"
                    ></div>
                    <h1 className="text-2xl text-gray-800">
                        Configure the plugin for your store
                    </h1>
                    <p className="text-base text-gray-600 my-2">
                        Modify the settings below to change the presentation of the banner
                        that will go on your store.
                    </p>

                    <ProjectContractSettingsAccordion />
                    <ShopifyStoreSettingsAccordion />
                    <BannerStyleSettingsAccordion />
                    <GetYourEmbedScriptAccordion />
                    < >
                        {
                            (formik.isSubmitting ? (
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
                                    <p> Submitting</p>
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
                                (validationError.message == 'Success' ? (
                                    <button className="px-6 py-1 flex space-x-2 items-center rounded-md bg-transparent border border-green-600 text-green-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#00FF00"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-6 w-6 text-green-600"
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                        <p>{validationError.message}</p>
                                    </button>
                                ) : (
                                    <button disabled={!(formik.isInitialValid || formik.isValid)} className="submit-project px-6 py-1 flex space-x-2 items-center rounded-md bg-transparent border border-gray-600 text-gray-500 hover:bg-gray-300 hover:text-gray-600">
                                        <p> Submit</p>
                                    </button>
                                ))
                            ))
                        }
                    </>

                </div>
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4 rounded-md border-1">
                    <ShopifyPluginBrowserFrame key="ShopifyPluginBrowserFrame" />
                </div>
            </section>
        </div>
    )
}

export default ManageShopifyPlugin