import { React } from "react";
import { inject, observer } from "mobx-react";

import { RouterContext, RouterView } from 'mobx-state-router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from "./core/components";

import "styles/App.css";

const App = inject("rootStore")(observer(({ rootStore }) => {
    const { viewMap, mainViewStore: { showUi } } = rootStore;

    return (
        <div className="app">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
                pauseOnHover
                />
            {showUi && <Header rootStore={rootStore} />}
            <div className="mainLayout">
                <RouterContext.Provider value={rootStore.routerStore}>
                    <RouterView viewMap={viewMap} />
                </RouterContext.Provider>
            </div>
        </div>
    );
}));

export default App;
