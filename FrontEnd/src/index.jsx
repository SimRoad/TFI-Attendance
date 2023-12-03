import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserCreate from './components/UserCreate'
import EmployeeRegisterForm from './components/EmployeeRegister'
import LeaveTable from './components/LeavesTable'
import HolidayTable from './components/HolidayTable'
import EmployeeTable from './components/EmployeeTable'
import LeaveForm from './components/LeaveForm'
import LogTable from './components/LogsTable'
import TimeInOut from './components/TimeInOut'
import ShiftPage from '../src/pages/ShiftPage'
import client from './axiosURL'
import {useEffect, useState} from 'react'

const index = ()=>{
    return(
        <Router>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route element={<EmployeeRegisterForm/>} path='/employeeregister' />
                    <Route element={<EmployeeRegisterForm/>} path='/createemployee'/>
                    <Route element={<LeaveTable/>} path='/leaves'/>
                    <Route element={<LeaveForm/>} path='/leaveform'/>
                    <Route element={<Dashboard/>} path='/dashboard'>
                        <Route index element={<EmployeeTable/>} />
                        <Route element={<EmployeeTable/>} path='/dashboard/employeeTable'/>
                        <Route element={<ShiftPage/>} path='/dashboard/shift'/>
                        <Route element={<HolidayTable/>} path='/dashboard/holidayTable'/>
                        <Route element={<LeaveTable/>} path='/dashboard/leaves'/>
                        <Route element={<UserCreate/>} path='/dashboard/createuser'/>
                        <Route element={<LogTable/>} path='/dashboard/logs'/>
                        <Route element={<TimeInOut/>} path='/dashboard/debug'/>
                    </Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/usercreate' element={<UserCreate/>}></Route>
            </Routes>
        </Router>
    )
}

const PrivateRoutes = ({children, ...rest})=>{
    const [auth,setAuth] = useState(null)
    useEffect(()=>{
        client.get('/user/auth')
        .then(({data})=>setAuth(data))
    },[])
    if(!auth) return("loading")
    return(
         auth.valid ? <Outlet/> : <Navigate to='/login'/>
    )
}

export default index