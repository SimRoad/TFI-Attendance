import EmployeeRegisterForm from "../components/EmployeeRegister";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/headerAndFooter/Header";
import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from '../components/ShiftForm'
import WebSideBar from "../components/SideBar";
import { useForm } from "react-hook-form";
import {useState, useEffect} from 'react'
import {DevTool} from '@hookform/devtools'

const dashboard = ()=>{
    const fields = useForm()
    const [empList, setEmpList] = useState([])
    const [temp, setTemp] = useState(true)
    const {handleSubmit, register, control, formState:{errors}} = fields
    const submission = results=>{
        // console.log(empList.map(e=>{
        //     results.employeeID = e
        //     return results
        // }))
        console.log(results?.dates.map(date=>date.format()))
    }
    useEffect(()=>{
        console.log(empList)
    },[empList])
    return(
        <>
            <Header/>
            {/* <WebSideBar/> */}
            <EmployeeTable setEmpList={setEmpList}/>
            <form onSubmit={handleSubmit(submission)}>
                {temp && <ShiftForm fields={fields}/>}
            </form>
            <DevTool control={control}/>
            <LogoutButton/>
            {/* <EmployeeRegisterForm/> */}
        </>
    )
}

export default dashboard