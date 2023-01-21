export const getChains = async () => {
  try {
    // const chains = await fetcher("https://chainid.network/chains.json");
    const chains = [
      {
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

      {
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
      {
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
      {
        name: "Polygon Mainnet",
        chain: "Polygon",
        icon: "polygon",
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
        explorers: [
          {
            name: "polygonscan",
            url: "https://polygonscan.com",
            standard: "EIP3091",
          },
        ],
      },
      {
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
      {
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
        explorers: [
          {
            name: "etherscan",
            url: "https://optimistic.etherscan.io",
            standard: "EIP3091",
          },
        ],
      },
    ];
    const sortedChains = chains
      .filter((c: any) => c.name !== "420coin") // same chainId as ronin
      //   .map((chain) => populateChain(chain, chainTvls))
      .sort((a: any, b: any) => {
        return (b.tvl ?? 0) - (a.tvl ?? 0);
      });
  } catch (error) {}
};
