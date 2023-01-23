"use client"

import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { projectsData as project_data } from "../libs/projects";

interface IGlobalContextProps {
  connected: any;
  projectsData: any;
  loading: boolean;
  selectedChain: any;
  setConnected: Dispatch<SetStateAction<any>>;
  setSelectedChain: Dispatch<SetStateAction<any>>;
  setLoading: Dispatch<SetStateAction<any>>;
  setProjectsData: Dispatch<SetStateAction<any>>
  currentChainId: any,
  setCurrentChainId: Dispatch<SetStateAction<any>>
  setProjects: Dispatch<SetStateAction<any>>,
  setApplications: Dispatch<SetStateAction<any>>,
  applications: any[],
  projects: any[],
}

export const AppContext = createContext<IGlobalContextProps>({
  connected: false,
  loading: false,
  setConnected: () => { },
  setSelectedChain: () => { },
  selectedChain: {
    id: "1",
    title: "Ethereum",
    img: "/images/eth-logo.svg",
    alt: "Ethereum chain",
  },
  setLoading: () => { },
  setProjectsData: () => { },
  projectsData: [],
  currentChainId: null,
  setCurrentChainId: () => { },
  setProjects: () => { },
  setApplications: () => { },
  applications: [],
  projects: [],
});

export function AppContextWrapper({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [selectedChain, setSelectedChain] = useState({
    id: "1",
    title: "Ethereum",
    img: "/images/eth-logo.svg",
    alt: "Ethereum chain",
  })

  const [currentChainId, setCurrentChainId] = useState(1)

  // projects

  const [projectsData, setProjectsData] = useState([])
  const [projects, setProjects] = useState([])
  const [applications, setApplications] = useState([])

  let sharedState: IGlobalContextProps = useMemo(() => ({
    connected,
    loading: isLoading,
    setConnected,
    setLoading: setIsLoading,
    selectedChain,
    setSelectedChain,
    projectsData,
    setProjectsData,
    currentChainId,
    setCurrentChainId,

    projects,
    applications,
    setProjects,
    setApplications,

  }), [connected, isLoading, selectedChain, , currentChainId, projectsData, applications, projects])

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
