import {useContext, createContext} from "react";

 type AppContext ={
    user:number,
    outlet:number,
   setUser: (user:number) => void,
    setOutlet: (outlet:number) => void,
}

export const AppContext = createContext<AppContext>({
    user:0,
    outlet:0,
    setUser: () => {},
    setOutlet: () => {},
})

export const useApp = () => useContext(AppContext);