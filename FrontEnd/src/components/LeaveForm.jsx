import { Card, Label, TextInput } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import CompHeader from '../components/headerAndFooter/Header'
import CompFooter from '../components/headerAndFooter/Footer'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller } from 'react-hook-form'
const LeaveForm = ()=>{
    const {register, handleSubmit,formState :{errors},control} = useForm({
        resolver: yupResolver(leaveSchema),
    })

    const onSubmit = (data)=>{
        console.log('Leave Created',data)
    }
    return(
        <>
            <CompHeader/>
            <div className='flex justify-center items-center'>
                <Card className='max-w-sm'>
                    <h1>Create Leave</h1>
                    <form className='flex max-w-md flex-col gap-4'>
                        <div className='max-w-md'>
                            <Label htmlFor='leaves' value='Leave'/>
                            <TextInput
                                id="leave"
                                type='text'
                                placeholder='Leave Name'
                                {...register("leaveName")}
                                color={errors.leaveName ? 'failure' : ''}
                                helperText={<>{errors.leaveName? errors.leaveName.message : ''}</>}
                                />
                        </div>
                        <div className='max-w-md'>
                            <Label htmlFor='leaves' value='Leave'/>
                            <TextInput
                                id="leave"
                                type='text'
                                placeholder='Leave Name'
                                {...register("leaveName")}
                                color={errors.leaveName ? 'failure' : ''}
                                helperText={<>{errors.leaveName? errors.leaveName.message : ''}</>}
                                />
                        </div>
                        <div className='max-w-md'>
                            <Label htmlFor='leaves' value='Leave'/>
                            <TextInput
                                id="leave"
                                type='text'
                                placeholder='Leave Name'
                                {...register("leaveName")}
                                color={errors.leaveName ? 'failure' : ''}
                                helperText={<>{errors.leaveName? errors.leaveName.message : ''}</>}
                                />
                        </div>
                    </form>
                </Card>
            </div>
        </>
    )
}