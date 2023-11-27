'use strict'
import { Sidebar } from "flowbite-react"
import { FaUser , FaCalendarAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md"

function WebSideBar(){
    return (
        <Sidebar>
            <Sidebar.Item href="#" icon = {MdDashboard}>
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {FaUser}>
                Employees
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {FaCalendarAlt}>
                Shifts
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {BsFillBriefcaseFill}>
                Leaves
            </Sidebar.Item>
        </Sidebar>
    )
}
