import { Table, TableHeadCell } from "flowbite-react"

function EmployeeStatus({EmpID, Hours}){


    return(
        <>
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell>
                        ID
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Work Hours
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