import { Button, TextInput, Label, Textarea, Datepicker, Select } from 'flowbite-react'

const HolidayForm = () => {
    return(
        <>
            <form className="flex max-w-md flex-col gap-4">
                <div className="max-w-md">
                    <Label htmlFor="holiday" value="Holiday" />
                    <TextInput id="holiday" type="text" placeholder="Christ-mas" required shadow />
                </div>
                <div className="max-w-md">
                        <Label htmlFor="description" value="Holiday Description" />
                        <Textarea id="description" placeholder="Feliz navi'dad..." required rows={4} />
                </div>
                <div className="max-w-md">
                    <Label htmlFor="holidate" value="Holier Than thou Date" />
                    <Datepicker id="holidate" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Label htmlFor="holidaytype" value="Holiday Type" />
                    <Select
                        id="holidaytype"
                    >
                        <option>---</option>
                        <option value="special">Special</option>
                        <option value="regular">Regular</option>
                    </Select>
                </div>
                <Button type="submit">Create Holiday</Button>
            </form>
        </>
    )
}

export default HolidayForm