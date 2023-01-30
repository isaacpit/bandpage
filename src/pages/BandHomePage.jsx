import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from "@material-ui/core/Box";
import { styled } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { useTheme, useMediaQuery } from '@material-ui/core';
import MrKatBioAndContact from '../components/Contact';
import MrKatLogo from '../components/MrKatLogo';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

// import { requirePropFactory } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background:'linear-gradient(177deg, #25212f  30%, #111 90%)',
  },
  appBarIcon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
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
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // padding: 20,
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '90%',
    // height: '200vh'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  imageListIcon: {
    marginRight: theme.spacing(2),
    color: 'white',
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const videoData = [
  { src: require('../images/lifePics/12-09-22-mr-kat-show/hrsb.mp4'), title: 'isaac'},
  { src: require('../images/lifePics/12-09-22-mr-kat-show/bastard.mp4'), title: 'isaac'},
  { src: require('../images/lifePics/12-09-22-mr-kat-show/ccr.mp4'), title: 'isaac'},
  { src: require('../images/lifePics/12-09-22-mr-kat-show/sandbox-love.mp4'), title: 'isaac'},
  { src: require('../images/lifePics/12-09-22-mr-kat-show/teeth.mp4'), title: 'isaac'},
  { src: require('../images/lifePics/mr-kat-debut/bastard-end.mp4'), title: 'isaac'},
];

const itemData = [
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 1, rows: 1 },
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-2.JPG'), title: 'isaac', author: 'author', cols: 1, rows: 1 }, 
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-3.JPG'), title: 'isaac', author: 'author', cols: 2, rows: 1},
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', author: 'author', cols: 1 },
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', author: 'author', cols: 2 },
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', author: 'author', cols: 1 },
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', author: 'author', cols: 1 },
  { img: require('../images/lifePics/12-09-22-mr-kat-show/i-1.JPG'), title: 'isaac', author: 'author', cols: 1 },
];


const MrKatImagesList = ({data, title}) => {
  const classes = useStyles();
  console.log(data);
  const theme = useTheme();
  const isSmallerSize = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("IS SMALLER SIZE: ", isSmallerSize);
  return (
    <div className={classes.root}>
      
      <ImageList rowHeight={300} variant='quilted' gap={4} className={classes.imageList} cols={isSmallerSize ? 1 : 5} >
        <ImageListItem key="Subheader" cols={isSmallerSize ? 1 : 5} style={{ height: 'auto' }}>
          <ListSubheader component="h1">
          <Typography variant="h3" color="inherit" noWrap>
            {title}
          </Typography>
          </ListSubheader>
        </ImageListItem>
        {data.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img src={item.img} alt={item.title} loading='lazy' />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton target="_blank" href={item.authorUrl || ""} aria-label={`info about ${item.title}`} className={classes.imageListIcon} >
                  <CameraAltIcon className={classes.imageListIcon} />
                </IconButton>
              }
              position="top"
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
          
          
        ))}
      </ImageList>
    </div>
  );
}

const MrKatVideosList = ({data, title}) => {
  const classes = useStyles();
  console.log(data);
  const theme = useTheme();
  const isSmallerSize = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("IS SMALLER SIZE: ", isSmallerSize);
  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              
                <video controls src={card.src} loading='lazy' type="video/mp4"/>
                <CardContent className={classes.cardContent} >
                  <Typography variant='caption' sx={{p:0}}>
                    Heading Video Description
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default function BandHomePage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          {/* <CameraIcon className={classes.appBarIcon} /> */}
          <MrKatLogo width={40} marginRight={12}  className={classes.appBarIcon} />
          <Typography variant="h6" color="inherit" noWrap>
            <b> 
              MR. KAT
            </b>
            
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <MrKatBioAndContact />
        <MrKatVideosList data={videoData} title="Demos"/>
        <MrKatImagesList data={itemData} title="Dec 9th Show"/>
        <MrKatImagesList data={itemData} title="Dec 9th Show"/>
        
      </main>
      </ThemeProvider>
    </React.Fragment>
  );
}