import React from "react";
import { observer } from "mobx-react";
import { FilterTemplate } from "themes/platform/expenses/components";

const Filter = observer((props) => {
    return (
        <FilterTemplate {...props}/>
    )
})

export default Filter;