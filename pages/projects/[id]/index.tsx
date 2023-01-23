import {
    useActiveClaimConditionForWallet,
    useAddress,
    useClaimedNFTSupply,
    useContract,
    useUnclaimedNFTSupply
} from "@thirdweb-dev/react";

import type { NextPage } from "next";
import { useMemo, useState } from "react";
import BaseLayout from "../../../components/BaseLayout";
import ProjectDetail from "../../../components/projects/ProjectDetailPage/ProjectDetail";
import { useRouter } from "next/router";

// Put Your NFT Drop Contract address from the dashboard here

const ProjectDetailPage: NextPage = () => {
    const router = useRouter()
    return (
        <BaseLayout >
            <div
                id="mainbg"
                className="fixed w-screen h-screen top-0"
                style={{
                    zIndex: -1,
                    opacity: 0.75,
                    backgroundImage: "url(/images/bg.svg)",
                }}
            >
            </div>
            {
                router.isFallback ? (
                    <div className="flex gap-x-2 py-10">
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
                        <p>Loading...</p>
                    </div>
                ) : (
                    <ProjectDetail />
                )}
        </BaseLayout>
    );
};

export default ProjectDetailPage;
