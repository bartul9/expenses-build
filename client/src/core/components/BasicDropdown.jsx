import React from "react";
import { observer } from "mobx-react";
import { BasicDropdownTemplate } from "themes/core/components";

const BasicDropdown = observer((props) => {
    return (
        <BasicDropdownTemplate {...props}/>
    )
})

export default BasicDropdown;