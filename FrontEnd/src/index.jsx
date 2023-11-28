import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateUser from './pages/CreateUser'
import EmployeeRegisterForm from './components/EmployeeRegister'
import TimeRange from './components/TimeRange'
import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import SessionProvider,{SessionContext} from './session/SessionProvider'
import {useContext} from 'react'

const index = ()=>{
    return(
        <SessionProvider>
            <Router>
                <Routes>
                    {/* <Route element={<PrivateRoutes/>}>
                        <Route element={<Dashboard/>} path='/dashboard'/>
                        <Route element={<CreateUser/>} path='/createuser'/>
                        <Route element={<EmployeeRegisterForm/>} path='/employeeregister' />
                    </Route> */}
                    {/* <Route path='/login' element={<Login/>}></Route> */}

                    <Route path='/debug' element={<TimeRange/>}></Route>
                    <Route path='/createuser' element={<CreateUser/>}></Route>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                </Routes>
            </Router>
        </SessionProvider>
    )
}

const PrivateRoutes = ({children, ...rest})=>{
    const {cookies} = useContext(SessionContext)
    return(
        <></>
        // cookies.session ? <Outlet/> : <Navigate to='/login'/>
        // cookies.session ? <Outlet/> : <Navigate to='/createuser'/>
    )
}

export default index