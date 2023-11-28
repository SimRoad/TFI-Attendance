import DatePicker,{DateObject} from 'react-multi-date-picker'
import DatePanel from 'react-multi-date-picker/plugins/date_panel'
import TimeRange from './TimeRange'
import Weekends from "react-multi-date-picker/plugins/highlight_weekends"
import Icon from 'react-multi-date-picker/components/icon'

const MultiDatePicker = ({value,onChange,register})=>{
    const date = new DateObject()
    const nextMonth = new DateObject()
    return(
        <DatePicker 
            multiple
            value={value}
            onChange={onChange}
            minDate={date.setDay(1)}
            maxDate={nextMonth.add(1,'month').add(nextMonth.daysLeft,'days')}
            plugins={[
                <DatePanel
                markFocused
                removeButton={false}
                />,
                Weekends()
            ]}
            render={<Icon/>}
        >
            <TimeRange register={register}/>
        </DatePicker>
    )
}

export default MultiDatePicker