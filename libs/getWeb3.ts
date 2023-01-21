import Web3 from "web3";

let web3: Web3;
const httpProvider = process.env.NEXT_PUBLIC_NODE_ADDRESS || "";

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // we are in the browser and metamask is running
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum as any);
} else {
  // we are on the server *OR* the user is not running metamask
  // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
  const provider = new Web3.providers.HttpProvider(httpProvider);
  web3 = new Web3(provider);
}

export default web3;
