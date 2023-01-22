import clsx from 'clsx'
import React, { useRef, useState } from 'react'

type Props = {
    handleChange: (val: string) => void
    value?: string
    className?: string
}

const ColorPickerInput = (props: Props) => {
    const colorPickerRef = useRef<HTMLInputElement | null>(null)
    const [currentColor, setCurrentColor] = useState<string>(props.value || "#FF0000")

    const onChange = (e: any) => {
        console.log(e.target.value, " is target value")
        setCurrentColor(e.target.value)
        props.handleChange(e.target.value)
    }
    return (
        <div className='flex space-x-2 items-center' >
            <input readOnly type="text" className="mt-1 appearance-none w-auto py-2 px-4 bg-white rounded-lg border border-gray-300 text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent" name="bannerBgColor" value={currentColor} />
            <div
                onClick={() => {
                    if (colorPickerRef.current) {
                        colorPickerRef.current?.select()
                    }
                }}
                className={clsx(
                    "rounded-full p-2 cursor-pointer w-10 h-10 relative flex items-center justify-center ",

                )} style={{
                    backgroundColor: currentColor.toUpperCase() === "#FFFFFF" ? "#000000" : currentColor
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="text-white w-full h-full ">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z">
                    </path>
                </svg>
                {/* {JSON.stringify(currentColor)} */}
                <input onChange={onChange} ref={colorPickerRef} type="color" className="w-full h-full opacity-0 absolute left-0 right-0 top-0 bottom-0 z-10" />
            </div>
        </div >
    )
}

export default ColorPickerInput