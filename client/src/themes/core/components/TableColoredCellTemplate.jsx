import React from "react";
import { observer } from "mobx-react";
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';

const TableColoredCellTemplate = observer(({ align, value, className }) => {
    return (
        <TableCell className={className} align={align}>                    
            <Tooltip title={<span style={{ fontSize: "0.8rem" }}>{value}</span>}><span className={value.toLowerCase()}>{value}</span></Tooltip>
        </TableCell>
    );
})

export default TableColoredCellTemplate;