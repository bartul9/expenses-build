import React from "react";
import { observer } from "mobx-react";
import { DatepickerTemplate } from "themes/core/components";

const Datepicker = observer((props) => {
    return (
        <DatepickerTemplate {...props}/>
    )
})

export default Datepicker;