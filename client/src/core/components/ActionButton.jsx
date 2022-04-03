import React from "react";
import { observer } from "mobx-react";
import { ActionButtonTemplate } from "themes/core/components";

const ActionButton = observer((props) => {
    return (
        <ActionButtonTemplate {...props}/>
    )
})

export default ActionButton;