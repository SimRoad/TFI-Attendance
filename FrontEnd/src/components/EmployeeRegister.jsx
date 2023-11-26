import { useForm, Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { yupResolver } from '@hookform/resolvers/yup'
import {TextInput, Datepicker, Label, Button, Select, FileInput} from 'flowbite-react'
import { employeeRegisterSchema } from '../yupSchema'
import { LuMapPin } from "react-icons/lu";
import client from '../axiosURL'

const EmployeeRegisterForm = ()=>{
    const {handleSubmit, register, control, formState:{errors}} = useForm({resolver: yupResolver(employeeRegisterSchema)})
    const fields = {register,control,errors}
    const result = result=>console.log(result)
    return(
        <>
        <div>
            <form onSubmit={handleSubmit(result)}>
                <ProfileSection {...fields} />
                <AddressPortion {...fields} />
                <ContactPortion {...fields}/>
                <Button type='submit'>Submit</Button>
            </form>
            <DevTool control={control}/>
        </div>
        </>
    )
}

export const ProfileSection = ({register,control,errors})=>{
    const employeeErr = errors.employee
    return(
        <>
        <Label htmlFor="firstName1" value="First Name" />
        <TextInput 
            id='firstName1'
            {...register('employee.firstName')}
            color={employeeErr?.firstName ? 'failure' : ''}
            helperText={
                <>
                    {employeeErr?.firstName ? employeeErr?.firstName.message : ''}
                </>
            }
        />
        <Label htmlFor="middleName1" value="Middle Name" />
        <TextInput 
            id='middleName1'
            {...register('employee.middleName')}
            color={employeeErr?.middleName ? 'failure' : ''}
            helperText={
                <>
                    {employeeErr?.middleName ? employeeErr?.middleName.message : ''}
                </>
            }
        />
        <Label htmlFor="lastName1" value="Last Name" />
        <TextInput 
            id='lastName1'
            {...register('employee.lastName')}
            color={employeeErr?.lastName ? 'failure' : ''}
            helperText={
                <>
                    {employeeErr?.lastName ? employeeErr?.lastName.message : ''}
                </>
            }
        />
        <Label htmlFor="gender1" value="Gender" />
        <Select id="gender1" 
        {...register('employee.gender')} 
        color={employeeErr?.gender ? 'failure' : ''}
        helperText={
            <>
                {employeeErr?.gender ? employeeErr?.gender.message : ''}
            </>
        }
        >
            <option>--</option>
            <option>Male</option>
            <option>Female</option>
        </Select>
        <Label htmlFor="civilStatus1" value="Civil Status" />
        <Select id="civilStatus1" 
        {...register('employee.civilStatus')} 
        color={employeeErr?.civilStatus ? 'failure' : ''}
        helperText={
            <>
                {employeeErr?.civilStatus ? employeeErr?.civilStatus.message : ''}
            </>
        }
        >
            <option className='color-gray-500'>--</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Legally Separated</option>
        </Select>
        <Label htmlFor="birthDate1" value="Birth Date" />
        <Controller 
            name='employee.birthDate' 
            control={control}
            color={employeeErr?.civilStatus ? 'failure' : ''}
            helperText={
                <>
                    {employeeErr?.civilStatus ? employeeErr?.civilStatus.message : ''}
                </>
            }
            render={({field:{onChange,value}})=> (<Datepicker 
                id='birthDate1'
                placeholder='Select Date'
                selected={value}
                autoHide={true}
                onSelectedDateChanged={(date)=>onChange(date)}/>
            )}
        />
        </>
    )
}

export const AddressPortion = ({register,errors})=>{
    const addressErr = errors.address
    return(
        <>
            <Label htmlFor="street1" value="Street" />
            <TextInput 
                id='street1'
                {...register('address.street')}
                color={addressErr?.street ? 'failure' : ''}
                helperText={
                    <>
                        {addressErr?.street ? addressErr?.street.message : ''}
                    </>
                }
            />
            <Label htmlFor="barangay1" value="Barangay" />
            <TextInput 
                id='barangay1'
                {...register('address.barangay')}
                color={addressErr?.barangay ? 'failure' : ''}
                helperText={
                    <>
                        {addressErr?.barangay ? addressErr?.barangay.message : ''}
                    </>
                }
            />
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="postalCode1" value="Postal Code" />
                </div>
                <TextInput id="postalCode1" type="number" icon={LuMapPin} placeholder="12345 or 12345-6789" required />
            </div>
            <Label htmlFor="city_municipality1" value="City/Municipality" />
            <TextInput 
                id='city_municipality1'
                {...register('address.city_municipality')}
                color={addressErr?.city_municipality ? 'failure' : ''}
                    helperText={
                        <>
                            {addressErr?.city_municipality ? addressErr?.city_municipality.message : ''}
                        </>
                    }
            />
            <Label htmlFor="province1" value="Province" />
            <TextInput 
                id='province1'
                {...register('address.province')}
                color={addressErr?.street ? 'failure' : ''}
                    helperText={
                        <>
                            {addressErr?.street ? addressErr?.street.message : ''}
                        </>
                    }
            />
        </>
    )
}

export const ContactPortion = ({register,errors})=>{
    const employeeErr = errors.employee
    return(
        <>
            <Label htmlFor="contactNumber1" value="Contact Number" />
            <TextInput 
            id='contactNumber1'
            {...register('employee.contactNumber')}
            color={employeeErr?.contactNumber ? 'failure' : ''}
                helperText={
                    <>
                        {employeeErr?.contactNumber ? employeeErr?.contactNumber.message : ''}
                    </>
                }
            />
            <Label htmlFor="email1" value="Email" />
            <TextInput 
            id='email1'
            {...register('employee.email')}
            color={employeeErr?.email ? 'failure' : ''}
                helperText={
                    <>
                        {employeeErr?.email ? employeeErr?.email.message : ''}
                    </>
                }
            />
            <div id="fileUpload" className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput id="file" helperText="A profile picture is useful to confirm your are logged into your account" />
            </div>
        </>
    )
}

export default EmployeeRegisterForm