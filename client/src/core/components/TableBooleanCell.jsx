import React from "react";
import { observer } from "mobx-react";
import { TableBooleanCellTemplate } from "themes/core/components";

const TableBooleanCell = observer(({ props, value }) => {
    return (
        <TableBooleanCellTemplate {...props} value={value}/>
    )
})

export default TableBooleanCell;