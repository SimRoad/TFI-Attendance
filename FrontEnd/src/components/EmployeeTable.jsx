import {Table, Button, Checkbox} from 'flowbite-react'
import { FaUserEdit } from "react-icons/fa";
import { useState, useEffect } from 'react'
import client from '../axiosURL'

const EmployeeTable = ({setEmpList})=>{
    const [employees,setEmployees] = useState([])
    const [offset,setOffset] = useState(0)
    useEffect(()=>{
        const request = async () => {
            console.log(offset)
            const response = await client.get(`employee/all?offset=${offset}`)
            setEmployees(prev=>[...prev, ...response.data]);
        }
        request()
    },[])
    return(
        <div className='overflow-y-auto max-h-[70vh]'>
            <Button onClick={()=>{setOffset(a=>a+1)}}/>
            <Table className='table-auto' hoverable>
                <Table.Head>
                    <Table.HeadCell><Checkbox onChange={()=>setOffset(a=>a+1)}/></Table.HeadCell>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell>Total Hours</Table.HeadCell>
                    <Table.HeadCell>Overtime</Table.HeadCell>
                    <Table.HeadCell>Shift</Table.HeadCell>
                    <Table.HeadCell>Errors</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className='divide-y'>
                    {
                        employees.map((emp,ndx)=>
                            <TableRow key={ndx} id={emp.employeeID} name={emp.fullName} setEmpList={setEmpList}/>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    )
}

const TableRow = ({setEmpList,id,name})=>{
    const checkHandler = ()=>{
        setEmpList(list=>{
            if(list.includes(id)) return list.filter(val=>val !== id)
            return [...list,id]
        })
    }
    return(
        <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell><Checkbox onChange={()=>checkHandler()}/></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {name}
            </Table.Cell>
            <Table.Cell>WIP</Table.Cell>
            <Table.Cell>WIP</Table.Cell>
            <Table.Cell>WIP</Table.Cell>
            <Table.Cell>WIP</Table.Cell>
            <Table.Cell>
                <Button className='border-2 border-accent/50'>
                    <FaUserEdit className="ml-1 h-5 w-5" fill='black'/>
                </Button>
            </Table.Cell>
        </Table.Row>
        </>
    )
}

export default EmployeeTable