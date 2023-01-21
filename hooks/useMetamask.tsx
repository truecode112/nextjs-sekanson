"use client"

import React, { type PropsWithChildren } from "react";

type ConnectAction = { type: "connect"; wallet: string; balance: string };
type DisconnectAction = { type: "disconnect" };
type PageLoadedAction = {
    type: "pageLoaded";
    isMetamaskInstalled: boolean;
    wallet: string | null;
    balance: string | null;

};
type LoadingAction = { type: "loading" };
type IdleAction = { type: "idle" };

type Action =
    | ConnectAction
    | DisconnectAction
    | PageLoadedAction
    | LoadingAction
    | IdleAction;


type Dispatch = (action: Action) => void;

type Status = "loading" | "idle" | "pageNotLoaded";


type State = {
    wallet: string | null;
    isMetamaskInstalled: boolean;
    status: Status;
    balance: string | null;

};

const initialState: State = {
    wallet: null,
    isMetamaskInstalled: false,
    status: "loading",
    balance: null,
} as const;

function metamaskReducer(state: State, action: Action): State {
    switch (action.type) {
        case "connect": {
            const { wallet, balance } = action;
            console.log(wallet, state, "---------------")
            if (typeof window !== "undefined") {
                const newState = { ...state, wallet, balance, status: "idle" } as State;
                console.log(newState, " is new state")
                const info = JSON.stringify(newState);
                window.localStorage.setItem("metamaskState", info);
                return newState;
            }
            return state
        }
        case "disconnect": {
            if (typeof window !== "undefined") {
                window.localStorage.removeItem("metamaskState");
                if (typeof window.ethereum !== "undefined") {
                    window.ethereum.removeAllListeners(["accountsChanged"]);
                }
            }
            return { ...state, wallet: null, balance: null, };
        }
        case "pageLoaded": {
            const { isMetamaskInstalled, balance, wallet } = action;
            return { ...state, isMetamaskInstalled, status: "idle", wallet, balance };
        }
        case "loading": {
            return { ...state, status: "loading" };
        }
        case "idle": {
            return { ...state, status: "idle" };
        }
        default: {
            throw new Error("Unhandled action type");
        }
    }
}

const MetamaskContext = React.createContext<
    { state: State; dispatch: Dispatch } | undefined
>(undefined);

function MetamaskProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = React.useReducer(metamaskReducer, initialState);
    const value = { state, dispatch };

    return (
        <MetamaskContext.Provider value={value}>
            {children}
        </MetamaskContext.Provider>
    );
}



function useMetamask() {
    const context = React.useContext(MetamaskContext);
    if (context === undefined) {
        throw new Error("useMetamask must be used within a MetamaskProvider");
    }
    return context;
}

export { MetamaskProvider, useMetamask };
