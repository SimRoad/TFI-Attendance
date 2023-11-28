'use client'

import {Table, TableRow} from "flowbite-react"

function holidayTable(){
    return(
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>Holiday Name</Table.HeadCell>
                    <Table.HeadCell>Holdiday Date</Table.HeadCell>
                    <Table.HeadCell>Holiday Type</Table.HeadCell>
                    <Table.HeadCell><span className="sr-only">Edit Date</span></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <HolidayTableBody/>
                </Table.Body>
            </Table>
    </div>
    )
}

function HolidayTableBody(){
    return(
        <Table.Row>
            <Table.Cell></Table.Cell>
        </Table.Row>
    )
}