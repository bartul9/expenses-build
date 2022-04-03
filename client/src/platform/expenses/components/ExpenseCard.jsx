import React from "react";
import { observer } from "mobx-react";
import { ExpenseCardTemplate } from "themes/platform/expenses/components";

const ExpenseCard = observer((props) => {
    return (
        <ExpenseCardTemplate {...props}/>
    )
})

export default ExpenseCard;