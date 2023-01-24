// export const AllChains: Array<any> = [
//     {
//         id: "1",
//         title: "Ethereum",
//         img: "/images/eth-logo.svg",
//         color: "gray",
//         alt: "Ethereum chain",
//     },
//     {
//         id: "2",
//         title: "Polygon",
//         img: "/images/polygon-logo.svg",
//         color: "indigo",
//         alt: "Polygon chain",
//     },
//     {
//         id: "3",
//         title: "Mumbai",
//         style: {
//             filter: "sepia(100%)",
//         },
//         color: "blue",
//         img: "/images/polygon-logo.svg",
//         alt: "Mumbai chain",
//     },
//     {
//         id: "4",
//         title: "Optimism",
//         img: "/images/optimism-logo.svg",
//         color: "red",
//         alt: "Optimism chain",
//     },
//     {
//         id: "5",
//         title: "Goerli Optimism",
//         style: {
//             filter: "sepia(100%)",
//         },
//         img: "/images/optimism-logo.svg",
//         alt: "Goerli Optimism chain",
//     },
//     {
//         id: "6",
//         title: "Arbitrum",
//         img: "/images/arbitrum-logo.svg",
//         color: "blue",
//         alt: "Arbitrum chain",
//     },
//     {
//         id: "7",
//         title: "Arbitrum Testnet",
//         style: {
//             filter: "sepia(100%)",
//         },
//         color: "red",
//         img: "/images/arbitrum-logo.svg",
//         alt: "Arbitrum chain",
//     },
//     {
//         id: "8",
//         title: "Avalanche",
//         color: "red",
//         img: "/images/avalanche-logo.svg",
//         alt: "Avalanche chain",
//     },
//     {
//         id: "7",
//         title: "Avalanche Testnet",
//         style: {
//             filter: "sepia(100%)",
//         },
//         color: "red",
//         img: "/images/avalanche-logo.svg",
//         alt: "Avalanche chain",
//     },

// ];

