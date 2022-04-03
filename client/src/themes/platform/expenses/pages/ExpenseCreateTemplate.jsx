import React from "react";
import { observer } from "mobx-react";
import { BasicInput, BasicCheckbox, BasicDropdown, BasicButton } from "core/components";


const ExpenseCreateTemplate = observer(({ store }) => {

    const {  form, toggleCheckbox, priorityDropdownStore } = store;

    return (
    <div className="expenseEditContainer">
        <div className="expenseEdit">
            <form>
                <BasicInput className="input--type--edit" field={form.$('name')} />
                <BasicInput className="input--type--edit" field={form.$('description')} multiline={true} rows={4} />
                <BasicInput className="input--type--edit" field={form.$('cost')} />
                <BasicDropdown className="input--type--edit" store={priorityDropdownStore} />
                <BasicCheckbox className="editCheckbox" onChange={toggleCheckbox} field={form.$('isActive')} />
            </form>
            <div>
                <BasicButton type="submit" label="Submit" onClick={form.onSubmit} />
            </div>
        </div>
    </div>
    )
})

export default ExpenseCreateTemplate;