'use strict'
import { Sidebar } from "flowbite-react"
import { FaUser , FaCalendarAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { Link } from "react-router-dom";

function WebSideBar(){

    return (
        <Sidebar>
            <Sidebar.Item icon = {MdDashboard}>
                <Link to ="/">Dashboard</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {FaUser}>
                <Link to = "/employees">Employees</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {MdEditCalendar}>
                <Link to = "/shifts">Shifts</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {BsFillBriefcaseFill}>
                <Link to = "/leaves">Leaves</Link>
            </Sidebar.Item>
            <Sidebar.Item icon = {FaCalendarAlt}>
                <Link to = "/holidays">Holidays</Link>
            </Sidebar.Item>
        </Sidebar>
    )
}

export default WebSideBar