import EmployeeRegisterForm from "../components/EmployeeRegister";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/headerAndFooter/Header";
import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from '../components/ShiftForm'
import WebSideBar from "../components/SideBar";
import { useForm } from "react-hook-form";
import {useState, useEffect} from 'react'

const dashboard = ()=>{
    const fields = useForm()
    const [empList, setEmpList] = useState([])
    const [temp, setTemp] = useState(true)
    const {handleSubmit, register, control, formState:{errors}} = fields
    const submission = results=>{
        console.log(empList.map(e=>{
            results.employeeID = e
            return results
        }))
    }
    useEffect(()=>{
        console.log(empList)
    },[empList])
    return(
        <>
            <Header/>
            {/* <WebSideBar/> */}
            <LogoutButton/>
            <form onSubmit={handleSubmit(submission)}>
                {temp && <ShiftForm fields={fields}/>}
            </form>
            <EmployeeTable setEmpList={setEmpList}/>
            <EmployeeRegisterForm/>
        </>
    )
}

export default dashboard