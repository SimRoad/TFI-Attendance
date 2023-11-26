import EmployeeRegisterForm from "../components/EmployeeRegister";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/Header";

const dashboard = ()=>{
    return(
        <>
            {/* <Header/> */}
            <LogoutButton/>
            <EmployeeRegisterForm/>
        </>
    )
}

export default dashboard