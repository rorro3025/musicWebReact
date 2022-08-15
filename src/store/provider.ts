import {useContext, createContext} from "react";

type AppContextType = {
    user: number,
    outlet: number,
    setUser: (user: number) => void,
    setOutlet: (outlet: number) => void,
}

export const AppContext = createContext<AppContextType>({
    user: 0,
    outlet: 0,
    setUser: () => {
    },
    setOutlet: () => {
    },
})

export const useApp = () => useContext(AppContext);