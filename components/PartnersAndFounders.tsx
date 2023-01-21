import clsx from "clsx";
import React from "react";
import styles from "../styles/partner.module.css";

type Props = {};

const PartnersAndFounders = (props: Props) => {

    const partners = [
        {
            id: "1",
            src: "/images/pinata.svg",
            alt: "Sekanson Partner",
            href: "https://bit.ly/3wKprej",
        },
        {
            id: "2",
            src: "/images/typedream.svg",
            alt: "Sekanson Partner",
            href: "https://typedream.com/?ref=Sekanson.xyz",
        },
        {
            id: "3",
            src: "/images/alchemy.svg",
            alt: "Sekanson Partner",
            href: "https://www.alchemy.com/",
        },
        {
            id: "4",
            src: "/images/quixotic.svg",
            alt: "Sekanson Partner",
            href: "https://qx.app/?ref=Sekanson.xyz",
        },
        {
            id: "5",
            src: "/images/stratos.svg",
            alt: "Sekanson Partner",
            href: "https://stratosnft.io/?ref=Sekanson.xyz",
        },
        {
            id: "6",
            src: "/images/simplehash.webp",
            alt: "Sekanson Partner",
            href: "https://simplehash.com/?ref=Sekanson.xyz",
        },
        {
            id: "7",
            src: "/images/bonfire.svg",
            alt: "Sekanson Partner",
            href: "https://trybonfire.xyz/?ref=Sekanson.xyz",
        },
        {
            id: "8",
            src: "/images/mintparty.svg",
            alt: "Sekanson Partner",
            href: "https://mintparty.xyz/?ref=Sekanson.xyz",
        },
        {
            id: "9",
            src: "/images/winter.svg",
            alt: "Sekanson Partner",
            href: "https://www.usewinter.com/?ref=Sekanson.xyz",
        },
        {
            id: "10",
            src: "/images/dhhlogo.svg",
            alt: "Sekanson Partner",
            href: "https://nft-inator.com/?ref=Sekanson.xyz",
        },
        {
            id: "11",
            src: "/images/SYNC.svg",
            alt: "Sekanson Partner",
            href: "https://syncnetwork.io/?ref=Sekanson.xyz",
        },
        {
            id: "12",
            src: "/images/carma.svg",
            alt: "Sekanson Partner",
            href: "https://carma.community/?ref=Sekanson.xyz",
        },
    ];

    const PartnersComponent = () => {
        return (
            <>
                {partners.map((partner: any, index: number) => {
                    return (
                        <a
                            key={partner.id}
                            target="_blank"
                            rel="noreferrer"
                            href={partner.href}
                            className="p-4 rounded-lg bg-gray-100 flex items-center justify-center cursor-pointer h-24 w-52 filter hover:grayscale-0"
                        >
                            <img
                                src={partner.src}
                                alt="Sekanson Partner"
                                className="w-40 h-auto object-contain max-h-14 "
                            />
                        </a>
                    );
                })}
            </>
        );
    };

    return (
        <section className="w-full border-t border-color-gray-100 ">
            <input type="hidden" className="w-28 w-12" />
            <div className="w-full flex flex-col items-center my-10">
                <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
                    Partners and Friends
                </p>
                <section
                    className={clsx(
                        "flex flex-col m-auto max-w-screen-2xl md:w-1/2 md:flex",
                        styles.wrapper
                    )}
                >
                    <div className={clsx(styles.marquee)}>
                        <div aria-hidden="false" className={clsx(styles.marquee__group)}>
                            <PartnersComponent />
                        </div>
                        <div aria-hidden="false" className={clsx(styles.marquee__group)}>
                            <PartnersComponent />
                        </div>
                    </div>
                    <div className={clsx("flex gap-x-10", styles.marquee)}>
                        <div
                            aria-hidden="false"
                            className={clsx(
                                styles.marquee__group,
                                styles.marquee__group__marquee__reverse
                            )}
                        >
                            <PartnersComponent />
                        </div>
                        <div
                            aria-hidden="false"
                            className={clsx(
                                styles.marquee__group,
                                styles.marquee__group__marquee__reverse
                            )}
                        >
                            <PartnersComponent />
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full flex flex-col items-center my-10 mt-20" />
            <div className="w-full flex justify-center items-center flex-col my-5">
                <p className="font-semibold text-lg text-gray-700 uppercase pb-6">
                    Investors and Supporters
                </p>
                <div className=" w-full md:w-1/2 flex flex-wrap md:flex-row justify-center space-x-8 md:space-x-14 gap-y-8 items-center">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.ycombinator.com/companies/rampp-xyz"
                        className="w-fit cursor-pointer"
                    >
                        <img
                            src="/images/ycombinator.svg"
                            alt="Sekanson Partner"
                            className="w-60 h-auto"
                            style={{ opacity: 1 }}
                        />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.alchemy.com/"
                        className="w-fit cursor-pointer"
                    >
                        <img
                            src="/images/alchemy.svg"
                            alt="Sekanson Partner"
                            className="w-60 h-auto"
                            style={{ opacity: 1 }}
                        />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://xcelerator.berkeley.edu/?ref=Sekanson.xyz"
                        className="w-fit cursor-pointer"
                    >
                        <img
                            src="/images/bbx.webp"
                            alt="Sekanson Partner"
                            className="w-12 h-auto"
                            style={{ opacity: 1 }}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersAndFounders;
