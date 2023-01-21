import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import { useAppContext } from '../context/AppContext'

type Props = {}

const Footer = (props: Props) => {
    const { connected, setConnected, selectedChain, setSelectedChain } = useAppContext()
    const router = useRouter()

    return (
        <footer className="bg-white w-full md:px-16 md:my-6">
            <div className="flex flex-col md:flex-row w-full md:justify-between md:px-16 items-center">
                <div className="flex-col w-40">
                    <img src="/android-chrome-512x512.png" className="w-auto h-20" alt="Sekanson.xyz" />
                    <p className="text-gray-600 text-xs -mt-2">Build better NFT communities without code.</p>
                    <div className="mt-3">
                        <img src="/images/alchemy.svg" className="w-auto h-20 -mb-6" alt="Alchemy Certified Infrastructure Alliance" />
                        <p className="text-gray-500" style={{
                            fontSize: "10px"
                        }}>
                            Certified Infrastructure Alliance
                        </p>
                    </div>
                </div>
                <div className="w-fit flex flex-col space-y-2 py-6 md:py-4 items-center md:items-end">
                    {
                        connected ? (
                            <button
                                onClick={() => { router.push("/my/projects") }}
                                className="py-1 px-2 flex text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">Dashboard</button>
                        ) : (
                            <button
                                onClick={() => {
                                    setConnected(true)
                                }}
                                className="py-1 px-2 flex text-ramppblue hover:text-white border-2 border-ramppblue rounded-md hover:bg-ramppdeepblue">Launch a Project</button>

                        )
                    }

                    <a href="https://twitter.com/@Sekansonnft" className="text-lg text-darkgray">Follow us on Twitter</a>
                    <a href="https://tally.so/r/3q4G4O" target="_blank" rel="noreferrer" className="text-lg text-darkgray">Join our community</a>
                </div>
            </div>
            <div className="w-full justify-center flex">
                <p className="text-rampporange">© {format(new Date(), "yyyy")} Sekanson Labs Inc. All rights reserved.</p>
            </div>
        </footer >
    )
}

export default Footer