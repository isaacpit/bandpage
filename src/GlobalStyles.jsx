import React from "react";
import { makeStyles, createTheme} from "@material-ui/core";
import BackgroundImage from "../src/images/backgrounds/asfalt-dark.png";

export const globalTheme = createTheme({
  palette: {
    background: {
      main: 'linear-gradient(177deg, #25212f  30%, #111 90%)'
    }
  },
  palette: {
    type: 'dark',
  },
});

globalTheme.typography.h6 = {
  fontSize: '1.2rem',
  // [globalTheme.breakpoints.up('sm')]: {
  //   fontSize: '2.0rem',
  // },
}



const GlobalStyles = makeStyles((theme) => ({
  appBar: {
    background:'linear-gradient(177deg, #25212f  30%, #111 90%)',
  },
  heroContent: {
    backgroundColor: globalTheme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

  },
  card: {
    // height: '600px',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    // flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  gradientRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: '100%',
    // padding: 20,
    background: globalTheme.palette.background.main,
    // opacity: 0.25
  },
  backgroundRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundPosition: 'center', 
    backgroundRepeat: 'repeat',
    backgroundImage: `url(${BackgroundImage})`,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // padding: 20,
    // background: globalTheme.palette.background.main,
  },
  imageList: {
    // width: '80%',
    // height: '200vh'
    // maxWidth: '80%',
    // overflow: 'hidden',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,4) 100%)',
  },
  imageListIcon: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
  appBarIcon: {
    marginRight: theme.spacing(2),
  },
  footerContainer: {
    margin: "80px 20px 40px",
  },
  lightCard: {
    backgroundColor: "#444f"
  }, 
}));

export default GlobalStyles;