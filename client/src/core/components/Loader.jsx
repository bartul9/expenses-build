import React from "react";
import { observer } from "mobx-react";
import { LoaderTemplate } from "themes/core/components";

const Loader = observer((props) => {
    return (
        <LoaderTemplate {...props}/>
    )
})

export default Loader;