import React from "react";
import { observer } from "mobx-react";
import Button from '@mui/material/Button';


const BasicButtonTemplate = observer(({ className, disabled, EndIcon = "", StartIcon = "", onClick, label, color = "", variant = "contained" }) => {
    return (
        <Button 
            sx={{margin: "5px"}}
            className={className} 
            onClick={onClick}
            variant={variant}
            color={color}
            disabled={disabled}
            startIcon={StartIcon ? <StartIcon/> : ""}
        >
            {label}
        </Button>
    )
})

export default BasicButtonTemplate;