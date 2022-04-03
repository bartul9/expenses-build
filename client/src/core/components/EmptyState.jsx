import React from "react";
import { observer } from "mobx-react";
import { EmptyStateTemplate } from "themes/core/components";

const EmptyState = observer((props) => {
    return (
        <EmptyStateTemplate {...props}/>
    )
})

export default EmptyState;