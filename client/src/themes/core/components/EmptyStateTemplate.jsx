import React from "react";
import { observer } from "mobx-react";


const EmptyStateTemplate = observer(({ icon, title = "No results", message }) => {
    return (
        <div className="emptyState">
            {title && <span>{title}</span>}
            {message && <span>{message}</span>}
            <img src={icon} alt="" />
        </div>
    )
})

export default EmptyStateTemplate;