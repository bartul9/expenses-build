import React from "react";
import { observer } from "mobx-react";
import { BasicInput, BasicCheckbox, BasicDropdown, BasicButton, Loader } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';

import DeleteIcon from '@mui/icons-material/Delete';

import "styles/expenseEdit.css";

const ExpenseEditTemplate = observer(({ store, closeSlider }) => {

    const { deleteExpense, form, toggleCheckbox, priorityDropdownStore, isEdit, loaderStore } = store;

    if (loaderStore.isLoading) return <Loader />

    return (
    <div className="expenseEditContainer">
        <DialogContentText className="edit--expense--title">{isEdit ? "Edit expense" : "Create expense"}</DialogContentText>
        <div className="expenseEdit">
            <form>
                <BasicInput className="input--type--edit" field={form.$('name')} />
                <BasicInput className="input--type--edit" field={form.$('description')} multiline={true} rows={4} />
                <BasicInput className="input--type--edit" field={form.$('cost')} />
                <BasicDropdown field={form.$('priority')} className="input--type--edit" store={priorityDropdownStore} />
                <BasicCheckbox className="editCheckbox" onChange={toggleCheckbox} field={form.$('isActive')} />
            </form>
            <div>
                <BasicButton variant="outlined" className="btn" label="Cancel" onClick={closeSlider} />
                {isEdit && <BasicButton color="error" className="btn" StartIcon={DeleteIcon} label="Delete" onClick={() => deleteExpense()} />}
                <BasicButton disabled={!form.changed} className="btn" type="submit" label="Submit" onClick={form.onSubmit} />
            </div>
        </div>
    </div>
    )
})

export default ExpenseEditTemplate;