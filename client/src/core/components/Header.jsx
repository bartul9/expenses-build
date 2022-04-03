import React from "react";
import { observer } from "mobx-react";
import { HeaderTemplate } from "themes/core/components";

const Header = observer((props) => {
    return (
        <HeaderTemplate {...props}/>
    )
})

export default Header;