import clsx from 'clsx';
import { Field, useFormikContext } from 'formik';
import React, { useState } from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext';
import ColorPickerInput from '../../ColorPickerInput';

type Props = {}

const BannerStyleSettingsAccordion = (props: Props) => {
    const [active, setActive] = useState(true);
    const { application, handleChangeApplication } = useManageShopifyPluginContext()
    const formik = useFormikContext()
    return (
        <div className=''>
            <div
                onClick={() => setActive((prev) => !prev)}
                className="flex items-center justify-between hover:bg-gray-100 rounded-lg py-2 mt-8 cursor-pointer"
            >
                <div className="flex space-x-2 items-center">
                    <h2 className="font-semibold text-xl text-gray-800">
                        Banner Style Settings
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
                    " transition ease-in-out duration-[2000ms] delay-300 relative w-3/4 my-4",
                    active ? "block" : "hidden"
                )}
            >
                <p className="text-xs text-gray-500">
                    This is the default text of your banner when it loads
                </p>
                <Field
                    onChange={formik.handleChange}
                    type="text"
                    className={
                        clsx(
                            "mt-1 flex-1 appearance-none w-full py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                        )
                    }
                    name="ctaText"
                    autoComplete="off"
                    placeholder="Get 50% off your purchase!"
                />
                <div className="relative w-3/4 my-4">
                    <label className="text-gray-500">&apos;Call to Action&apos; Text Color</label>
                    <ColorPickerInput value={application.ctaTextColor || ""} handleChange={(val) => {
                        handleChangeApplication({ type: "ctaTextColor", value: val })

                    }} />
                </div>
                <div className="relative w-3/4 my-4">

                    <label className="text-gray-500">Banner Background Color</label>
                    <ColorPickerInput value={application.bannerBgColor || ""} handleChange={(val) => {
                        handleChangeApplication({ type: "bannerBgColor", value: val })
                    }} />
                </div>
            </div>
        </div>
    );
}

export default BannerStyleSettingsAccordion