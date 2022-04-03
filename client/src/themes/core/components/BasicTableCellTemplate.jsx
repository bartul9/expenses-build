import React from "react";
import { observer } from "mobx-react";
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';

const BasicTableCellTemplate = observer(({ align, value, className, numeric = false, label, width }) => {
    return (
        <TableCell className={className} width={width} label={label} align={align} numeric={numeric.toString()}>                    
            <Tooltip followCursor arrow title={<span style={{ fontSize: "0.8rem" }}>{value}</span>}><span>{value}</span></Tooltip>
        </TableCell>
    );
})

export default BasicTableCellTemplate;