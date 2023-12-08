import { Table, TableHeadCell } from "flowbite-react"

const EmployeeStatus = () =>{

    const [data,setData] = useState([]);

    return(
        <>
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Work Hours
                    </Table.HeadCell>
                    <Table.HeadCell>
                        OvertimeHours
                    </Table.HeadCell>
                    <Table.HeadCell>
                        No. of Absences
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {/* loop body here */}
                </Table.Body>
            </Table>
        </div>
        </>
    )
}

const Rows = ({id, TotalHours, OvertimeHours, Absences})=>{

    return(
        <Table.Row>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{TotalHours}</Table.Cell>
            <Table.Cell>{OvertimeHours}</Table.Cell>
            <Table.Cell>{Absences}</Table.Cell>
        </Table.Row>
    )
}

export default EmployeeStatus