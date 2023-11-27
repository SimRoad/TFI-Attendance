import EmployeeRegisterForm from "../components/EmployeeRegister";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/Header";
import EmployeeTable from "../components/EmployeeTable";

const dashboard = ()=>{
    return(
        <>
            <Header/>
            <LogoutButton/>
            <EmployeeRegisterForm/>
            <EmployeeTable/>
        </>
    )
}

export default dashboard