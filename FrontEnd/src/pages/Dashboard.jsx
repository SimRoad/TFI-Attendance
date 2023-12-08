import Header from "../components/headerAndFooter/Header";
import WebSideBar from "../components/SideBar";
import { Outlet, useOutletContext } from "react-router-dom";

const dashboard = () => {
    return (
        <>
            <Header/>
            <div className="flex h-auto-max w-full">
                <WebSideBar />
                <div className="flex w-full justify-center relative">
                    <Outlet context={useOutletContext()}/>
                </div>
            </div>
        </>
    )
}

export default dashboard