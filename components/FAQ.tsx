import clsx from "clsx";
import React, { useState } from "react";

type Props = {};

const FAQ = (props: Props) => {
  const faqs = [
    {
      title: "Why use Sekanson over Shopify plugins?",
      description: "This plugin is extremely easy to use, easy to port, and scalable. You can quickly change parameters, and the details of your discount code from the interface on your own Shopify login."
    },
    {
      title: "Who is Sekanson?",
      description: "Sekanson is all about tenacity and resilience in not being owed anything in inheritance or as the heir of. The force of working for evry inch and never giving up is the mantra behind this whole concept. This website is founded by a respected entrepreneur by the name of Tiago Teixera. Making a name in both the automotive and tech space, Tiago has built a reputation for good deals and notable clients that stretch from celebrities to fortune 50 companies."
    },
    {
      title: "Will there ever be more products?",
      description: "This website is a passion project where the aim is to bring utility and passion to Web3 projects that lack meaning or looking to provide a real mission to bring value to community and fans."
    },
    {
      title: "What does it cost to use Sekanson?",
      description: "Since this is in BETA, there is no cost other than owning a Key. If you are reading this, then you have already paid to be apart of the ecosystem."
    },
    {
      title: "Who is hosting my information?",
      description: "When you use one of our plug-ins, all of your data is stored in a backend server system where your information is encrypted and therefore unreadable to anyone other than the API your information was made for."
    },
    {
      title: "Can I use Sekanson for My personal projects?",
      description: "Whether you want to use this for a client project, or your own, it is built to be used to help bring utility to anyone, anywhere."
    },
    {
      title: "What chains and tokens are supported?",
      description: "So far we have built mainnet and testnets ecosystems for Ethereum, Polygon, Optimism, Avalanche, Binance, and Arbitrum. Possibly with more coming soon."
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
          " transition ease-in-out duration-1000 delay-100 my-2",
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
    <>
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
        <dl className="max-w-2xl mx-auto px-2 md:px-0">
          {faqs.map((faq: any, index: any) => {
            return (
              <SingleFaqComponent key={index} faq={faq} />
            )
          })}
        </dl>
      </section>
    </>
  );
};

export default FAQ;
