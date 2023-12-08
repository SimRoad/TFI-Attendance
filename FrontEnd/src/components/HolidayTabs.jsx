import { Tabs } from "flowbite-react";
import HolidayTable from "./HolidayTable";
import HolidayForm from "./HolidayForm";
import { MdEventNote } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";



const HolidayTabs = ()=>{
    return(
        <>
            <div className='overflow-y-auto max-h-[79vh] w-full'>
                <Tabs>
                    <Tabs.Item title ="Holiday Tabs" icon={MdEventNote}>
                        <HolidayTable/>
                    </Tabs.Item>
                    <Tabs.Item title = "Form" icon={IoCreateSharp}>
                        <HolidayForm/>
                    </Tabs.Item>
                </Tabs>
            </div>
        </>
    )
}
export default HolidayTabs