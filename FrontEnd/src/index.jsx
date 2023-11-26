import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import SessionProvider,{SessionContext} from './session/SessionProvider'
import {useContext} from 'react'

const index = ()=>{
    return(
        <SessionProvider>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<Dashboard/>} path='/dashboard'/>
                    </Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </Router>
        </SessionProvider>
    )
}

const PrivateRoutes = ({children, ...rest})=>{
    const {cookies} = useContext(SessionContext)
    return(
        cookies.session ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default index