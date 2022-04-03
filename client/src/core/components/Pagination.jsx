import React from "react";
import { observer } from "mobx-react";
import { PaginationTemplate } from "themes/core/components";

const Pagination = observer((props) => {
    return (
        <PaginationTemplate {...props}/>
    )
})

export default Pagination;