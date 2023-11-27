import {Table, Button} from 'flowbite-react'
import { FaUserEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const EmployeeTable = ()=>{
    return(
        <Table>
            <Table.Head>
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
                <TableRow/>
            </Table.Body>
        </Table>
    )
}

const TableRow = ()=>{
    return(
        <>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Lance Ramoose'}
            </Table.Cell>
            <Table.Cell>32</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>smth</Table.Cell>
            <Table.Cell>stuff</Table.Cell>
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