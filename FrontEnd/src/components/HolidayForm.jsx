import { Button, TextInput, Label, Textarea, Datepicker, Select, Card } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { holidaySchema } from '../yupSchema'
import { Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

const HolidayForm = () => {
    const { register, handleSubmit, formState: {errors}, control } = useForm({
        resolver: yupResolver( holidaySchema ),
    })

    const onSubmit = (data) => {
        console.log('Holiday Created', data)
    }

    return(
        <>
            
            <div className="flex justify-center items-center">
                <Card className="max-w-sm">
                    <h1 className="flex justify-center">Create Holiday</h1>
                    <form className="flex max-w-md flex-col gap-4" onSubmit={ handleSubmit(onSubmit) }>
                        <div className="max-w-md">
                            <Label htmlFor="holiday" value="Holiday" />
                            <TextInput 
                                id="holiday" 
                                type="text" 
                                placeholder="Christ-mas"
                                {...register("holidayName")}
                                color={ errors.holidayName ? 'failure' : '' } 
                                helperText={ <>{ errors.holidayName ? errors.holidayName.message : ''}</> }
                            />
                        </div>
                        <div className="max-w-md">
                                <Label htmlFor="description" value="Holiday Description" />
                                <Textarea 
                                    id="description" 
                                    placeholder="Feliz navi'dad..." 
                                    rows={4} 
                                    {...register("holidesc")}
                                    color={ errors.holidesc ? 'failure' : '' } 
                                    helperText={ <>{ errors.holidesc ? errors.holidesc.message : ''}</> }
                                />
                        </div>
                        <div className="max-w-md">
                            <Label htmlFor="holidate" value="Holiday Date" />
                            <Controller
                                name='holidate'
                                control={control}
                                color={errors.holidate ? 'failure' : ''}
                                helperText={<>
                                    {errors.holidate ? errors.holidate.message : ''}
                                </>}
                                render={({ field: { onChange, value } }) => (<Datepicker
                                    id='holidate'
                                    placeholder='Select Date'
                                    selected={value}
                                    autoHide={true}
                                    onSelectedDateChanged={(date) => onChange(date)} />
                                )}
                            />
                        </div>
                        <Button type="submit">Create Holiday</Button>
                    </form>
                </Card>
            </div>
            
        </>
    )
}

export default HolidayForm