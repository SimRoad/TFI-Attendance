import UserCreate from "../components/UserCreate"
import CompHeader from "../components/Header"
import CompFooter from "../components/Footer";

const CreateUser = ()=>{
    return(
        <>
            <CompHeader/>
            <UserCreate/>
            <CompFooter/>
        </>
    )
}

export default CreateUser