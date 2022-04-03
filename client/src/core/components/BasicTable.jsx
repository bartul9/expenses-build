import React from "react";
import { observer } from "mobx-react";
import { BasicTableTemplate } from "themes/core/components";

const BasicTable = observer((props) => {
    return (
        <BasicTableTemplate {...props}/>
    )
})

export default BasicTable;