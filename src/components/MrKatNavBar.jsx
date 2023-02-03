import React from "react";
import { AppBar, Toolbar, Typography, makeStyles, Box, useTheme, useMediaQuery} from "@material-ui/core";
import MrKatLogo from "./MrKatLogo";
import GlobalStyles from "../GlobalStyles";
import { HashLink } from 'react-router-hash-link';
import '../pages/Global.css'
import { Link } from "react-router-dom/cjs/react-router-dom";


const MrKatNavBar = () => {
  const classes = GlobalStyles();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        {/* <CameraIcon className={classes.appBarIcon} /> */}
        <MrKatLogo width={40}  className={classes.appBarIcon} />
        
        {!isExtraSmall && 
          <Link className="navBarLink" to="/">
            <Box ml={2}>
              <Typography variant="h5" noWrap>
                <b> 
                  MR. KAT
                </b>
              </Typography> 
            </Box>
          </Link>
        }
        
        
        <HashLink className="navBarLink" smooth to="/#demo-section">
          <Box ml={1}>
            <Typography marginLeft={40} variant="h6" color="inherit" noWrap>
              DEMOS
            </Typography>
          </Box>
        </HashLink>

        <HashLink className="navBarLink" smooth to="/#poster-section">
          <Box ml={1}>
            <Typography marginLeft={40} variant="h6" color="inherit" noWrap>
              POSTERS
            </Typography>
          </Box>
        </HashLink>

        <HashLink className="navBarLink" smooth to="/#pics-section">
          <Box ml={1}>
            <Typography marginLeft={40} variant="h6" color="inherit" noWrap>
              PICS
            </Typography>
          </Box>
        </HashLink>
        
      </Toolbar>
    </AppBar>
  )
}

export default MrKatNavBar;