import {BrowserRouter as Router, Routes, Route, Navigate, Outlet} from 'react-router-dom'
import SessionProvider,{SessionContext} from './session/SessionProvider'
import {useContext} from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import UserCreate from './components/UserCreate'
import EmployeeRegisterForm from './components/EmployeeRegister'
import TimeRange from './components/TimeRange'
import LeaveTable from './components/LeavesTable'
import HolidayForm from './components/HolidayForm'
import HolidayTable from './components/HolidayTable'
import EmployeeTable from './components/EmployeeTable'
import LeaveForm from './components/LeaveForm'
import LogTable from './components/LogsTable'
import WebSideBar from './components/SideBar'
import ShiftForm from './components/ShiftForm'

const index = ()=>{
    return(
        <SessionProvider>
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
                            <Route element={<HolidayTable/>} path='/dashboard/holidayTable'/>
                            <Route element={<LeaveTable/>} path='/dashboard/leaves'/>
                            <Route element={<ShiftForm/>} path='shift'/>
                            <Route element={<CreateUser/>} path='/dashboard/createuser'/>
                            <Route element={<LogTable/>} path='/dashboard/logs'/>
                        </Route>
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