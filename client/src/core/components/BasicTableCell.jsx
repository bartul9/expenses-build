import React from "react";
import { observer } from "mobx-react";
import { BasicTableCellTemplate } from "themes/core/components";

const BasicTableCell = observer(({ props, value }) => {
    return (
        <BasicTableCellTemplate {...props} value={value}/>
    )
})

export default BasicTableCell;