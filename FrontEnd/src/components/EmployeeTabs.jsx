'use strict'
import { Tabs } from "flowbite-react"
import EmployeeRegisterForm from "./EmployeeRegister"
import EmployeeTable from "./EmployeeTable"
import { FaClipboardList , FaUserPlus } from "react-icons/fa";
import { useState, useEffect } from "react"
import client from "../axiosURL"

const EmployeeTabs = ()=>{
    const [position, setPosition] = useState([]);
    var avail = false

    useEffect(() => {
        client.get(`/user/auth`)
        .then(res => setPosition(res.data))
        .catch(err => console.log(err))
    }, [])
    
    if(position.position === "Management"){
        avail = true;
    }

    return(
        <div className='overflow-y-auto max-h-[90vh] w-full'>
            <Tabs>
                <Tabs.Item title="List" icon={FaClipboardList}>
                    <EmployeeTable/>
                </Tabs.Item>
                <Tabs.Item title="Create Employee" disabled={avail} icon={FaUserPlus}>
                    <EmployeeRegisterForm/>
                </Tabs.Item>
            </Tabs>
        </div>
    )
}

export default EmployeeTabs