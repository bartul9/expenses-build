import React from "react";
import { observer } from "mobx-react";


const InfoCardTemplate = observer(({ data: { icon, name, value, from, to, color }, currency }) => {
    return (
        <div className="card">
            <div className="title">{name}</div>
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div  className="features">
              <ul>
                <li><span className="txt--type--money" style={{ fontSize: "1rem" }}>{value}</span></li>
              </ul>
            </div>
        </div>
    )
})

export default InfoCardTemplate;