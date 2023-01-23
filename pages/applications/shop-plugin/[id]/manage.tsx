import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import BaseLayout from "../../../../components/BaseLayout";
import ManageShopifyPlugin from "../../../../components/manage/ManageShopifyPlugin/ManageShopifyPlugin";
import { ManageShopifyPluginContextWrapper } from "../../../../context/ManageShopifyPluginContext";
import { ApplicationType } from "../../../../types/applications";
import { useRouter } from 'next/router';
import { getApplicationById } from "../../../../libs/api/applications";

type Props = {};

const defaultApplication: ApplicationType = {
    uid: "",
    priceRuleId: "",
    contractType: "ERC-721A",
    url: "",
    testnetContractAddress: "",
    adminAccessScope: "",
    isPaidPremium: false,
    productionContractAddress: "",
    tokenId: "",
    type: "shop_plugin",
    createdAt: Date.now(),
    network: "optimism",
    shopURL: "",
    discountCode: "",
    name: "",
    ctaText: "YOUR CTA HERE",
    adminAddress: "",
    shopifyAPIKey: "",
    desiredBalance: 1,
    ctaTextColor: "#FF0000",
    bannerBgColor: "#FF0000",
}

const Manage = (props: Props) => {
    const router = useRouter();
    const { id } = router.query;

    const [applicationData, setApplicationData] = useState<ApplicationType>({})

    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const local = window.localStorage.getItem("metamaskState");
        const data = local ? JSON.parse(local) : null;        
        setWallet(data.wallet);
        setBalance(data.balance);
    },  [])

    useEffect(() => {
        const getAppData = async () => {
            if (wallet !== null && wallet !== undefined && id !== null && id !== undefined) {
                const appData = await getApplicationById(wallet, id as string)
                console.log('appData', appData);
                if (appData != null) {
                    setApplicationData(appData as ApplicationType);
                    return;
                }
                defaultApplication.adminAddress = wallet;
                defaultApplication.uid = id as string;
                defaultApplication.type = "shop_plugin";
                setApplicationData(defaultApplication);
            }
        }

        getAppData();
        
        
        /*const previousFormData = cookies[application.uid || "application"]
        if (previousFormData) {
            setApplicationData(previousFormData)
        } else {
            setApplicationData(application)
        }*/
    }, [id, wallet])

    /*useEffect(() => {
        // before render

        return () => {
            // when exitting
        }
    }, [])*/

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
            <div className="w-full">
                {
                    applicationData.uid && (
                        <ManageShopifyPluginContextWrapper pluginData={{
                            application: applicationData, loading: false
                        }}>
                            <ManageShopifyPlugin />
                        </ManageShopifyPluginContextWrapper>
                    )
                }
            </div>

        </BaseLayout >
    );
};

export default Manage;
