import LoginForm from "../components/LoginForm";
import CompHeader from "../components/Header"
import CompFooter from "../components/Footer";

const loginPage = ()=>{
    return(
        <>
            <CompHeader/>
            <LoginForm/>
            <CompFooter/>
        </>
    )
}

export default loginPage