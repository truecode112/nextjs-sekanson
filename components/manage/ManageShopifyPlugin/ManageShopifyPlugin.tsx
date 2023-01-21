import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import BannerStyleSettingsAccordion from './BannerStyleSettingsAccordion';
import GetYourEmbedScriptAccordion from './GetYourEmbedScriptAccordion';
import ProjectContractSettingsAccordion from './ProjectContractSettingsAccordion';
import ShopifyPluginBrowserFrame from './ShopifyPluginBrowserFrame';
import ShopifyStoreSettingsAccordion from './ShopifyStoreSettingsAccordion';

type Props = {}

const ManageShopifyPlugin = (props: Props) => {
    const LoadingMessage = () => {
        const { loading } = useManageShopifyPluginContext()
        const [loadingText, setLoadingText] = useState<string>("Watching for changes...")

        useEffect(() => {
            setLoadingText("Saving changes...")
            const updateFunction = setTimeout(() => {
                setLoadingText("Changes saved.")
                setTimeout(() => {
                    setLoadingText("Watching for changes...")
                }, 500);
            }, 1000);
            return () => {
                clearTimeout(updateFunction)
            }
        }, [loading])

        return (
            <p className="my-2 text-gray-400 text-sm">
                {loadingText}
            </p>
        )
    }
    return (
        <div>
            <section className="container mx-auto px-6 my-8 w-full flex">
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4">
                    <div className="mt-2 mb-6">
                        <Link
                            href="/my/projects"
                            className="text-blue-500 underline text-base"
                        >
                            ← Dashboard
                        </Link>
                    </div>
                    <LoadingMessage />
                    <div
                        className="__react_component_tooltip t28f06b82-fc74-4fd8-8ad3-b6d0303fab79 place-top type-dark"
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

                    <ProjectContractSettingsAccordion key="ProjectContractSettingsAccordion" />
                    <ShopifyStoreSettingsAccordion key="ShopifyStoreSettingsAccordion" />
                    <BannerStyleSettingsAccordion key="BannerStyleSettingsAccordion" />
                    <GetYourEmbedScriptAccordion key="GetYourEmbedScriptAccordion" />
                </div>
                <div className="w-1/2 flex-col h-screen overflow-y-scroll pr-4 rounded-md border-1">
                    <ShopifyPluginBrowserFrame key="ShopifyPluginBrowserFrame" />
                </div>
            </section>
        </div>
    )
}

export default ManageShopifyPlugin