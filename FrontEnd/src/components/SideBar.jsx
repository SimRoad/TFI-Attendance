'use strict'
import { Sidebar, SidebarItemGroup } from "flowbite-react"
import { FaUser , FaCalendarAlt , FaRegUserCircle } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { Routes as Routers, Link, Route } from "react-router-dom";
import { CgDebug } from "react-icons/cg"
import { CiViewList } from "react-icons/ci";

function WebSideBar(){

    return (
        // WIP shifts not working
        <div className="flex w-5">
        <Sidebar>
            <Sidebar.Items>
                <SidebarItemGroup>
                    <Sidebar.Collapse>
                        <Link to ="/dashboard" relative="path">
                            <Sidebar.Item icon = {MdDashboard}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        <Link to = "employee" relative="path">
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
                        <Link to = "holidayTable">
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
                        <Link to = "logs" relative="path">
                            <Sidebar.Item icon = {CiViewList}>
                                Logs
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.Collapse>
                </SidebarItemGroup>
            </Sidebar.Items>
        </Sidebar>
        </div>
    )
}

export default WebSideBar