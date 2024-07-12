/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props)=>{
  const phone = '+1 123456789';
  const address = 'welcome street';
  return (
    <AppContext.Provider value={{phone, address}}>
    {props.children}
    </AppContext.Provider>
  )
}
export default ContextProvider;