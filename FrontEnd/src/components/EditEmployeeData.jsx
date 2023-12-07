// How will i get/retrieve the data and display in a form for editing
import client from "../axiosURL"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState , useEffect} from "react"
import { ProfileSection } from "./editEmployeeInputs/ProfileSection"
import { AddressPortion } from "./editEmployeeInputs/AddressPortion"
import { ContactPortion } from "./editEmployeeInputs/ContactPortion"
import { employeeRegisterSchema } from "../yupSchema"
import {useForm} from 'react-hook-form'
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"

const EditEmployeeForm = ({id})=>{
    const {handleSubmit, register, control, reset, formState:{errors}} = useForm(
        {resolver: yupResolver(employeeRegisterSchema)}
    )
    const [empData,setEmpdata] = useState([])
    const fields = {register,control,errors, empData}

    useEffect(() => {
        client.get(`employee/` + id)
        .then(res => setEmpdata(res.data))
        .then(console.log(empData))
        .catch(err => console.log(err))
    }, [])
    
    const submit = result=>{
        let data = result;
        data.profileImage = data.profileImage[0]
        (data)
        client.put(`employee/${id}`,data,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }.then(res=>{
                res.status === 200 ? reset() : alert("Something went Wrong");
            })
        })
    }

    return (
        <>
            <div className="relative">
                <form onSubmit={handleSubmit(submit)}>
                    <ProfileSection {...fields}/>
                    <AddressPortion {...fields}/>
                    <ContactPortion {...fields}/>
                    <Button className="text-text border-b-2 border-accent/20 rounded-md bg-primary absolute end left-0" color='green' type='submit'>Update</Button>
                    <Link to={'/dashboard'}>
                        <Button className="text-text border-b-2 border-accent/20 rounded-md bg-primary absolute end right-0" color='red'>Back</Button>
                    </Link>
                </form>
            </div>
        </>
    )
}
export default EditEmployeeForm
