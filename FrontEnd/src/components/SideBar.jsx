'use strict'
import { Sidebar } from "flowbite-react"
import { FaUser , FaCalendarAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"

function WebSideBar(){
    // still need to make the change work? 
    
    useEffect(() => {
        fetch('http://localhost:8080/')
          .then(response => response.json())
          .then(data => setUser(data));
      }, [change]);

    return (
        <Sidebar>
            <Sidebar.Item href="#" icon = {MdDashboard}>
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {FaUser}>
                Employees
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {MdEditCalendar}>
                Shifts
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {BsFillBriefcaseFill}>
                Leaves
            </Sidebar.Item>
            <Sidebar.Item href="#" icon = {FaCalendarAlt}>
                Holiday 
            </Sidebar.Item>
        </Sidebar>
    )
}

export default WebSideBar