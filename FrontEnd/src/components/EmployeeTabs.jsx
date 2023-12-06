'use strict'
import { Tabs } from "flowbite-react"
import EmployeeRegisterForm from "./EmployeeRegister"
import EmployeeTable from "./EmployeeTable"
import { FaClipboardList , FaUserPlus } from "react-icons/fa";
const EmployeeTabs = ()=>{
    return(
        <Tabs>
            <Tabs.Item title ="List" icon={FaClipboardList}>
                <EmployeeTable/>
            </Tabs.Item>
            <Tabs.Item title = "Create Employee" icon={FaUserPlus}>
                <EmployeeRegisterForm/>
            </Tabs.Item>
        </Tabs>
    )
}
export default EmployeeTabs