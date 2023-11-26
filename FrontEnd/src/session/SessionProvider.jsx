import {createContext} from 'react'
import {useCookies} from 'react-cookie'

export const SessionContext = createContext()

export const SessionProvider = ({children})=>{
    const [cookies,setCookies,removeCookies] = useCookies(['session'])
    return (
        <SessionContext.Provider value={{cookies,setCookies,removeCookies}}>{children}</SessionContext.Provider>
    )
}

export default SessionProvider