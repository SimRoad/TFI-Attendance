import LeavesCalendar from '../components/LeavesCalendar'
import LeaveTable from '../components/LeavesTable'
import {useState,useEffect} from 'react'
import client from '../axiosURL'

const LeavesPage = ()=>{
    const [leaves,setLeaves] = useState()
    useEffect(()=>{
        client.get('leaves/all')
        .then(response=>setLeaves(response.data))
    },[])

    return(
        <>
            <LeaveTable leaves={leaves}/>
            <LeavesCalendar/>
        </>
    )
}

export default LeavesPage