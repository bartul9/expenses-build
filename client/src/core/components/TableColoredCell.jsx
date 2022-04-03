import React from "react";
import { observer } from "mobx-react";
import { TableColoredCellTemplate } from "themes/core/components";

const TableColoredCell = observer(({ props, value }) => {
    return (
        <TableColoredCellTemplate {...props} value={value} />
    )
})

export default TableColoredCell;