import {Checkbox, Table, Button} from 'flowbite-react'
import { FaEdit } from 'react-icons/fa'

function LeaveTable({leaves}){
    return(
        <div className='overflow-y-auto max-h-[40vh]'>
            <Table className="table-auto"hoverable>
                <Table.Head>
                    <Table.HeadCell></Table.HeadCell>
                    <Table.HeadCell>Leave Name</Table.HeadCell>
                    <Table.HeadCell>Leave Duration</Table.HeadCell>
                    <Table.HeadCell><span className='sr-only'>Edit</span></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        leaves?.map((Leave,ndx)=>
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
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell><Checkbox onChange ={()=>checkHandler()}/></Table.Cell>
            <Table.Cell className='text-black'>{name}</Table.Cell>
            <Table.Cell className='text-black'>{duration}</Table.Cell>
            <Table.Cell><Button><FaEdit/></Button></Table.Cell>
        </Table.Row>
    )
}
export default LeaveTable