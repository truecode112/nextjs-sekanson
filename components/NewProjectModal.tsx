import clsx from 'clsx'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { createNewProject } from '../libs/api/projects'
import { createNewApplication } from '../libs/api/applications'

type Props = {
    onClose: () => void,
    setLoading: Dispatch<SetStateAction<any>>
}

enum ApplicationType {
    LAUNCH_COMMUNITY = "LAUNCH_COMMUNITY",
    OTHER_APPLICATION = "OTHER_APPLICATION"
}

const NewProjectModal = (props: Props) => {
    const [applicationTab, setApplicationTab] = useState("LAUNCH_COMMUNITY")
    const { setApplications, setProjects } = useAppContext()

    const handleCreateNewApplication = async () => {
        try {
            props.setLoading(true)
            const formData = {
                address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3",
                applicationInfo: "shop_plugin"
            }
            const data = await createNewApplication(formData)
            setTimeout(() => {
                props.onClose()
            }, 500);
            setTimeout(() => {
                setApplications((prev: any) => [...prev, data])
                props.setLoading(false)
            }, 1000)
        } catch (error) {
            console.log("error is ", error)
        }
    }

    const handleCreateNewProject = async (token_type: any) => {
        const formData = {
            address: "0x767d04c7c1d82b922d9d0b8f4b36d057bc1065d3",
            contractType: token_type
        }
        try {
            props.setLoading(true)
            const data = await createNewProject(formData)
            setTimeout(() => {
                props.onClose()
            }, 500);
            setTimeout(() => {
                setProjects((prev: any) => [...prev, data])
                props.setLoading(false)
            }, 1000)
        } catch (error) {
            console.log("error is ", error)
        }
    }


    return (
        <div>
            <div className="fixed w-full top-0 left-0 z-20">
                <div className="h-screen w-full z-20 inset-0 overflow-y-auto">
                    <div
                        className="fixed w-full h-full inset-0 bg-gray-500 opacity-75"
                        onClick={props.onClose}
                    ></div>
                    <div
                        className="flex justify-center items-center"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        ></span>
                        <div
                            className="w-1/2 inline-block relative overflow-hidden transform transition-all"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div>
                                <div className="rounded-lg p-8 bg-white shadow">
                                    <div className="bg-white dark:bg-gray-800">
                                        <div className="flex w-full justify-end cursor-pointer">
                                            <svg
                                                onClick={props.onClose}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-gray-300 text-lg"
                                            >
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </div>
                                        <div className="w-full mx-auto px-4 z-20">
                                            <p className="font-bold text-3xl text-gray-800 ff">
                                                Build something amazing on Sekanson
                                            </p>
                                            <p className="pt-2 text-base text-gray-600">
                                                With
                                                <b className="text-ramppblue text-bold">Sekanson</b>
                                                you can start a few types of projects. Select the type
                                                of project that best suits your needs.
                                            </p>
                                            <div className="w-full flex items-center space-x-8 my-4">
                                                <button onClick={() => { setApplicationTab(ApplicationType.LAUNCH_COMMUNITY) }} className={clsx(
                                                    "text-xl ",
                                                    applicationTab === ApplicationType.LAUNCH_COMMUNITY ? "text-ramppblue underline" : "text-gray-500 hover:text-ramppblue"
                                                )}>
                                                    Launch a community
                                                </button>
                                                <button onClick={() => { setApplicationTab(ApplicationType.OTHER_APPLICATION) }} className={clsx(
                                                    "text-xl ",
                                                    applicationTab === ApplicationType.OTHER_APPLICATION ? "text-ramppblue underline" : "text-gray-500 hover:text-ramppblue"
                                                )}>
                                                    Other Applications
                                                </button>
                                            </div>
                                            {
                                                applicationTab === ApplicationType.LAUNCH_COMMUNITY ? (
                                                    <div className="w-full flex flex-col space-y-6 mt-2">
                                                        <button
                                                            onClick={() => handleCreateNewProject("ERC721A")}
                                                            className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                            <img
                                                                alt="example of ERC721A project"
                                                                src="/images/bayc-rotation.gif"
                                                                className="h-32 w-32 rounded-md"
                                                            />
                                                            <div className="w-full flex flex-col space-y-2 ml-8">
                                                                <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                    ERC-721A
                                                                </p>
                                                                <p className="text-gray-600 text-base leading-tight text-left">
                                                                    <span className="msreadout-line-highlight msreadout-inactive-highlight">
                                                                        <span className="msreadout-word-highlight">
                                                                            This
                                                                        </span>{" "}
                                                                        project type
                                                                    </span>
                                                                    is for you if you
                                                                    <b className="text-ramppblue">
                                                                        want a collection where each token is a unique
                                                                        image that can only have one owner.
                                                                    </b>{" "}
                                                                    This project is great for building large
                                                                    communities. This contract type is by far the
                                                                    most popular NFT type.
                                                                    <br />
                                                                    Popular examples of this type of project are
                                                                    Bored Ape Yacht Club, Cool Cats, Azuki, and many
                                                                    many more.
                                                                </p>
                                                            </div>
                                                        </button>
                                                        <button
                                                            onClick={() => handleCreateNewProject("ERC1155")}
                                                            className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                            <img
                                                                alt="example of ERC1155 project"
                                                                src="/images/adidas-erc.gif"
                                                                className="h-32 w-32 rounded-md"
                                                            />
                                                            <div className="w-full flex flex-col space-y-2 ml-8">
                                                                <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                    <span>ERC-1155</span>
                                                                </p>
                                                                <p className="text-gray-600 text-base leading-tight text-left">
                                                                    This project type is for you if you
                                                                    <b className="text-ramppblue">
                                                                        want a collection where each token is a unique
                                                                        image that can have multiple owners at once.
                                                                    </b>{" "}
                                                                    This project is great for building access passes
                                                                    and meta-collectibles for your existing
                                                                    communities.
                                                                    <br />
                                                                    <br />
                                                                    Popular examples of this type of project is the
                                                                    Adidas Into the Metaverse drop.
                                                                </p>
                                                            </div>
                                                        </button>
                                                        <button
                                                            onClick={() => handleCreateNewProject("ERC-20")}
                                                            className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                            <img
                                                                alt="example of ERC-20 token"
                                                                src="/images/erc20.gif"
                                                                className="h-32 w-32 rounded-md"
                                                            />
                                                            <div className="w-full flex flex-col space-y-2 ml-8">
                                                                <p className="text-3xl font-bold text-gray-800 ff text-left">
                                                                    <span>ERC-20+</span>
                                                                </p>
                                                                <p className="text-gray-600 text-base leading-tight text-left">
                                                                    This project type is for you if you
                                                                    <b className="text-ramppblue">
                                                                        want to create a mintable &amp; tradable
                                                                        social token that can be used for purchasing
                                                                        during your mint!
                                                                    </b>{" "}
                                                                    <br />
                                                                    <br />
                                                                    Popular examples of this type of contract is
                                                                    ApeCoin, CoolCats MILK, and DogeCoin.
                                                                </p>
                                                            </div>
                                                        </button>


                                                    </div>)
                                                    : (
                                                        <div className="w-full flex flex-col space-y-6 mt-4">
                                                            <button onClick={handleCreateNewApplication} className="items-center w-full px-4 py-2 border border-gray-300 hover:bg-blue-50 hover:border-ramppblue cursor-pointer rounded-md flex">
                                                                <img
                                                                    alt="shopify.com"
                                                                    src="/images/shop_other_application.png"
                                                                    className="h-28 w-28 rounded-md" />
                                                                <div className="w-full flex flex-col space-y-2 ml-8">
                                                                    <p className="text-3xl font-bold text-gray-800 ff text-left">Token-Gated Shopify Discounts</p>
                                                                    <p className="text-gray-600 text-base leading-tight text-left">This standalone application will allow you to dynamically award discounts to holders of your NFTs or tokens. Supports ERC-721, ERC-1155, and ERC-20!</p>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewProjectModal