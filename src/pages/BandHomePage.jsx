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
import MrKatNavBar from '../components/MrKatNavBar';
import { ContactCard } from '../components/Contact'

import GlobalStyles from '../GlobalStyles';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

const videoData = [
  { src: require('../images/rios/rios-wcc.mp4'), title: 'wcc @ rios'},
  { src: require('../images/rios/rios-bastard.mp4'), title: 'bastard @ rios'},
  { src: require('../images/nye/nye-toyp-2.mp4'), title: 'toyp x indigo @ nye house show'},
  { src: require('../images/mohawk/mohawk-sandbox.mp4'), title: 'sandbox @ mohawk'},
  { src: require('../images/rios/rios-teeth.mp4'), title: 'teeth @ rios'},
  { src: require('../images/mohawk/mohawk-hrsb.mp4'), title: 'hrsb x beach goons @ mohawk'},
  { src: require('../images/rios/rios-toyp.mp4'), title: 'toyp x indigo @ rios'},
  { src: require('../images/mohawk/mohawk-teeth.mp4'), title: 'teeth @ mohawk'},
];

const bandPicsData = [
  { img: require('../images/mohawk/full-band-color.jpg'), title: 'mr kat', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 2, rows: 2},
  { img: require('../images/mohawk/full-band-side.jpg'), title: 'mr kat', author: '', cols: 2, rows: 2 }, 
  { img: require('../images/mohawk/kat-growl.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/band-pics/isaac.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/band-pics/band-pic.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-k-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-k-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-k-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/i-k-v-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/j-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/j-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/j-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/j-k-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/k-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/k-v-j-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/v-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/dec-9-22/v-k-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-1.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-k-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-k-j.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-k-v.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/i-k.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-4.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-5.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-6.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-8.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j-9.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/j.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-4.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-5.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-6.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-7.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-8.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-9.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-10.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-11.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-12.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-n.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-v-2.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-v-j.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k-v.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/k.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/v-3.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/v-4.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/v-5.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/101-show/jan-20-23/v.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/mr-kat-debut/mr-kat-at-101.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/mr-kat-debut/sydney-climbing.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/nye/nye-house-show-group.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/nye/nye-house-show-setup.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/nye/nye-house-show.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/nye/nye-pic.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/nye/nye-show.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/band-pics/mr-kat-logo.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
  { img: require('../images/band-pics/mr-kat-sticker.jpg'), title: 'isaac', author: 'kat', cols: 1, rows: 1 }, 
]

const postersData = [
  { img: require('../images/posters/2023-jan-1-mohawk-poster.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 2, rows: 2 },
  { img: require('../images/posters/2022-nye-poster.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 2, rows: 2 },
  { img: require('../images/posters/2023-jan-27-rio.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 1, rows: 1 },
  { img: require('../images/posters/2022-sept-30-poster.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 1, rows: 1 },
  { img: require('../images/posters/2022-dec-9-poster.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 1, rows: 1 },
  { img: require('../images/posters/2023-jan-20-at-101.jpg'), title: 'isaac', authorUrl: "https://www.instagram.com/isaacpit97/", author: 'author', cols: 1, rows: 1 },
];

const MrKatImagesList = ({data, title, subTitle, sectionTitleId, cols}) => {
  const classes = GlobalStyles();
  console.log(data);
  const theme = useTheme();
  const isSmallerSize = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("IS SMALLER SIZE: ", isSmallerSize);
  return (
    <div className={classes.root}>
      
      <Container
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <SectionTitleText id={sectionTitleId}>{title}</SectionTitleText>
        <Box 
          align='center'
          alignItems='center'
        >
          <ImageList align='center' alignItems='center' rowHeight={300} gap={4} className={classes.imageList} cols={isSmallerSize ? 1 : cols} >
            <ImageListItem key="Subheader" cols={isSmallerSize ? 1 : cols} style={{ height: 'auto' }}>
              </ImageListItem>
              {data.map((item) => (
                <ImageListItem key={item.img} cols={isSmallerSize? 1 : (item.cols || 1)} rows={isSmallerSize ? 1 : (item.rows || 1)}>
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
        </Box>
        
      </Container>
      
    </div>
  );
}

const SectionTitleText = ({id, children}) => {
  return (
    <Typography id={id} style={{marginTop: 100, marginBottom: 20}} variant='h2' align='center'><b>{children}</b></Typography>
  )
}

const MrKatVideosList = ({data, sectionTitleId, title}) => {
  const classes = GlobalStyles();
  console.log(data);
  const theme = useTheme();
  const isSmallerSize = useMediaQuery(theme.breakpoints.down('sm'));
  console.log("IS SMALLER SIZE: ", isSmallerSize);
  return (
      <Container my={8} classes={classes.backgroundRoot} maxWidth="lg">
        {/* End hero unit */}
        <SectionTitleText id={sectionTitleId}>{title}</SectionTitleText>
        <Grid container spacing={4}>
          {data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              
                <video controls src={card.src} loading='lazy' type="video/mp4"/>
                <CardContent className={classes.cardContent} >
                  <Typography variant='caption' color='textSecondary'  sx={{p:0}}>
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}

const Footer = () => {
  const classes = GlobalStyles();
  return (
    <Container className={classes.footerContainer}>
      <Grid 
        container item
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Box my={8} mx={3}>
          <Typography variant="h6" align="center">WEBSITE BY ISAAC PITBLADO</Typography>
        </Box>
        <ContactCard
            text="Isaac's Insta"
            href="https://www.instagram.com/isaacpit97/"
            src="https://img.icons8.com/color/100/000000/instagram-new--v1.png"
          />
      </Grid>
      
      
    </Container>
  )
}

export default function BandHomePage() {
  const classes = GlobalStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MrKatNavBar />
      <Container disableGutters className={classes.gradientRoot} maxWidth='false'>
        <MrKatBioAndContact />

        <MrKatVideosList sectionTitleId='demo-section' data={videoData} title="DEMOS"/>
        <MrKatImagesList sectionTitleId='poster-section' data={postersData} title="POSTERS" cols={4}/>
        <MrKatImagesList sectionTitleId='pics-section' data={bandPicsData} title="PICS" cols={5}/>
        <Footer />
      </Container>
        {/* Hero unit */}
        
        
      </ThemeProvider>
    </React.Fragment>
  );
}