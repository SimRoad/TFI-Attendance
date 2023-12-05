import LeavesCalendar from '../components/LeavesCalendar'
import LeaveTable from '../components/LeavesTable'
import {useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import client from '../axiosURL'
import SearchInput from '../components/SearchBar'

const LeavesPage = ()=>{
    const [leaves,setLeaves] = useState()
    const [selected,select] = useState(null)
    const [options,setOptions] = useState([])
    const fields = useForm()
    const submission = result=>{
        console.log(result)
    }
    useEffect(()=>{
        client.get('leaves/all')
        .then(response=>setLeaves(response.data))
    },[])

    return(
        <>
            <form onSubmit={fields.handleSubmit(submission)}>
                <LeaveTable selected={selected} select={select} leaves={leaves}/>
                <LeavesCalendar fields={fields}/>
                <SearchInput fields={fields} setOptions={setOptions} options={options}/>
            </form>
            <DevTool control={fields.control}/>
        </>
    )
}

export default LeavesPage