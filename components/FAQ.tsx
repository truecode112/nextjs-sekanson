import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

const FAQ = (props: Props) => {
  const faqs = [
    {
      title: "Why use Sekanson over OpenSea, Rarible, or Foundation?",
      description: "Did you know that when you mint on a marketplace you don\'t actually own your token? Your NFT is minted under the marketplace's smart contract and typically cannot be traded on another marketplace! With Sekanson your NFT is governed by its own smart contract - so it can go anywhere!"
    },
    {
      title: " Why use Sekanson over OpenSea, Rarible, or Foundation? Cont.",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
    {
      title: "Who is hosting my images?",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
    {
      title: "What does it cost to use Sekanson?",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
    {
      title: "Who is hosting my images?",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
    {
      title: "Can I use Sekanson for Music NFTs?",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
    {
      title: "What chains and tokens are supported?",
      description: "Well, that is up to you! When you use Sekanson we will walk you through all the steps to make sure it works! We recommend Pinata.cloud"
    },
  ]

  const SingleFaqComponent = ({ faq }: any) => {
    const [active, setActive] = useState(false)
    return (
      <div className="bg-white shadow-md p-4 my-2 rounded-md border border-gray-100 cursor-pointer hover:bg-gray-50">
        <dt className="" onClick={() => setActive(prev => !prev)}>
          <h3 className="text-xl text-rampporange font-semibold">
            {faq.title}
          </h3>
        </dt>
        <dd className={clsx(
          " transition-all ease-in-out duration-[2000ms] delay-300",
          active ? "block" : "hidden"
        )}>
          <p className="text-gray-500">
            {faq.description}
          </p>
        </dd>
      </div>
    )
  }



  return (
    <div>
      <section
        id="faq"
        className="py-4 px-2 border-t border-b border-color-gray-100"
      >
        <div className="flex-col space-y-2 py-4">
          <h2 className="ff text-3xl md:text-5xl text-center font-bold text-gray-800">
            Questions?
            <br />
            We have answers for you!
          </h2>
          <p className="text-gray-500 text-base text-center">
            Sekanson is changing the NFT space so we prepared some questions and
            answers you might have.
          </p>
        </div>
        <dl className="w-full md:w-1/2 mx-auto px-2 md:px-0">
          {faqs.map((faq: any, index: any) => {
            return (
              <SingleFaqComponent key={index} faq={faq} />
            )
          })}
        </dl>
      </section>
    </div>
  );
};

export default FAQ;
