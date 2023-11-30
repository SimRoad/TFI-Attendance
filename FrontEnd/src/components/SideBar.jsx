'use strict'
import { Sidebar, SidebarItemGroup } from "flowbite-react"
import { FaUser , FaCalendarAlt , FaRegUserCircle } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { Routes as Routers, Link, Route } from "react-router-dom";
import { CgDebug } from "react-icons/cg"
import ShiftForm from "./ShiftForm";
import LogTable from "./LogsTable";
function WebSideBar(){

    return (
        
        <div class="flex w-60">
        <Sidebar>
            <Sidebar.Items>
                <SidebarItemGroup>
                    <Sidebar.Collapse>
                        <Link to ="/dashboard" relative="path">
                            <Sidebar.Item icon = {MdDashboard}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        <Link to = "employeeTable" relative="path">
                            <Sidebar.Item icon = {FaUser}>
                                Employees
                            </Sidebar.Item>
                        </Link>
                        <Link to = "shift" relative="path">
                            <Sidebar.Item icon = {MdEditCalendar}>
                                Shifts
                            </Sidebar.Item>
                        </Link>
                        <Link to = "leaves" relative="path">
                            <Sidebar.Item icon = {BsFillBriefcaseFill}>
                                Leaves
                            </Sidebar.Item>
                        </Link>
                        <Link to = "holidayTable" relative="path">
                            <Sidebar.Item icon = {FaCalendarAlt}>
                                Holidays
                            </Sidebar.Item>
                        </Link>
                        <Link to = "createuser" relative="path">
                            <Sidebar.Item icon = {FaRegUserCircle}>
                                Create User
                            </Sidebar.Item>
                        </Link>
                        <Link to = "debug" relative="path">
                            <Sidebar.Item icon = {CgDebug}>
                                Debugging
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                </SidebarItemGroup>
            </Sidebar.Items>
        </Sidebar>
        <Routers>
                    <Route element={<ShiftForm/>} path='*/shift'/>
                    <Route element={<LogTable/>} path='*/logs'/>
                </Routers>
        </div>
    )
}

export default WebSideBar