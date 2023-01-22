import React, { useEffect, useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext'

type Props = {}

const LoadingMessage = (props: Props) => {
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
        <div>

            <p className="my-2 text-gray-400 text-sm">
                {loadingText}
            </p>

        </div>
    )
}

export default LoadingMessage