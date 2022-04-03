import React from "react";
import { observer } from "mobx-react";
import { BasicCheckboxTemplate } from "themes/core/components";

const BasicCheckbox = observer((props) => {
    return (
        <BasicCheckboxTemplate {...props}/>
    )
})

export default BasicCheckbox;