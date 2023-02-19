import React from "react";

type Props = {};

const WhoisSekanson = (props: Props) => {
    return (
        <section
            className="py-0 md:py-4 bg-white"
            style={{
                backgroundImage: "url(/images/teambg.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <div className="bg-black w-full rounded-xl md:mx-auto md:m-6 px-8 py-4 md:w-3/6">
                <p className="text-5xl text-white ff text-center mt-1">Who is Sekanson?</p>
                <div className="grid grid-cols-1 gap-y-8 mx-auto p-10 md:w-4/5">
                    <div className="flex flex-col w-full justify-center items-center">
                        <img
                            src="/images/intro_piece_still.gif"
                            alt="Team member tcarambat.eth"
                            className="w-42 h-52 rounded-lg shadow-md cursor-pointer"
                        />
                        <p className="ff text-white font-bold text-3xl">Tiago Teixeira</p>
                        <div className="w-full text-white leading-tight mt-4">
                            Tiago is a seasoned entrepreneur.
                        </div>
                        <div className="w-full text-white leading-tight">
                            After founding celebrity wrap shop Sekanskin and global tech company xix3d, Tiago has ventured into building Web3 tools on a mission to add Utility to projects and for communities
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoisSekanson;
