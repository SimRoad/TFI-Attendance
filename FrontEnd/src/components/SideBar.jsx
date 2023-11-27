'use strict'
import { Sidebar } from "flowbite-react"

function WebSideBar(){
    return (
        <Sidebar>
            <Sidebar.Item>
                Dashboard
            </Sidebar.Item>
            <Sidebar.Item>
                Employees
            </Sidebar.Item>
            <Sidebar.Item>
                Shifts
            </Sidebar.Item>
            <Sidebar.Item>
                Leaves
            </Sidebar.Item>
        </Sidebar>
    )
}
