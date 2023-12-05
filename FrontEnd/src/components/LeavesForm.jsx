import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import CompHeader from './headerAndFooter/Header'
import CompFooter from './headerAndFooter/Footer'
import { yupResolver } from '@hookform/resolvers/yup'

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
                    <form className='flex max-w-md flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
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
                            <Label htmlFor='duration' value='Leave Duration'/>
                            <TextInput
                                id="Duration"
                                type='text'
                                placeholder='Duration'
                                {...register("leaveDuration")}
                                color={errors.leaveDuration ? 'failure' : ''}
                                helperText={<>{errors.leaveDuration? errors.leaveDuration.message : ''}</>}
                                />
                        </div>
                        <div className='max-w-md'>
                            <Label htmlFor='leaveDesc' value='Leave Description'/>
                            <Textarea
                                id="leaveDesc"
                                placeholder="Description"
                                rows={4}
                                {...register("leaveDesc")}
                                color={errors.leaveDesc ? 'failure' : ''}
                                helperText={<>{errors.leaveDesc? errors.leaveDesc.message : ''}</>}
                                />
                        </div>
                        <Button type='submit'>Create Leave</Button>
                    </form>
                </Card>
            </div>
            <CompFooter/>
        </>
    )
}

export default LeaveForm