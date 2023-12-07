'use strict'
import { Tabs } from "flowbite-react"
import EmployeeRegisterForm from "./EmployeeRegister"
import EmployeeTable from "./EmployeeTable"
import { FaClipboardList , FaUserPlus } from "react-icons/fa";
const EmployeeTabs = ()=>{
    return(
        <div className='overflow-y-auto max-h-[79vh] w-full'>
            <Tabs>
                <Tabs.Item title ="List" icon={FaClipboardList}>
                    <EmployeeTable/>
                </Tabs.Item>
                <Tabs.Item title = "Create Employee" icon={FaUserPlus}>
                    <EmployeeRegisterForm/>
                </Tabs.Item>
            </Tabs>
        </div>
    )
}
export default EmployeeTabs