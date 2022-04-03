import React from "react";
import { inject } from "mobx-react";
import { CreateUserTemplate } from "themes/platform/user/pages";
import { UserEditStore } from "../stores";

const CreateUser = inject("rootStore")(({ rootStore }) => {
    const userEditStore = new UserEditStore(rootStore);
    
    return (
        <CreateUserTemplate userEditStore={userEditStore}/>
    )
});

export default CreateUser;