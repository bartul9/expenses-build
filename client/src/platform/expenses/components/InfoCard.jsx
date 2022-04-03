import React from "react";
import { observer } from "mobx-react";
import { InfoCardTemplate } from "themes/platform/expenses/components";

const InfoCard = observer((props) => {
    return (
        <InfoCardTemplate {...props}/>
    )
})

export default InfoCard;