import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { deleteApplication } from '../../libs/api/applications'
import { useRouter } from 'next/router'
import Image from 'next/image'

type Props = {
}

const ApplicationList = (props: Props) => {
    const { applications, setApplications } = useAppContext()
    const router = useRouter()

    const [wallet, setWallet] = useState(null);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const local = window.localStorage.getItem("metamaskState");
        const data = local ? JSON.parse(local) : null;        
        setWallet(data.wallet);
        setBalance(data.balance);
    },  [])

    const handleDeleteApplication = async (id: string) => {
        try {
            const res = await deleteApplication(wallet, id)
            if (res != null && res.error == null) {
                const filteredApps = applications.filter((app: any) => app.uid !== id)
                setApplications(filteredApps)
            } else {
                if (res == null) {
                    alert('unknown error');
                } else {
                    alert(res.message);
                }
            }
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    const ApplicationItem = ({ application }: any) => {
        return (
            <div>
                <div className="w-full mt-4 ">
                    <div className="place-top type-dark" id="t1188bb73-a391-4f4d-a1d5-7289a948745b" data-id="tooltip"></div>
                    <div className=" border border-transparent hover:border-blue-100 shadow-lg rounded-2xl bg-white w-full">
                        <div className="w-full flex items-start justify-between">
                            <div className="w-full flex-col px-4 pt-4">
                                <div className="flex items-center mb-1">
                                    <picture>
                                        <img alt="Blockchain Logo" data-tip="This plugin is configured for the ethereum blockchain" src="/images/eth-logo.svg" className="h-4 pr-3 cursor-pointer" />
                                    </picture>
                                    <p className="font-bold text-md text-gray-800">Shopify Plugin </p>
                                </div>
                            </div>
                            <svg onClick={() => handleDeleteApplication(application.uid)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-4 mx-2 h-4 text-red-400 cursor-pointer">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        <div className="w-full flex justify-between px-4 mb-4">
                            <p className="bg-red-200 rounded-lg px-2 text-red-500 text-xs">requires setup</p>
                            <p className="text-xs text-gray-300">
                            </p>
                        </div>
                        <div className="w-full flex flex-col my-2">
                            <div className="w-fit px-4">
                                <img alt="Website OG preview" src="data:image/png;base64,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" className="w-full rounded-lg"/>
                            </div>
                            <div className="px-4 w-full flex justify-center my-2" onClick={(e) => {
                                e.stopPropagation()
                                window.location.href = `/applications/shop-plugin/${application.uid}/manage`
                            }}>
                                <p className="bg-transparent border border-ramppblue text-ramppblue hover:bg-ramppblue hover:text-white text-base px-6 py-1 rounded-md cursor-pointer">Manage Plugin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='w-full my-4'>
            <div className="flex justify-between items-center">
                <h1 className="text-4xl text-gray-800 font-black pb-2 ff">Your applications</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
                {
                    applications && applications.map((application: any, index: any) => {
                        return <ApplicationItem key={application.uid} application={application} />
                    })
                }
            </div>
        </div>
    )
}

export default ApplicationList