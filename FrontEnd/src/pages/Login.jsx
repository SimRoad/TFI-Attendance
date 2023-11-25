import LoginForm from "../components/LoginForm";
import CompHeader from "../components/Header"
import CompFooter from "../components/Footer";
import LoginButton from "../components/LoginButton";

const loginPage = ()=>{
    return(
        <>
            <CompHeader/>
            <LoginButton/>
            <LoginForm/>
            <CompFooter/>
        </>
    )
}

export default loginPage