import React from "react";
import { observer } from "mobx-react";
import { BasicInputTemplate } from "themes/core/components";

const BasicInput = observer((props) => {
    return (
        <BasicInputTemplate {...props}/>
    )
})

export default BasicInput;