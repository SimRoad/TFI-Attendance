import {Checkbox, Table, Button} from "flowbite-react"
import client from '../axiosURL'
import {useState,useEffect} from 'react'
import { FaEdit } from "react-icons/fa"

function HolidayTable({setHolidayList}){
    const [holidays,setHolidays] = useState([])
    const [offset,setOffset] = useState(0)
    useEffect(()=>{
        const request = async ()=>{
            const response = await client.get(`holidays/all`)
            setHolidays(prev=>[...prev,...response.data])
        }
        if(!holidays.length && holidays.length - offset <=0) request()
    },[offset,holidays])
    return(
        <div className='overflow-y-auto max-h-[40vh]'>
            <Table className="table-auto"hoverable>
                <Table.Head>
                    <Table.HeadCell><Checkbox/></Table.HeadCell>
                    <Table.HeadCell>Holiday Name</Table.HeadCell>
                    <Table.HeadCell>Holiday Date</Table.HeadCell>
                    <Table.HeadCell>Holiday Type</Table.HeadCell>
                    <Table.HeadCell><span className="sr-only">Edit</span></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                    holidays.map((holiday,ndx)=>
                        <HolidayTableBody key={ndx} id={holiday.holidayID} name={holiday.holidayName} date={holiday.holidayDate} type={holiday.holidayType}/>
                    )
                    }
                </Table.Body>
            </Table>
    </div>
    )
}

const HolidayTableBody = ({setHolidayList,id,name,date,type})=>{
    const checkHandler = ()=>{
        setHolidayList(list=>{
            console.log(list)
            if(list.includes(id)) return list.filter(val=> val !== id)
            return [...list,id]
        })
    }
    return(
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell><Checkbox onChange={()=>checkHandler()}/></Table.Cell>
            <Table.Cell className ="whitespace-nowrap font-medium text-gray-900 dark:text-white">{name}</Table.Cell>
            <Table.Cell>{date}</Table.Cell>
            <Table.Cell>{special}</Table.Cell>
            <Table.Cell><Button className="border-2 border-accent/50" icon ={FaEdit}></Button></Table.Cell>
        </Table.Row>
    )
}

export default HolidayTable