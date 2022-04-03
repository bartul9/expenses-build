import React from "react";
import { observer } from "mobx-react";

import { ExpenseEditTemplate } from "themes/platform/expenses/pages";
import { ExpenseEditStore } from "platform/expenses/stores";

const ExpenseEdit = observer(({ expensesStore, closeSlider, id }) => {
    const expenseEditStore = new ExpenseEditStore(expensesStore, id);
    
    return (
        <ExpenseEditTemplate store={expenseEditStore} closeSlider={closeSlider} />
    )
});

export default ExpenseEdit;