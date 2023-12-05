import DatePicker from 'react-multi-date-picker'
import {Controller, useForm} from 'react-hook-form'

const LeavesCalendar = ()=>{
    const fields = useForm()
    const submission = data=>{

    }
    return(
        <form onSubmit={fields.handleSubmit(submission)}>
            <Controller 
                control={fields.control}
                name = 'leaves'
                render={({field:{onChange,value},formState:{errors}})=>{
                    <DatePicker 
                        multiple
                        onChange={onChange}
                        value={value}
                        minDate={date.setDay(1)}
                        maxDate={nextMonth.add(1,'month').add(nextMonth.daysLeft,'days')}
                        plugins={[
                            <DatePanel
                            markFocused
                            removeButton={false}
                            />
                        ]}
                        render={<Icon/>}
                    />
                }}
            />
        </form>
    )
}