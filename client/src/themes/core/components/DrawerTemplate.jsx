import React from "react";
import { observer } from "mobx-react";
import Box from '@mui/material/Box';
import SwipeableDrawer  from '@mui/material/Drawer';


const DrawerTemplate = observer((
  { 
    store: 
      { 
        dateValue, 
        setDate,
        isDrawerOpen, 
        toggleDrawer,
        orderItemsDropdownStore, 

        queryUtility: {
          fetch,
          toggleSortDirection,
          filter: {
            sort
          }
        }
      }
  }) => {

  return (
    <div>
      <SwipeableDrawer 
          open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
          // classes={classes.paper}
          anchor={"bottom"}
          sx={{borderRadius: "20%"}}
      >
        <Box
          sx={{width:'auto', background: "#f7f7f7", color: "#3e3e42ee"}}
          role="presentation"
          onKeyDown={() => toggleDrawer(false)}
        >   
        </Box>
      </SwipeableDrawer >
    </div>
  );
})

export default DrawerTemplate;