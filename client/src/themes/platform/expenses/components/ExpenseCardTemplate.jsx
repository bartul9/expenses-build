import React from "react";
import { observer } from "mobx-react";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

const ExpenseCardTemplate = observer(({ expense, deleteExpense, editExpense, currency }) => {
    const { name, priority, createdAt, cost, _id } = expense;

    let priorityColor;

    switch(priority.slice(-1)) {
        case "1":
            priorityColor = "#1976d2";
            break;
        case "2":
            priorityColor = "#399ef1";
            break;
        case "3":
            priorityColor = "#69b4f1";
            break;
        default:
            priorityColor =  "black";
    }

    return (
        <div /* style={{borderBottom: "3px solid " + priorityColor}} */ className="ExpenseCard">
            <div className="nameAndActive">
                <div className="priority" >
                <Tooltip title="Priority"><span style={{backgroundColor: priorityColor}}>{priority}</span></Tooltip>
                </div>
                <Tooltip title={name}><span className="name">{name}</span></Tooltip>
            </div>
            <div className="cost-container"><Tooltip title="Cost"><span className="cost">{cost} <i>{currency}</i></span></Tooltip></div>
            <div className="editAndDeleteIcons">
                <Tooltip title="Date created"><span className="date">{createdAt}</span></Tooltip>
                <div>
                    {/* <span>{!isActive ? <Tooltip title="Done"><CheckCircleIcon className="icon active" /></Tooltip> : <Tooltip title="Not done"><CancelIcon className="icon inactive" /></Tooltip>}</span> */}
                    <Tooltip title="Edit"><EditIcon className="icon edit" onClick={() => editExpense(_id)} /></Tooltip>
                    <Tooltip title="Delete"><DeleteForeverIcon className="icon delete" onClick={() => deleteExpense(_id)} /></Tooltip>
                </div>
            </div>
        </div>
    )
})

export default ExpenseCardTemplate;