import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import SessionProvider,{SessionContext} from './session/SessionProvider'
import {useContext} from 'react'
import EmployeeRegisterForm from './components/EmployeeRegister'
import CreateUser from './pages/CreateUser'

const index = ()=>{
    return(
        <SessionProvider>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<Dashboard/>} path='/dashboard'/>
                    </Route>
                    {/* <Route path='/login' element={<Login/>}></Route> */}
                    <Route path='/createuser' element={<CreateUser/>}></Route>
                </Routes>
            </Router>
        </SessionProvider>
    )
}

const PrivateRoutes = ({children, ...rest})=>{
    const {cookies} = useContext(SessionContext)
    return(
        // cookies.session ? <Outlet/> : <Navigate to='/login'/>
        cookies.session ? <Outlet/> : <Navigate to='/createuser'/>
    )
}

export default index