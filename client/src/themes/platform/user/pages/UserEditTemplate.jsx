import React from "react";
import { observer } from "mobx-react";

import { BasicDropdown, BasicInput, BasicButton } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';

import "styles/editUser.css";

const UserEditTemplate = observer(({ userEditStore, cancel }) => {
    const { createUserForm: form, currencyDropdownStore, countriesDropdownStore, isEdit } = userEditStore;

    return (
        <div className="edit--user--container">
            <DialogContentText style={!isEdit ? { marginLeft: "140px" } : { marginLeft: 0 }} className="edit--user--title">{isEdit ? "Edit user" : "Create user"}</DialogContentText>
        <div className="editUser">
            <form>
                <BasicInput className="input--type--edit" field={form.$('firstName')} />
                <BasicInput className="input--type--edit" field={form.$('lastName')} />
                <BasicInput className="input--type--edit" type="email" field={form.$('email')} />
                <BasicInput className="input--type--edit" type="password" field={form.$('password')} />
                <BasicInput className="input--type--edit" type="password" field={form.$('passwordConfirm')} />
                <BasicDropdown className="input--type--edit" store={currencyDropdownStore} />
                <BasicDropdown className="input--type--edit" store={countriesDropdownStore} />
            </form>
            <div className="button--group">
                <BasicButton variant="outlined" onClick={cancel} label="Cancel" />
                <BasicButton disabled={!form.changed} type="submit" onClick={form.onSubmit} label={"Submit"}/>
            </div>
        </div>
        </div>
    )
})

export default UserEditTemplate;