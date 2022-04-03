import React from "react";
import { observer } from "mobx-react";
import { DrawerTemplate } from "themes/core/components";

const Drawer = observer((props) => {
    return (
        <DrawerTemplate {...props}/>
    )
})

export default Drawer;