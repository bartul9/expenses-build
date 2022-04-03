import React from "react";
import { observer } from "mobx-react";
import { Datepicker, BasicButton } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';

import "styles/expenses.css";

const FilterTemplate = observer(({ dateValue, setDate, filterExpenses, closeSlider, onFilterClick }) => {
    return (
        <div className="filter--container">
            <DialogContentText className="filter--title">Filter expenses</DialogContentText>
            <div className="filterCard">
                <div className="filterCard"> 
                    <Datepicker type="from" selectedDate={dateValue.from} setDate={setDate} />
                    <Datepicker type="to" selectedDate={dateValue.to} setDate={setDate} />
                </div>
                <div>
                    <BasicButton variant="outlined" className="btn" label="Cancel" onClick={closeSlider} />
                    <BasicButton onClick={onFilterClick} label="Filter" />
                </div>
            </div>
        </div>
    )
})

export default FilterTemplate;