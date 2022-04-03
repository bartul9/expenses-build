import React from "react";
import { inject } from "mobx-react";

import { ExpensesTemplate } from "themes/platform/expenses/pages";
import { ExpensesStore } from "../stores";

const Expenses = inject("rootStore")(({ rootStore }) => {
    const store = new ExpensesStore(rootStore);
    return (
        <ExpensesTemplate expensesStore={store}/>
    )
});

export default Expenses;