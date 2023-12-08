'use strict'
import { useState, useEffect } from 'react';
import { Sidebar, SidebarItemGroup } from "flowbite-react"
import { FaUser, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDashboard, MdEditCalendar } from "react-icons/md"
import { Routes as Routers, Link, Route } from "react-router-dom";
import { CgDebug } from "react-icons/cg"
import { CiViewList } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import client from '../axiosURL';

function WebSideBar({id}) {
    const [close, setClose] = useState(true);
    const [user,setUser] = useState({});

    useEffect(()=>{
        client.get(`user/${id}`)
        .then(res=>setUser(res.data[0]))
        .then(err => console.log(err))
    })

    return (
        // WIP shifts not working
        <div className="flex flex-col w-max">
            <button className='flex justify-center' onClick={() => setClose(!close)}><IoMenu size={30}/></button>
            <Sidebar collapsed={close}>
                {/* <Sidebar.Items>
                    <SidebarItemGroup>
                        <Link to="/dashboard" relative="path">
                            <Sidebar.Item icon={MdDashboard}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        <Link to="employee" relative="path">
                            <Sidebar.Item icon={FaUser}>
                                Employees
                            </Sidebar.Item>
                        </Link>
                        <Link to="shift" relative="path">
                            <Sidebar.Item icon={MdEditCalendar}>
                                Shifts
                            </Sidebar.Item>
                        </Link>
                        <Link to="leaves" relative="path">
                            <Sidebar.Item icon={BsFillBriefcaseFill}>
                                Leaves
                            </Sidebar.Item>
                        </Link>
                        <Link to="holidayTable">
                            <Sidebar.Item icon={FaCalendarAlt}>
                                Holidays
                            </Sidebar.Item>
                        </Link>
                        <Link to="createuser" relative="path">
                            <Sidebar.Item icon={FaRegUserCircle}>
                                Create User
                            </Sidebar.Item>
                        </Link>
                        <Link to="debug" relative="path">
                            <Sidebar.Item icon={CgDebug}>
                                Debugging
                            </Sidebar.Item>
                        </Link>
                        <Link to="logs" relative="path">
                            <Sidebar.Item icon={CiViewList}>
                                Logs
                            </Sidebar.Item>
                        </Link>
                    </SidebarItemGroup>
                </Sidebar.Items> */}
                <SideBarBody userPosition={user.Position}/>
            </Sidebar>
        </div>
    )
}

const SideBarBody = ({userPosition})=>{

    if(userPosition === "admin"){
        return(
            <Sidebar.Items>
                        <SidebarItemGroup>
                            <Link to="/dashboard" relative="path">
                                <Sidebar.Item icon={MdDashboard}>
                                    Dashboard
                                </Sidebar.Item>
                            </Link>
                            <Link to="employee" relative="path">
                                <Sidebar.Item icon={FaUser}>
                                    Employees
                                </Sidebar.Item>
                            </Link>
                            <Link to="shift" relative="path">
                                <Sidebar.Item icon={MdEditCalendar}>
                                    Shifts
                                </Sidebar.Item>
                            </Link>
                            <Link to="leaves" relative="path">
                                <Sidebar.Item icon={BsFillBriefcaseFill}>
                                    Leaves
                                </Sidebar.Item>
                            </Link>
                            <Link to="holidayTable">
                                <Sidebar.Item icon={FaCalendarAlt}>
                                    Holidays
                                </Sidebar.Item>
                            </Link>
                            <Link to="createuser" relative="path">
                                <Sidebar.Item icon={FaRegUserCircle}>
                                    Create User
                                </Sidebar.Item>
                            </Link>
                            <Link to="debug" relative="path">
                                <Sidebar.Item icon={CgDebug}>
                                    Debugging
                                </Sidebar.Item>
                            </Link>
                            <Link to="logs" relative="path">
                                <Sidebar.Item icon={CiViewList}>
                                    Logs
                                </Sidebar.Item>
                            </Link>
                        </SidebarItemGroup>
                    </Sidebar.Items>
        )
    }else if(userPosition === "management"){
        return(
            <Sidebar.Items>
                        <SidebarItemGroup>
                            <Link to="/dashboard" relative="path">
                                <Sidebar.Item icon={MdDashboard}>
                                    Dashboard
                                </Sidebar.Item>
                            </Link>
                            <Link to="employee" relative="path">
                                <Sidebar.Item icon={FaUser}>
                                    Employees
                                </Sidebar.Item>
                            </Link>
                            <Link to="shift" relative="path">
                                <Sidebar.Item icon={MdEditCalendar}>
                                    Shifts
                                </Sidebar.Item>
                            </Link>
                            <Link to="leaves" relative="path">
                                <Sidebar.Item icon={BsFillBriefcaseFill}>
                                    Leaves
                                </Sidebar.Item>
                            </Link>
                            <Link to="holidayTable">
                                <Sidebar.Item icon={FaCalendarAlt}>
                                    Holidays
                                </Sidebar.Item>
                            </Link>
                        </SidebarItemGroup>
                    </Sidebar.Items>
        )
    }
    
}

export default WebSideBar