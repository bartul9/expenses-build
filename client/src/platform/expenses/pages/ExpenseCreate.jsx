import React from "react";
import { inject } from "mobx-react";

import { ExpenseCreateTemplate } from "themes/platform/expenses/pages";
import { ExpenseEditStore } from "platform/expenses/stores";

const ExpenseCreate = inject("rootStore")(({ rootStore }) => {
    const expenseEditStore = new ExpenseEditStore(rootStore);
    
    return (
        <ExpenseCreateTemplate store={expenseEditStore}/>
    )
});

export default ExpenseCreate;