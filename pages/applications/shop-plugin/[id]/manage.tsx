import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import BaseLayout from "../../../../components/BaseLayout";
import ManageShopifyPlugin from "../../../../components/manage/ManageShopifyPlugin/ManageShopifyPlugin";
import { ManageShopifyPluginContextWrapper } from "../../../../context/ManageShopifyPluginContext";
import { ApplicationType } from "../../../../types/applications";

type Props = {};
const application = {
    uid: "bMrUQ5JGoO2oHdk4jSk0",
    priceRuleId: "",
    contractType: "ERC-721A",
    url: "",
    testnetContractAddress: "",
    priceRuleData: "",
    isPaidPremium: false,
    productionContractAddress: "",
    tokenId: "",
    type: "shop_plugin",
    createdAt: {
        _nanoseconds: 999000000,
        _seconds: 1673432502,
    },
    network: "optimism",
    shopURL: "",
    discountCode: "",
    name: "",
    ctaText: "YOUR CTA HERE",
    adminAddresses: ["0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3"],
    shopifyAPIKey:
        "RAMPP__f95364ca6091e96845608cb39ff8db7f:c058d1f5cf2b6fff30e3fb9311f5ac62",
    desiredBalance: 1,
    ctaTextColor: "#000000",
    bannerBgColor: "#FFFFFF",
}

const Manage = (props: Props) => {
    const [cookies] = useCookies([application.uid]);
    const [applicationData, setApplicationData] = useState<ApplicationType>({})
    useEffect(() => {
        const previousFormData = cookies[application.uid || "application"]
        if (previousFormData) {
            setApplicationData(previousFormData)
        } else {
            setApplicationData(application)
        }
    }, [])

    return (
        <BaseLayout>
            <div className="fixed opacity-0 z-30 w-full transition duration-200 ease-in-out justify-center bg-white rounded-lg hidden">
                <div className="flex-col items-baseline"></div>
            </div>
            <div
                id="mainbg"
                className="fixed w-screen h-screen top-0"
                style={{
                    zIndex: -1,
                    opacity: 0.75,
                    backgroundImage: "url(/images/bg.svg)",
                }}
            >
                {/* <Image src="/images/bg.svg" alt={"bg-project"} /> */}
            </div>
            {
                applicationData.uid && (
                    <ManageShopifyPluginContextWrapper pluginData={{
                        application: applicationData, loading: false
                    }}>
                        <ManageShopifyPlugin />
                    </ManageShopifyPluginContextWrapper>
                )
            }

        </BaseLayout >
    );
};

export default Manage;
