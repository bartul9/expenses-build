import React from "react";
import { observer } from "mobx-react";
import { ConnectionLostTemplate } from "../../themes/core/pages";

const ConnectionLost = observer((props) => {
    return (
        <ConnectionLostTemplate {...props}/>
    )
})

export default ConnectionLost;