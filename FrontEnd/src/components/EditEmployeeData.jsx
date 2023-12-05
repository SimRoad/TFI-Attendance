// How will i get/retrieve the data and display in a form for editing
import { yupResolver } from "@hookform/resolvers/yup"
import client from "../axiosURL"
import { useState , useEffect} from "react"
import { ProfileSection } from "./employeeInputs/ProfileSection"
import { AddressPortion } from "./employeeInputs/AddressPortion"
import { ContactPortion } from "./employeeInputs/ContactPortion"
import { employeeRegisterSchema } from "../yupSchema"
import {useForm} from 'react-hook-form'

const EditEmployeeForm = ({id})=>{
    const {handleSubmit, register, control, reset, formState:{errors}} = useForm({resolver: yupResolver(employeeRegisterSchema)})
    const fields = {register,control,errors}
    const [empData,setEmpdata] = useState([])
    const empID = id 
    client.get(`employee/${empID}`).then(response => setEmpdata(response.data)).then(console.log(empData))
    
    const submit = result=>{
        let data = result;
        data.profileImage = data.profileImage[0]
        (data)
        client.put(`employee/${empID}`,data,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }.then(response=>{
                response.status === 200 ? reset() : alert("Something went Wrong");
            })

        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <ProfileSection {...fields} value={empData}/>
                <AddressPortion {...fields} value={empData}/>
                <ContactPortion {...fields} value={empData}/>
            </form>
        </>
    )
}
export default EditEmployeeForm
