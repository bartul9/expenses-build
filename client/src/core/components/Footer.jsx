import React from "react";
import { observer } from "mobx-react";
import { FooterTemplate } from "themes/core/components";

const Footer = observer((props) => {
    return (
        <FooterTemplate {...props}/>
    )
})

export default Footer;