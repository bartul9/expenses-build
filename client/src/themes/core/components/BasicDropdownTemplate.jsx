import React from "react";
import { observer } from "mobx-react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormHelperText } from "@material-ui/core";

const BasicDropdownTemplate = observer(({ store, className = "", field = {}, height = "56px"}) => {
    const { items, options: { dataItemValue, dataItemKey, defaultValue, label }, handleChange, selectedItem } = store;

    return (
        <div>
            <FormControl required={field.rules.includes("required")} className={className} sx={{ minWidth: 195 }}>
                <InputLabel id="dropdown">{label}</InputLabel>
                <Select
                  sx={{ height: height }}
                  labelId="dropdown"
                  id="dropdown"
                  value={field.value || selectedItem}
                  onChange={handleChange}
                  label={label}
                  error={field.error != null} 
                  required={field.rules.includes("required")}
                >
                {defaultValue && 
                  <MenuItem key={Math.random()} value={defaultValue}>
                    {defaultValue}
                  </MenuItem>}
                {items.map(i => <MenuItem key={i[dataItemValue]} value={i[dataItemKey]}>{i[dataItemValue]}</MenuItem>)}
                </Select>
                {field.error && <FormHelperText style={{ color: "red", marginLeft: 12 }}>{field.error}</FormHelperText>}
            </FormControl>
        </div>
    )
})

export default BasicDropdownTemplate;
