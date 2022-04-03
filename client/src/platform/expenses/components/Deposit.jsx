import React from "react";
import { observer } from "mobx-react";
import { DepositTemplate } from "themes/platform/expenses/components";

const Deposit = observer((props) => {
    return (
        <DepositTemplate {...props}/>
    )
})

export default Deposit;