const networkMap = {
    POLYGON_MAINNET: {
        chainId: Web3.utils.toHex(137), // '0x89'
        chainName: "Matic(Polygon) Mainnet",
        nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
        rpcUrls: ["https://polygon-rpc.com"],
        blockExplorerUrls: ["https://www.polygonscan.com/"],
    },
    chainInfo: {
        name: "Mumbai",
        title: "Polygon Testnet Mumbai",
        chain: "Polygon",
        icon: "polygon",
        rpc: [
            "https://matic-mumbai.chainstacklabs.com",
            "https://rpc-mumbai.maticvigil.com",
            "https://matic-testnet-archive-rpc.bwarelabs.com",
        ],
        faucets: ["https://faucet.polygon.technology/"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        infoURL: "https://polygon.technology/",
        shortName: "maticmum",
        chainId: 80001,
        networkId: 80001,
        explorers: [
            {
                name: "polygonscan",
                url: "https://mumbai.polygonscan.com",
                standard: "EIP3091",
            },
        ],
    },
    MUMBAI_TESTNET: {
        chainId: Web3.utils.toHex(80001), // '0x13881'
        chainName: "Matic(Polygon) Mumbai Testnet",
        nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
    OPTIMISM_TESTNET: {
        chainId: Web3.utils.toHex(420), // '0x13881'
        chainName: "Optimism Goerli",
        nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
        rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
        blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
};
export const AllChains: Array<any> = [
    {
        id: "1",
        title: "Ethereum",
        img: "/images/eth-logo.svg",
        color: "gray",
        alt: "Ethereum chain",
        chainInfo: {
            name: "Ethereum Mainnet",
            chain: "ETH",
            icon: "ethereum",
            rpc: [
                "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
                "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
                "https://api.mycryptoapi.com/eth",
                "https://cloudflare-eth.com",
            ],
            features: [
                {
                    name: "EIP155",
                },
                {
                    name: "EIP1559",
                },
            ],
            faucets: [],
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
            },
            infoURL: "https://ethereum.org",
            shortName: "eth",
            chainId: 1,
            networkId: 1,
            slip44: 60,
            ens: {
                registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
            },
            explorers: [
                {
                    name: "etherscan",
                    url: "https://etherscan.io",
                    standard: "EIP3091",
                },
            ],
        },
    },
    {
        id: "2",
        title: "Goerli",
        img: "/images/eth-logo.svg",
        color: "gray",
        alt: "Ethereum chain",
        chainInfo: {
            name: "Goerli",
            title: "Ethereum Testnet Goerli",
            chain: "ETH",
            rpc: [
                "https://goerli.infura.io/v3/${INFURA_API_KEY}",
                "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
                "https://rpc.goerli.mudit.blog/",
            ],
            faucets: [
                "http://fauceth.komputing.org?chain=5&address=${ADDRESS}",
                "https://goerli-faucet.slock.it?address=${ADDRESS}",
                "https://faucet.goerli.mudit.blog",
            ],
            nativeCurrency: {
                name: "Goerli Ether",
                symbol: "ETH",
                decimals: 18,
            },
            infoURL: "https://goerli.net/#about",
            shortName: "gor",
            chainId: 5,
            networkId: 5,
            ens: {
                registry: "0x112234455c3a32fd11230c42e7bccd4a84e02010",
            },
            explorers: [
                {
                    name: "etherscan-goerli",
                    url: "https://goerli.etherscan.io",
                    standard: "EIP3091",
                },
            ],
        },
    },
    {
        id: "3",
        title: "Polygon",
        img: "/images/polygon-logo.svg",
        color: "indigo",
        alt: "Polygon chain",
        chainInfo: {
            chain: "Polygon",
            icon: "polygon",
            name: "Matic(Polygon) Mainnet",
            explorers: ["https://www.polygonscan.com/"],
            rpc: [
                "https://polygon-rpc.com/",
                "https://rpc-mainnet.matic.network",
                "https://matic-mainnet.chainstacklabs.com",
                "https://rpc-mainnet.maticvigil.com",
                "https://rpc-mainnet.matic.quiknode.pro",
                "https://matic-mainnet-full-rpc.bwarelabs.com",
                "https://polygon-bor.publicnode.com",
            ],
            faucets: [],
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            infoURL: "https://polygon.technology/",
            shortName: "matic",
            chainId: 137,
            networkId: 137,
            slip44: 966,
            // explorers: [
            //     {
            //         name: "polygonscan",
            //         url: "https://polygonscan.com",
            //         standard: "EIP3091",
            //     },
            // ],
        },
    },
    {
        id: "4",
        title: "Mumbai",
        style: {
            filter: "sepia(100%)",
        },
        color: "blue",
        img: "/images/polygon-logo.svg",
        alt: "Mumbai chain",
        chainInfo: {
            name: "Mumbai",
            title: "Polygon Testnet Mumbai",
            chain: "Polygon",
            icon: "polygon",
            rpc: [
                "https://matic-mumbai.chainstacklabs.com",
                "https://rpc-mumbai.maticvigil.com",
                "https://matic-testnet-archive-rpc.bwarelabs.com",
            ],
            faucets: ["https://faucet.polygon.technology/"],
            nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
            },
            infoURL: "https://polygon.technology/",
            shortName: "maticmum",
            chainId: 80001,
            networkId: 80001,
            explorers: [
                {
                    name: "polygonscan",
                    url: "https://mumbai.polygonscan.com",
                    standard: "EIP3091",
                },
            ],
        },
    },
    {
        id: "5",
        title: "Optimism",
        img: "/images/optimism-logo.svg",
        color: "red",
        alt: "Optimism chain",
        chainInfo: {
            name: "Optimism",
            chain: "ETH",
            rpc: ["https://mainnet.optimism.io/"],
            faucets: [],
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
            },
            infoURL: "https://optimism.io",
            shortName: "oeth",
            chainId: 10,
            networkId: 10,
            // explorers: [
            //     {
            //         name: "etherscan",
            //         url: "https://optimistic.etherscan.io",
            //         standard: "EIP3091",
            //     },
            // ],
        },
    },
    {
        id: "6",
        title: "Goerli Optimism",
        style: {
            filter: "sepia(100%)",
        },
        img: "/images/optimism-logo.svg",
        alt: "Goerli Optimism chain",
        chainInfo: {
            name: "Optimism Goerli Testnet",
            chain: "ETH",
            rpc: ["https://goerli.optimism.io/"],
            faucets: [],
            nativeCurrency: {
                name: "Goerli Ether",
                symbol: "ETH",
                decimals: 18,
            },
            infoURL: "https://optimism.io",
            shortName: "ogor",
            chainId: 420,
            networkId: 420,
        },
    },
    {
        id: "7",
        title: "Arbitrum",
        img: "/images/arbitrum-logo.svg",
        color: "blue",
        alt: "Arbitrum chain",
        chainInfo: {
            name: "Arbitrum One",
            chainId: 42161,
            shortName: "arb1",
            chain: "ETH",
            networkId: 42161,
            nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
            },
            rpc: [
                "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
                "https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
                "https://arb1.arbitrum.io/rpc",
            ],
            faucets: [],
            // explorers: [
            //     {
            //         name: "Arbiscan",
            //         url: "https://arbiscan.io",
            //         standard: "EIP3091",
            //     },
            //     {
            //         name: "Arbitrum Explorer",
            //         url: "https://explorer.arbitrum.io",
            //         standard: "EIP3091",
            //     },
            // ],
            infoURL: "https://arbitrum.io",
            parent: {
                type: "L2",
                chain: "eip155-1",
                bridges: [
                    {
                        url: "https://bridge.arbitrum.io",
                    },
                ],
            },
        },
    },
    {
        id: "8",
        title: "Arbitrum Testnet",
        style: {
            filter: "sepia(100%)",
        },
        color: "red",
        img: "/images/arbitrum-logo.svg",
        alt: "Arbitrum chain",
        chainInfo: {
            name: "Arbitrum Görli",
            title: "Arbitrum Testnet Rinkeby",
            chainId: 421613,
            shortName: "arb-rinkeby",
            chain: "ETH",
            networkId: 421613,
            nativeCurrency: {
                name: "Arbitrum Görli Ether",
                symbol: "ETH",
                decimals: 18,
            },
            rpc: ["https://goerli-rollup.arbitrum.io/rpc/",],
            faucets: [
                "http://fauceth.komputing.org?chain=421611&address=${ADDRESS}",
            ],
            infoURL: "https://arbitrum.io",
            explorers: [
                "https://goerli-rollup-explorer.arbitrum.io"
            ],
        },
    },
    {
        id: "9",
        title: "Avalanche",
        color: "red",
        img: "/images/avalanche-logo.svg",
        alt: "Avalanche chain",
        chainInfo: {
            name: "Avalanche C-Chain",
            chain: "AVAX",
            icon: "avax",
            rpc: ["https://api.avax.network/ext/bc/C/rpc"],
            features: [
                {
                    name: "EIP1559",
                },
            ],
            faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
            nativeCurrency: {
                name: "Avalanche",
                symbol: "AVAX",
                decimals: 18,
            },
            infoURL: "https://www.avax.network/",
            shortName: "avax",
            chainId: 43114,
            networkId: 43114,
            slip44: 9005,
            explorers: [
                {
                    name: "snowtrace",
                    url: "https://snowtrace.io",
                    standard: "EIP3091",
                },
            ],
        },
    },
    {
        id: "10",
        title: "Avalanche Testnet",
        style: {
            filter: "sepia(100%)",
        },
        color: "red",
        img: "/images/avalanche-logo.svg",
        alt: "Avalanche chain",
        chainInfo: {
            name: "Avalanche Fuji Testnet",
            chain: "AVAX",
            icon: "avax",
            rpc: ["https://api.avax-test.network/ext/bc/C/rpc"],
            faucets: ["https://faucet.avax-test.network/"],
            nativeCurrency: {
                name: "Avalanche",
                symbol: "AVAX",
                decimals: 18,
            },
            infoURL: "https://cchain.explorer.avax-test.network",
            shortName: "Fuji",
            chainId: 43113,
            networkId: 43113,
            explorers: [
                {
                    name: "snowtrace",
                    url: "https://snowtrace.io",
                    standard: "EIP3091",
                },
            ],
        },
    },

    {
        id: "11",
        title: "BNB Mainnet",
        style: {
            filter: "sepia(0%)",
        },
        img: "/images/bnb-logo.svg",
        chainInfo: {
            name: "Binance Smart Chain Mainnet",
            chain: "BSC",
            rpc: [
                "https://bsc-dataseed1.binance.org",
                "https://bsc-dataseed2.binance.org",
                "https://bsc-dataseed3.binance.org",
                "https://bsc-dataseed4.binance.org",
                "https://bsc-dataseed1.defibit.io",
                "https://bsc-dataseed2.defibit.io",
                "https://bsc-dataseed3.defibit.io",
                "https://bsc-dataseed4.defibit.io",
                "https://bsc-dataseed1.ninicoin.io",
                "https://bsc-dataseed2.ninicoin.io",
                "https://bsc-dataseed3.ninicoin.io",
                "https://bsc-dataseed4.ninicoin.io",
                "wss://bsc-ws-node.nariox.org",
            ],
            faucets: ["https://free-online-app.com/faucet-for-eth-evm-chains/"],
            nativeCurrency: {
                name: "Binance Chain Native Token",
                symbol: "BNB",
                decimals: 18,
            },
            infoURL: "https://www.binance.org",
            shortName: "bnb",
            chainId: 56,
            networkId: 56,
            slip44: 714,
            explorers: [
                {
                    name: "bscscan",
                    url: "https://bscscan.com",
                    standard: "EIP3091",
                },
            ],
        },

    },
    {
        id: "12",
        title: "BNB Testnet",
        style: {
            filter: "sepia(100%)",
        },
        img: "/images/bnb-logo.svg",
        chainInfo: {
            name: "Binance Smart Chain Testnet",
            chain: "BSC",
            rpc: [
                "https://data-seed-prebsc-1-s1.binance.org:8545",
                "https://data-seed-prebsc-2-s1.binance.org:8545",
                "https://data-seed-prebsc-1-s2.binance.org:8545",
                "https://data-seed-prebsc-2-s2.binance.org:8545",
                "https://data-seed-prebsc-1-s3.binance.org:8545",
                "https://data-seed-prebsc-2-s3.binance.org:8545",
            ],
            faucets: ["https://testnet.binance.org/faucet-smart"],
            nativeCurrency: {
                name: "Binance Chain Native Token",
                symbol: "tBNB",
                decimals: 18,
            },
            infoURL: "https://testnet.binance.org/",
            shortName: "bnbt",
            chainId: 97,
            networkId: 97,
            explorers: [
                {
                    name: "bscscan-testnet",
                    url: "https://testnet.bscscan.com",
                    standard: "EIP3091",
                },
            ],
        },
    },

];
import Web3 from "web3"
export const getChainInfoByChainId = (chainId: number) => {

    const chainData = AllChains.find(chain => chain.chainInfo.chainId === chainId).chainInfo
    const chainInfo = {
        chainId: Web3.utils.toHex(chainId), // '0x89'
        chainName: chainData.name,
        nativeCurrency: chainData.nativeCurrency,
        rpcUrls: chainData.rpc,
        blockExplorerUrls: chainData.explorers,
    }
    console.log(chainId, chainData, chainInfo, "ffffffffffffff")
    return chainInfo
}

export const getChainByChainId = (chainId: number) => {
    const chainData = AllChains.find(chain => chain.chainInfo.chainId === chainId)
    return chainData
}

export const SERVER_URL = "https://nenad.hariwhitedream.com/slimprints";