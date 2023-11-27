'use strict'
import { Sidebar } from "flowbite-react"
import { FaUser , FaCalendarAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function WebSideBar(){

    return (
        <Sidebar>
            <Sidebar.Item icon = {MdDashboard}>
                <Link to ="/dashboard" relative="path">Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {FaUser}>
                <Link to = "/employees" relative="path" >Employees</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {MdEditCalendar}>
                <Link to = "/shifts"  relative="path">Shifts</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {BsFillBriefcaseFill}>
                <Link to = "/leaves" relative="path">Leaves</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {FaCalendarAlt}>
                <Link to = "/holidays" relative="path">Holidays</Link>
            </Sidebar.Item>
            <Sidebar.Item>
                <Link to = "/createUser" relative="path">Create User</Link>
            </Sidebar.Item>
        </Sidebar>
    )
}

export default WebSideBar