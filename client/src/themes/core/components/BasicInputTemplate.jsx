import React from "react";
import { observer } from "mobx-react";
import TextField from '@mui/material/TextField';

const BasicInputTemplate = observer(({ field, className, autoComplete = "false", onKeyPress = null, multiline = false, rows = 1, type = "" }) => {
    return (
        <div>
            <TextField 
                className={className} 
                helperText={field.error} 
                error={field.error != null} 
                required={field.rules.includes("required")} 
                {...field.bind()} 
                id={field.name}
                autoComplete={autoComplete}
                label={field.label} 
                multiline={multiline}
                rows={rows}
                type={type}
                onKeyPress={(e) => {
                    if (e.key === "Enter") {
                        onKeyPress && onKeyPress(e);
                    }
                }}
            />
        </div>
    )
})

export default BasicInputTemplate;
