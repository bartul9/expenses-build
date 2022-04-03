import React from "react";
import { observer } from "mobx-react";
import TableCell from '@mui/material/TableCell';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const TableBooleanCellTemplate = observer(({ align, value }) => {
    return (
        <TableCell align={align}>                    
            {value ? <Tooltip title={<span style={{ fontSize: "0.8rem" }}>Done</span>}><CheckCircleIcon className="icon active" /></Tooltip> : <Tooltip title={<span style={{ fontSize: "0.8rem" }}>In progress</span>}><CancelIcon className="icon inactive" /></Tooltip>}
        </TableCell>
    );
})

export default TableBooleanCellTemplate;