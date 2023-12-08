'use strict'
import { Tabs } from "flowbite-react"
import EmployeeRegisterForm from "./EmployeeRegister"
import EmployeeTable from "./EmployeeTable"
import { FaClipboardList , FaUserPlus } from "react-icons/fa";
import {useEffect,useState} from 'react'
import client from '../axiosURL'

const EmployeeTabs = ()=>{
    const [list,setList] = useState([])
    useEffect(()=>{
        client.get('employee/hours')
        .then(({data})=>{
            setList(data.map(a=>{return {id:a.employeeID,values:[a.workHours,a.overtimeHours,a.absentCount,a.lateCount]}}))
        })
    },[])
    return(
        <div className='overflow-y-auto max-h-[90vh] w-full'>
            <Tabs>
                <Tabs.Item title ="List" icon={FaClipboardList}>
                    <EmployeeTable editable columns={['Total Hours','Overtime','Absents','Lates']} data={list}/>
                </Tabs.Item>
                <Tabs.Item title = "Create Employee" icon={FaUserPlus}>
                    <EmployeeRegisterForm/>
                </Tabs.Item>
            </Tabs>
        </div>
    )
}
export default EmployeeTabs