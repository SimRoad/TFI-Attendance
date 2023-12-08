import { Tabs } from "flowbite-react";
import HolidayTable from "./HolidayTable";
import HolidayForm from "./HolidayForm";
import { MdEventNote } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { useState, useEffect } from "react"
import client from "../axiosURL"



const HolidayTabs = ()=>{
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
        <>
            <div className='overflow-y-auto max-h-[90vh] w-full'>
                <Tabs>
                    <Tabs.Item title ="Holiday Tabs" icon={MdEventNote}>
                        <HolidayTable/>
                    </Tabs.Item>
                    <Tabs.Item title = "Form" icon={IoCreateSharp} disabled = {avail}>
                        <HolidayForm/>
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    )
}
export default HolidayTabs