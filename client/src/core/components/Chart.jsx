import React from "react";
import { observer } from "mobx-react";
import { ChartTemplate } from "themes/core/components";

const Chart = observer((props) => {
    return (
        <ChartTemplate {...props}/>
    )
})

export default Chart;