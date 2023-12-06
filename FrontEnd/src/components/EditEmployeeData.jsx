// How will i get/retrieve the data and display in a form for editing
import client from "../axiosURL"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState , useEffect} from "react"
import { ProfileSection } from "./editEmployeeInputs/ProfileSection"
import { AddressPortion } from "./editEmployeeInputs/AddressPortion"
import { ContactPortion } from "./editEmployeeInputs/ContactPortion"
import { employeeRegisterSchema } from "../yupSchema"
import {useForm} from 'react-hook-form'

const EditEmployeeForm = ({id})=>{
    const {handleSubmit, register, control, reset, formState:{errors}} = useForm(
        {resolver: yupResolver(employeeRegisterSchema)}
    )
    const fields = {register,control,errors}
    const [empData,setEmpdata] = useState([])
    const empID = 1
    useEffect(() => {
        client.get(`employee/${empID}`)
        .then(res => setEmpdata(res.data))
        .then(console.log(empData))
        .catch(err => console.log(err))
    }, [])
    
    const submit = result=>{
        let data = result;
        data.profileImage = data.profileImage[0]
        (data)
        client.put(`employee/${empID}`,data,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }.then(res=>{
                res.status === 200 ? reset() : alert("Something went Wrong");
            })
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <ProfileSection {...fields} editData={empData}/>
                <AddressPortion {...fields} editData={empData}/>
                <ContactPortion {...fields} value={empData}/>
            </form>
        </>
    )
}
export default EditEmployeeForm
