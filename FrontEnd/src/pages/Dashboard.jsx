import EmployeeRegisterForm from "../components/EmployeeRegister";
import LogoutButton from "../components/LogoutButton";
import Header from "../components/headerAndFooter/Header";
import EmployeeTable from "../components/EmployeeTable";
import ShiftForm from '../components/ShiftForm'

const dashboard = ()=>{
    return(
        <>
            <Header/>
            <LogoutButton/>
            <ShiftForm/>
            <EmployeeRegisterForm/>
            <EmployeeTable/>
        </>
    )
}

export default dashboard