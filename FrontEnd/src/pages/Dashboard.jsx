import Header from "../components/headerAndFooter/Header";
import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from '../components/ShiftForm'
import WebSideBar from "../components/SideBar";
import { useForm } from "react-hook-form";
import {useState} from 'react'
import {DevTool} from '@hookform/devtools'
import client from '../axiosURL'
import axios from 'axios'
import { Outlet, Route, Routes as Routers } from "react-router-dom";
import ConflictModal from "../components/ConflictModal";
import CompFooter from "../components/headerAndFooter/Footer";
import LogTable from "../components/LogsTable";

const dashboard = ()=>{
    const fields = useForm()
    const [empList, setEmpList] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [conflict, setConflict] = useState({});
    const [temp, setTemp] = useState(true)
    const {handleSubmit, control, formState:{errors}} = fields
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
    return(
        <>  
            <Header/>
            {/* <ConflictModal openModal={openModal} setOpenModal={setOpenModal} conflict={conflict}/> */}
            <div className="grid grid-flow-col h-auto-max">
                <WebSideBar/>
                <div className="w-full"><Outlet/></div>
            </div>
            <form onSubmit={handleSubmit(submission)}>
                {temp && <ShiftForm fields={fields} employees={empList}/>}
            </form>
            <DevTool control={control}/>
            <CompFooter/>
        </>
    )
}

export default dashboard