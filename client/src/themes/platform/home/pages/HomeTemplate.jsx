import React, { useState } from "react";
import { observer } from "mobx-react";

import { BasicButton, BasicInput, NotifyOutsideClick } from "core/components";
import { UserEdit } from "platform/user/pages";

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import "styles/home.css";
import "styles/expenses.css";

const HomeTemplate = observer(({ homeStore }) => {
    const [ isCreateUser, setCreateUser ] = useState(false);

    const { rootStore: { userStore: { loginForm: form } } } = homeStore;

    return (
        <main className="Home"> 
            <div className="leftHome">
                <div className="homeText">
                    <div className="homeText-title">
                        <h1>Monify</h1>
                        <MonetizationOnIcon className="home--icon" />
                    </div>
                    <p>The only expenses app you will ever need...</p>
                </div>
            </div>
            <div className="rightHome">
                {!isCreateUser ?
                 <div className="form">
                    <form>
                        <BasicInput className="emailInput" field={form.$('email')} />
                        <BasicInput type="password" field={form.$('password')} />
                    </form>
                    <BasicButton className="loginUserBtn" type="submit" onClick={form.onSubmit} label="Login"/>
                    <BasicButton className="createUserBtn" label="Create user" onClick={() => setCreateUser(true)} />
                </div> :
                <div className="actionsSlider">
                    <UserEdit cancel={() => setCreateUser(false)} />
                </div>}
            </div>
        </main>
    )
})

export default HomeTemplate;