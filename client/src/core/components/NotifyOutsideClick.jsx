import React from "react";
import { observer } from "mobx-react";
import { NotifyOutsideClickTemplate } from "themes/core/components";

const NotifyOutsideClick = observer((props) => {
    return (
        <NotifyOutsideClickTemplate {...props}/>
    )
})

export default NotifyOutsideClick;