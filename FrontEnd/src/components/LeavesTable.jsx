import {Table, Button, Radio} from 'flowbite-react'
import { FaEdit } from 'react-icons/fa'

function LeaveTable({leaves,selected,select}){
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
                        leaves?.map((leave,ndx)=>
                            <LeaveBody key={ndx} id={leave.leavesID} name={leave.leaveName} duration={leave.defaultDays} selected={selected} select={select}/>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

const LeaveBody = ({selected,select,id,name,duration})=>{
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell><Radio checked={selected === id} onChange ={()=>select(id)} /></Table.Cell>
            <Table.Cell className='text-black'>{name}</Table.Cell>
            <Table.Cell className='text-black'>{duration}</Table.Cell>
            <Table.Cell><Button><FaEdit/></Button></Table.Cell>
        </Table.Row>
    )
}
export default LeaveTable