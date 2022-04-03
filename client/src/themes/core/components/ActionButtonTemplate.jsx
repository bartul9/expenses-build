import * as React from 'react';
import Fab from '@mui/material/Fab';
import { Tooltip } from '@mui/material';

function ActionButtonTemplate({ className, Icon, onClick, size = "small", title = "", color = "#2196f3" }) {
  return (
      <Tooltip title={title}>
          <div className="actionButton" onClick={onClick}>
                <Fab style={{ backgroundColor: color, color: "#f7f7f7", zIndex: 100000 }} size={size} aria-label="add">
                    <Icon />
                </Fab>
            </div>
      </Tooltip>
  );
}
export default ActionButtonTemplate;