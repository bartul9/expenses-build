import React from "react";

const NotifyOutsideClickTemplate = ({ children, onOutsideClick }) => {
    return (
        <div className="outsideOverlay" onClick={(e) => {
            if (e.target.className === "outsideOverlay") {
                onOutsideClick();
            }
        }}>
            {children}
        </div>
    );
}

export default NotifyOutsideClickTemplate;