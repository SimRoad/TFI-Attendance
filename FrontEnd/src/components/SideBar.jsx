'use strict'
import { Sidebar, SidebarItemGroup } from "flowbite-react"
import { FaUser , FaCalendarAlt , FaRegUserCircle } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { CgDebug } from "react-icons/cg"
function WebSideBar(){

    return (
        <div class="flex w-60 position: fixed">
        <Sidebar>
            <Sidebar.Items>
                <SidebarItemGroup>
                    <Sidebar.Item icon = {MdDashboard}>
                        <Link to ="/dashboard" relative="path"></Link>Dashboard 
                    </Sidebar.Item>
                    <Sidebar.Item icon = {FaUser}>
                        <Link to = "/employees" relative="path" ></Link>Employee
                    </Sidebar.Item>
                    <Sidebar.Item icon = {MdEditCalendar}>
                        <Link to = "/shifts"  relative="path"></Link>Shifts
                    </Sidebar.Item>
                    <Sidebar.Item icon = {BsFillBriefcaseFill}>
                        <Link to = "/leaves" relative="path"></Link>Leaves
                    </Sidebar.Item>
                    <Sidebar.Item icon = {FaCalendarAlt}>
                        <Link to = "/holidays" relative="path"></Link>Holidays
                    </Sidebar.Item>
                    <Sidebar.Item icon = {FaRegUserCircle}>
                        <Link to = "/createUser" relative="path"></Link>Create User
                    </Sidebar.Item>
                    <Sidebar.Item icon = {CgDebug}>
                        <Link to = "/debug" relative="path"></Link>Debugging
                    </Sidebar.Item>
                </SidebarItemGroup>
            </Sidebar.Items>
        </Sidebar>
        </div>
    )
}

export default WebSideBar