import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from "../components/ShiftForm";
import {DevTool} from '@hookform/devtools'
import client from '../axiosURL'
import {useState,useEffect} from 'react'
import { useForm } from "react-hook-form";

const ShiftPage = ()=>{
    const fields = useForm()
    const [empList, setEmpList] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [conflict, setConflict] = useState({});
    const submission = results=>{
        results.employees = empList
        results.dates.forEach((date,ndx)=>results.dates[ndx] = date.format('YYYY-MM-DD'))
        client.post('/shift',results)
        .then(response=>{
            console.log(response)
            if(response.data[0].shiftID){
                setConflict(response.data)
                setOpenModal(true)
            }else{
                console.log('Shift may be saved?')
            }
        })
        .catch(error=>{
            console.error(error)
        })
    }
    useEffect(()=>{console.log(empList)},[empList])
    return(
        <>
            {/* <ConflictModal openModal={openModal} setOpenModal={setOpenModal} conflict={conflict}/> */}
            <EmployeeTable setter={setEmpList} columns={['Assigned','Shifts']}/>
            <form onSubmit={fields.handleSubmit(submission)}>
                <ShiftForm fields={fields} employees={empList}/>
            </form>
            <DevTool control={fields.control}/>
        </>
    )
}

export default ShiftPage