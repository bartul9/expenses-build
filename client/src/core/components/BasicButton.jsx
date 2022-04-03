import React from "react";
import { observer } from "mobx-react";
import { BasicButtonTemplate } from "themes/core/components";

const BasicButton = observer((props) => {
    return (
        <BasicButtonTemplate {...props}/>
    )
})

export default BasicButton;