import React from "react";
import { observer, inject } from "mobx-react";
import { HomeTemplate } from "themes/platform/home/pages";
import { HomeStore } from "platform/home/stores";

const Home = inject("rootStore")(observer(({ rootStore }) => {
    const homeStore = new HomeStore(rootStore);
    
    return (
        <HomeTemplate homeStore={homeStore}/>
    )
}))

export default Home;