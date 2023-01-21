import web3 from "../libs/getWeb3";
import { useMetamask } from "./useMetamask";
export const useListen = () => {
    const { dispatch } = useMetamask();
    return () => {
        window.ethereum.on("accountsChanged", async (newAccounts: string[]) => {
            if (newAccounts.length > 0) {
                // upon receiving a new wallet, we'll request again the balance to synchronize the UI.
                const newBalance = await window.ethereum!.request({
                    method: "eth_getBalance",
                    params: [newAccounts[0], "latest"],
                });
                const chainId = await web3.eth.getChainId();
                dispatch({
                    type: "connect",
                    wallet: newAccounts[0],
                    balance: newBalance,
                });
            } else {
                // if the length is 0, then the user has disconnected from the wallet UI
                dispatch({ type: "disconnect" });
            }
        });

        window.ethereum.on('chainChanged', async (chainId: number) => {
            // fired when chain is changed
            const newAccounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            if (newAccounts.length > 0) {
                // upon receiving a new wallet, we'll request again the balance to synchronize the UI.
                const newBalance = await window.ethereum!.request({
                    method: "eth_getBalance",
                    params: [newAccounts[0], "latest"],
                });
                const chainId = await web3.eth.getChainId();
                console.log("listen ", chainId)
                dispatch({
                    type: "connect",
                    wallet: newAccounts[0],
                    balance: newBalance,
                });
            } else {
                dispatch({ type: "disconnect" });
            }
        });
    };
};
