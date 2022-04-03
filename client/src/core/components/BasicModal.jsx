import React from "react";
import { observer } from "mobx-react";
import { BasicModalTemplate } from "themes/core/components";

const BasicModal = observer((props) => {
    return (
        <BasicModalTemplate {...props}/>
    )
})

export default BasicModal;