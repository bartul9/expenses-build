import React, { useState } from "react";
import { observer } from "mobx-react";
import TextField from '@mui/material/TextField';
import { BasicButton } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

import "styles/depositCard.css";

const VALUES = [ "Deposit", "Withdraw" ];

const DepositTemplate = observer(({ submitDeposit, cancelSubmit }) => {
    const [ deposit, setDeposit ] = useState(0);
    const [ type, setType ] = useState("Deposit");

    return (
        <div className="deposit--container">
            <DialogContentText className="deposit--title">{type === "Deposit" ? "Deposit to account" : "Withdraw from account"}</DialogContentText>
            <div className="radio--buttons">
                <FormControlLabel control={<Radio size="small" onChange={() => setType(VALUES[0])} checked={type === VALUES[0]} />} label={VALUES[0]} />
                <FormControlLabel control={<Radio size="small" onChange={() => setType(VALUES[1])} checked={type === VALUES[1]} />} label={VALUES[1]} />
            </div>
            <div className="depositCard">
                <TextField
                    className="input--type--edit"
                    autoFocus
                    value={deposit}
                    type="number"
                    onChange={(e) => setDeposit(e.target.value)}
                    margin="dense"
                    id={"input " + Math.random()}
                    label="Amount"
                    // fullWidth
                    variant="standard"
                />
                <div>
                    <BasicButton variant="outlined" onClick={cancelSubmit} label="Cancel" />
                    <BasicButton disabled={deposit === 0} onClick={() => { setDeposit(0); submitDeposit(type, deposit); }} label="Submit" />
                </div>
            </div>
        </div>
    )
})

export default DepositTemplate;