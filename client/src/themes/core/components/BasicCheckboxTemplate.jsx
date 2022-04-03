import React from "react";
import { observer } from "mobx-react";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const BasicCheckboxTemplate = observer(({ field, className, onChange }) => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox onChange={onChange} className={className} checked={field.value} />} label={field.label} />
        </FormGroup>
    )
})

export default BasicCheckboxTemplate;