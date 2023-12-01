import Header from "../components/headerAndFooter/Header";
import WebSideBar from "../components/SideBar";
import { Outlet, Route, Routes as Routers } from "react-router-dom";
import CompFooter from "../components/headerAndFooter/Footer";

const dashboard = ()=>{
    return(
        <>  
            <Header/>
            <div className="grid grid-flow-col h-auto-max">
                <WebSideBar/>
                <div className="w-full"><Outlet/></div>
            </div>
            <CompFooter/>
        </>
    )
}

export default dashboard