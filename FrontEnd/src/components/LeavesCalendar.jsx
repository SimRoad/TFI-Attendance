import DatePicker,{DateObject} from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import Icon from 'react-multi-date-picker/components/icon'
import {Controller, useForm} from 'react-hook-form'

const LeavesCalendar = ()=>{
    const date = new DateObject()
    const nextMonth = new DateObject()
    const fields = useForm()
    const submission = data=>{
        console.log(data)
    }
    return(
        <form onSubmit={fields.handleSubmit(submission)}>
            <Controller 
                control={fields.control}
                name = 'leaves'
                render={({field:{onChange,value},formState:{errors}})=>
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
                }
            />
        </form>
    )
}

export default LeavesCalendar