import { Tabs } from "flowbite-react";
import LeavesPage from "../pages/LeavesPage";
import { FcLeave } from "react-icons/fc";

const LeaveTabs = ()=>{
    <Tabs>
        <Tabs.Item title ="Leaves" icon ={FcLeave}>
            <LeavesPage/>
        </Tabs.Item>
        <Tabs.Item title ="Form">

        </Tabs.Item>
    </Tabs>
}

export default LeaveTabs