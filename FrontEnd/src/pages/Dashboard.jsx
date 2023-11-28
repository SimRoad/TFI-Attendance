import Header from "../components/headerAndFooter/Header";
import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from '../components/ShiftForm'
import WebSideBar from "../components/SideBar";
import { useForm } from "react-hook-form";
import {useState, useEffect} from 'react'
import {DevTool} from '@hookform/devtools'
import client from '../axiosURL'
import axios from 'axios'
import ConflictModal from "../components/ConflictModal";

const dashboard = ()=>{
    const fields = useForm()
    const [empList, setEmpList] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [conflict, setConflict] = useState({});
    const [temp, setTemp] = useState(true)
    const {handleSubmit, register, control, formState:{errors}} = fields
    const submission = results=>{
        results.employees = empList
        results.dates.forEach((date,ndx)=>results.dates[ndx] = date.format('YYYY-MM-DD'))
        client.post('/shift',results)
        .then(response=>{
            console.log(response)
            if(response.data[0].shiftID){
                setOpenModal(true)
                setConflict(response.data)
            }
        })
        .catch(error=>{
            console.error(error)
        })
    }
    useEffect(()=>{
        console.log(empList)
    },[empList])
    return(
        <>
            <Header/>
            {/* <WebSideBar/> */}
            <ConflictModal openModal={openModal} setOpenModal={setOpenModal} conflict={conflict}/>
            <EmployeeTable setEmpList={setEmpList}/>
            <form onSubmit={handleSubmit(submission)}>
                {temp && <ShiftForm fields={fields}/>}
            </form>
            <DevTool control={control}/>
        </>
    )
}

export default dashboard