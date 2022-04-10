import React from "react";
import { observer } from "mobx-react";

import { BasicDropdown, BasicInput, BasicButton, Loader } from "core/components";
import DialogContentText from '@mui/material/DialogContentText';

import "styles/editUser.css";

const UserEditTemplate = observer(({ userEditStore, cancel }) => {
    const { createUserForm: form, currencyDropdownStore, countriesDropdownStore, isEdit, loaderStore } = userEditStore;

    if (loaderStore.isLoading) return <Loader />

    return (
        <div className="edit--user--container">
            <DialogContentText style={!isEdit ? { marginLeft: "140px" } : { marginLeft: "10px" }} className="edit--user--title">{isEdit ? "Edit user" : "Create user"}</DialogContentText>
        <div className="editUser">
            <form>
                <BasicInput className="input--type--edit" field={form.$('firstName')} />
                <BasicInput className="input--type--edit" field={form.$('lastName')} />
                <BasicInput className="input--type--edit" type="email" field={form.$('email')} />
                <BasicInput className="input--type--edit" type="password" field={form.$('password')} />
                <BasicInput className="input--type--edit" type="password" field={form.$('passwordConfirm')} />
                <BasicDropdown field={form.$('currency')} className="input--type--edit" store={currencyDropdownStore} />
                <BasicDropdown field={form.$('country')} className="input--type--edit" store={countriesDropdownStore} />
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