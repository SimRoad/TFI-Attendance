import { Tabs } from "flowbite-react";
import LeavesPage from "../pages/LeavesPage";
import { FcLeave } from "react-icons/fc";

const LeaveTabs = ()=>{
    
    return(
    <div className="overflow-y-auto max-h-[79vh] w-full">
    <Tabs>
        <Tabs.Item title ="Leaves" icon ={FcLeave}>
            <LeavesPage/>
        </Tabs.Item>
        <Tabs.Item title ="Form">
            <LeavesPage/>
        </Tabs.Item>
    </Tabs>
    </div>
    )
}

export default LeaveTabs