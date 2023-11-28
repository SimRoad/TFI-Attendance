import {Checkbox, Table} from 'flowbite-react'
import client from '../axiosURL'
import {useState,useEffect} from 'react'
import { FaEdit } from 'react-icons/fa'

function LeaveTable({setLeaveList}){
    const [leaves,setLeaves] = useState([])

    useEffect(()=>{
        const request = async ()=>{
            const response = await client.get(`leaves/all`)
            setLeaves(prev=>[...prev,response.data])
        }
        if(!leaves.length) request()
    },[leaves])
    return(
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Leave Name</Table.HeadCell>
                    <Table.HeadCell>Leave Duration</Table.HeadCell>
                    <Table.HeadCell><span className='sr-only'>Edit</span></Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {
                        leaves.map((Leave,ndx)=>
                            <LeaveBody key={ndx} id={Leave.leaveID} name={Leave.leaveName} duration={Leave.daysLeft}/>
                        )
                    }
                </Table.Body>
            </Table>
        </div>

    )
}

const LeaveBody = ({setLeaveList,id,name,duration})=>{
    const checkHandler = ()=>{
        setLeaveList(list=>{
            console.log(list)
            if(list.includes(id)) return list.filter(val=>val!==id)
            return [...list,id]
         })
    }
    return(
        <Table.Row>
            <Table.Cell><Checkbox onChange ={()=>checkHandler()}/></Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{duration}</Table.Cell>
            <Table.Cell><Button><FaEdit/></Button></Table.Cell>
        </Table.Row>
    )
}
export default LeaveTable