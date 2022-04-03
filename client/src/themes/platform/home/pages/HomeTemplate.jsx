import React from "react";
import { observer } from "mobx-react";

import { BasicButton, BasicInput } from "core/components";

import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import "styles/home.css";

const HomeTemplate = observer(({ homeStore }) => {
    const { rootStore: { userStore: { loginForm: form }, routerStore } } = homeStore;

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
            <div className="form">
                <form>
                    <BasicInput className="emailInput" field={form.$('email')} />
                    <BasicInput type="password" field={form.$('password')} />
                </form>
                <BasicButton className="loginUserBtn" type="submit" onClick={form.onSubmit} label="Login"/>
                <BasicButton className="createUserBtn" label="Create user" onClick={() => routerStore.goTo("createUser")} />
            </div>
            </div>
        </main>
    )
})

export default HomeTemplate;