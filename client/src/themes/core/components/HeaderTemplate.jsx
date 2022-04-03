import { observer } from "mobx-react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { parseMoney } from "core/utils/parseMoney";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const HeaderTemplate = observer(({ rootStore}) => {
  const { mainViewStore: { currentRoute }, userStore: { logoutUser, userFullName, currency }, balanceStore: { balance } } = rootStore;

  return (
    <Box className="Header" sx={{ flexGrow: 1}}>
      <AppBar sx={{ bgcolor: '#f7f7f7', borderBottom: "2px solid #2196f3" }} position="static">
        <Toolbar>
          {currentRoute !== "Monefy" && <ArrowBackIcon className="icon arrowIcon" onClick={rootStore.routerStore.goBack} />}
          <Typography className="headerText" component="div" sx={{ flexGrow: 1 }}>
            {currentRoute === "Monefy" ? <div className="header-title">Monify <MonetizationOnIcon style={{ color: "#2196f3", fontSize: "2rem" }} /></div> : <span>{currentRoute}</span>}
          </Typography>
            <div className="userInfo">
              <span className="headerText">
              {userFullName}
              </span>
              <span className="headerText">
               <Tooltip title="Balance"><span style={{fontStyle: "italic"}}>{parseMoney(balance, currency)}</span></Tooltip>
              </span>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{color: "#2196f3"}}
              >
              <Tooltip title="Logout"><LogoutIcon onClick={logoutUser} /></Tooltip>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
})

export default HeaderTemplate;
