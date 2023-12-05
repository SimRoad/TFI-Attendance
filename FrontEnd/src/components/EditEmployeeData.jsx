// How will i get/retrieve the data and display in a form for editing
import { yupResolver } from "@hookform/resolvers/yup"
import client from "../axiosURL"
import { useState , useEffect} from "react"
import { ProfileSection } from "./employeeInputs/ProfileSection"
import { AddressPortion } from "./employeeInputs/AddressPortion"
import { ContactPortion } from "./employeeInputs/ContactPortion"

const editEmployeeForm = ({id})=>{
    const {handleSubmit, register, control, reset, formState:{errors}} = useForm({resolver: yupResolver(employeeRegisterSchema)})
    const [empData,setEmpdata] = useState([])
    const empID = id 
    client.get(`employee/${id}`).then(response => setEmpdata(response.data)).then(console.log(empData))
    
    // const submit = result=>{
    //     let data = result;
    //     client.put
    // }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <ProfileSection/>
                <AddressPortion/>
                <ContactPortion/>
            </form>
        </>
    )
}
export default editEmployeeForm
