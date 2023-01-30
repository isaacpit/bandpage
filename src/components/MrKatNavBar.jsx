import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Box} from "@material-ui/core";
import MrKatLogo from "./MrKatLogo";
import GlobalStyles from "../GlobalStyles";
import { HashLink } from 'react-router-hash-link';


const MrKatNavBar = () => {
  const classes = GlobalStyles();
  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        {/* <CameraIcon className={classes.appBarIcon} /> */}
        <MrKatLogo width={40}  className={classes.appBarIcon} />
        
        <Box ml={2}>
          <Typography variant="h6" color="inherit" noWrap>
            <b> 
              MR. KAT
            </b>
          </Typography> 
        </Box>
      
        <HashLink smooth to="/#demo-section">
          <Box ml={1}>
            <Typography marginLeft={40} variant="h6" color="inherit" noWrap>
              <b> 
                DEMOS
              </b>
            </Typography>
          </Box>
        </HashLink>

        <HashLink smooth to="/#mohawk-section">
          <Box ml={1}>
            <Typography marginLeft={40} variant="h6" color="inherit" noWrap>
              <b> 
                PICS
              </b>
            </Typography>
          </Box>
        </HashLink>
        
      </Toolbar>
    </AppBar>
  )
}

export default MrKatNavBar;