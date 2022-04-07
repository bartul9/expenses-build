import React from "react";
import { observer } from "mobx-react";
import { Datepicker, BasicButton } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import "styles/expenses.css";

const FilterTemplate = observer(({ dateValue, setDate, closeSlider, onFilterClick, resetFilter }) => {
    return (
        <div className="filter--container">
            <DialogContentText className="filter--title">Filter expenses</DialogContentText>
            <div className="filterCard">
                <div className="filterCard"> 
                    <Datepicker className="datepicker" type="from" selectedDate={dateValue.from} setDate={setDate} />
                    <Datepicker className="datepicker" type="to" selectedDate={dateValue.to} setDate={setDate} />
                </div>
                <div>
                    <BasicButton variant="outlined" className="btn" label="Cancel" onClick={closeSlider} />
                    <BasicButton variant="outlined" StartIcon={RestartAltIcon} className="btn" label="Reset" onClick={resetFilter} />
                    <BasicButton onClick={onFilterClick} label="Filter" />
                </div>
            </div>
        </div>
    )
})

export default FilterTemplate;