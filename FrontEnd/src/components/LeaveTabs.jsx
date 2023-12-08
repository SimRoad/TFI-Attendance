import { Tabs } from "flowbite-react";
import LeavesPage from "../pages/LeavesPage";
import { FcLeave } from "react-icons/fc";
import LeaveTable from "./LeavesTable";
import LeaveForm from "./LeavesForm";
import { useState, useEffect } from "react"
import client from "../axiosURL"

const LeaveTabs = ()=>{
    const [position, setPosition] = useState([]);
    var avail = false

    useEffect(() => {
        client.get(`/user/auth`)
        .then(res => setPosition(res.data))
        .catch(err => console.log(err))
    }, [])
    
    if(position.position === "Management"){
        avail = true;
    }
    
    return(
    <div className="overflow-y-auto max-h-[90vh] w-full">
    <Tabs>
        <Tabs.Item title ="Leaves" icon ={FcLeave}>
            <LeavesPage/>
        </Tabs.Item>
        <Tabs.Item title ="Form" disabled = {avail}>
            {/* <LeaveForm/> */}
        </Tabs.Item>
    </Tabs>
    </div>
    )
}

export default LeaveTabs