import React from "react";
import { observer } from "mobx-react";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from "@mui/material";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


const DatepickerTemplate = observer(({ type, selectedDate, className, setDate }) => {
    return (
        <div className={className}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label={type}
                    inputFormat="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={(value) => setDate(value, type)}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    );
})

export default DatepickerTemplate;
