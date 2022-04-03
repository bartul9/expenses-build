import React from "react";
import { inject } from "mobx-react";
import { UserEditTemplate } from "themes/platform/user/pages";
import { UserEditStore } from "../stores";

const UserEdit = inject("rootStore")(({ rootStore, cancel }) => {
    const userEditStore = new UserEditStore(rootStore);
    return (
        <UserEditTemplate cancel={cancel} userEditStore={userEditStore}/>
    )
});

export default UserEdit;