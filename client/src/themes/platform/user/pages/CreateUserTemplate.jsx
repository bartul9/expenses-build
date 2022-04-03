import React from "react";
import { observer } from "mobx-react";

import { BasicDropdown, BasicInput, BasicButton } from "core/components";


const CreateUserTemplate = observer(({ userEditStore }) => {
    const { createUserForm: form, currencyDropdownStore, countriesDropdownStore } = userEditStore;

    return (
        <div className="CreateUser">
            <form>
                <div className="inputFields">
                    <BasicInput field={form.$('firstName')} />
                    <BasicInput field={form.$('lastName')} />
                </div>
                <div className="inputFields">
                    <BasicInput field={form.$('email')} />
                </div>
                <div className="inputFields">
                    <BasicInput field={form.$('password')} />
                    <BasicInput field={form.$('passwordConfirm')} />
                </div>
                <div className="inputFields">
                    <BasicDropdown store={currencyDropdownStore} />
                    <BasicDropdown store={countriesDropdownStore} />
                </div>
            </form>
            <BasicButton type="submit" onClick={form.onSubmit} label={"Create"}/>
        </div>
    )
})

export default CreateUserTemplate;