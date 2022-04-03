import React from "react";
import { observer } from "mobx-react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicDropdownTemplate = observer(({ store, className = "", field = {}, height = "56px"}) => {
    const { items, options: { dataItemValue, dataItemKey, label, required }, handleChange, selectedItem } = store;

    return (
        <div>
            <FormControl required={required} className={className} sx={{ minWidth: 195 }}>
                <InputLabel id="dropdown">{label}</InputLabel>
                <Select
                  sx={{ height: height }}
                  labelId="dropdown"
                  id="dropdown"
                  value={field.value || selectedItem}
                  onChange={handleChange}
                  label={label}
                >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {items.map(i => <MenuItem key={i[dataItemValue]} value={i[dataItemKey]}>{i[dataItemValue]}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
})

export default BasicDropdownTemplate;
