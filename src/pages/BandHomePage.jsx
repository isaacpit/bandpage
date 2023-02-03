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
import { Link } from 'react-router-dom';
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
import MrKatCoverBioAndContact from '../components/Contact';
import MrKatLogo from '../components/MrKatLogo';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import MrKatNavBar from '../components/MrKatNavBar';
import { ContactCard } from '../components/Contact'

import GlobalStyles, {globalTheme} from '../GlobalStyles';

import './Global.css'


const author_oci = {
  authorUrl: "https://www.instagram.com/o_ci/",
  author: "oci"
}

const author_jake = {
  authorUrl: "https://www.instagram.com/jakesnaake1/",
  author: "jakesnaake1"
}

const author_mrkat = {
  authorUrl: "https://www.instagram.com/mrkatband/",
  author: "mrkatband"
}

const author_beth = {
  authorUrl: "https://www.instagram.com/isaacpit97/",
  author: "junkdrawerbybeth"
}

const author_elianna = {
  authorUrl: "https://www.instagram.com/eliannasart/",
  author: "eliannasart"
}

const author_emma = {
  authorUrl: "https://www.instagram.com/isaacpit97/",
  author: "emma"
}

const videoData = [
  { src: require('../images/vids/rios-wcc.mp4'), title: 'wcc @ rios'},
  { src: require('../images/vids/rios-bastard.mp4'), title: 'bastard @ rios'},
  { src: require('../images/vids/nye-toyp-2.mp4'), title: 'toyp x indigo @ nye house show'},
  { src: require('../images/vids/mohawk-sandbox.mp4'), title: 'sandbox @ mohawk'},
  { src: require('../images/vids/rios-teeth.mp4'), title: 'teeth @ rios'},
  { src: require('../images/vids/mohawk-hrsb.mp4'), title: 'hrsb x beach goons @ mohawk'},
  { src: require('../images/vids/rios-toyp.mp4'), title: 'toyp x indigo @ rios'},
  { src: require('../images/vids/mohawk-teeth.mp4'), title: 'teeth @ mohawk'},
];

const postersData = [
  { img: require('../images/posters/2023-jan-22-mohawk-poster.jpg'), title: undefined, ...author_beth, cols: 2, rows: 2 },
  { img: require('../images/posters/2022-nye-poster.jpg'), title: undefined, ...author_elianna, cols: 2, rows: 2 },
  { img: require('../images/posters/2023-jan-27-rio.jpg'), title: undefined, ...author_elianna, cols: 1, rows: 1 },
  { img: require('../images/posters/2022-sept-30-poster.jpg'), title: undefined, ...author_elianna, cols: 1, rows: 1},
  { img: require('../images/posters/2022-dec-9-poster.jpg'), title: undefined, ...author_emma, cols: 1, rows: 1 },
  { img: require('../images/posters/2023-jan-20-at-101.jpg'), title: undefined, ...author_beth, cols: 1, rows: 1 },
];

const bandPicsData = [
  
  { img: require('../images/mohawk/full-band-color.jpg'), title: undefined, ...author_oci, cols: 2, rows: 2},
  { img: require('../images/mohawk/full-band-side.jpg'), title: undefined, ...author_oci, cols: 2, rows: 2 }, 
  { img: require('../images/mohawk/kat-growl.jpg'), title: undefined, ...author_oci, cols: 1, rows: 2 }, 

  { img: require('../images/101-show/jan-20-23/i-k-j.jpg'), title: undefined, cols: 1, rows: 1 , ...author_jake},   
  { img: require('../images/101-show/dec-9-22/j-3.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake}, 
  { img: require('../images/101-show/jan-20-23/v-4.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake}, 
  { img: require('../images/101-show/jan-20-23/i-1.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake}, 
  { img: require('../images/101-show/jan-20-23/k-v.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake}, 
  
  { img: require('../images/101-show/dec-9-22/k-v-j-1.jpg'), title: undefined, cols: 2, rows: 2, ...author_jake }, 
  { img: require('../images/101-show/jan-20-23/v-5.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake }, 
  { img: require('../images/101-show/jan-20-23/j-3.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake }, 
  { img: require('../images/101-show/dec-9-22/i-2.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake }, 

  { img: require('../images/101-show/jan-20-23/i-k.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake},
  { img: require('../images/101-show/jan-20-23/j.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake }, 
  { img: require('../images/mr-kat-debut/mr-kat-at-101.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake }, 
  { img: require('../images/band-pics/mr-kat-sticker.jpg'), title: undefined, cols: 1, rows: 1, ...author_mrkat }, 
  { img: require('../images/101-show/jan-20-23/k-11.jpg'), title: undefined, cols: 1, rows: 1, ...author_jake},
  
  { img: require('../images/101-show/jan-20-23/i-k-v.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake}, 
  { img: require('../images/101-show/jan-20-23/j-4.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake}, 
  { img: require('../images/101-show/dec-9-22/i-k-1.jpg'), title: undefined, cols: 2, rows: 2, ...author_jake}, 
  { img: require('../images/101-show/jan-20-23/v.jpg'), title: undefined, cols: 1, rows: 2, ...author_jake },   

  // { img: require('../images/101-show/dec-9-22/i-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-12.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/nye/nye-house-show.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/v-2.jpg'), title: 'isaac', cols: 1, rows: 1 },
  // { img: require('../images/101-show/dec-9-22/k-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/j-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/v-3.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/i-k-v-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/i-k-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/i-k-3.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/j-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/j-k-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/v-k-1.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/i-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/i-k-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/j-5.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/j-6.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/j-8.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/j-9.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-3.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-4.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-10.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-n.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-v-j.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/j-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/nye/nye-show.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-v-2.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/mr-kat-debut/sydney-climbing.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/nye/nye-house-show-group.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/nye/nye-house-show-setup.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-5.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-6.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-7.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-8.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/jan-20-23/k-9.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/101-show/dec-9-22/i-3.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/band-pics/isaac.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
  // { img: require('../images/band-pics/band-pic.jpg'), title: 'isaac', cols: 1, rows: 1 },  
  // { img: require('../images/nye/nye-pic.jpg'), title: 'isaac', cols: 1, rows: 1 }, 
]

const MrKatImagesList = ({data, title, regularRowHeight, smallRowHeight, subTitle, sectionTitleId, smallCols, cols}) => {
  const classes = GlobalStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
          <ImageList align='center' alignItems='center' rowHeight={isMobile ? smallRowHeight : regularRowHeight} gap={12} className={classes.imageList} cols={isMobile ? smallCols : cols} >
              <ImageListItem key="Subheader" cols ={isMobile ? smallCols : cols} style={{ height: 'auto' }}>
              </ImageListItem>
              {data.map((item) => (
                <ImageListItem key={item.img} cols={isMobile? 1 : (item.cols || 1)} rows={isMobile ? 1 : (item.rows || 1)}>
                  {/* let image handle unless we want full height */}
                  <img src={item.img} alt={item.title} loading='lazy' />
                  <ImageListItemBar

                    actionIcon={
                      <Box 
                        item
                        display="flex"
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        // spacing={4}
                        style={{marginLeft: 4, padding: 4}}
                        className={classes.photoCredsButton}
                        >
                        <IconButton className="photoCredsButton" style={{margin:0, padding: "8px 8px", borderRadius: 4}} alignItems="center" justifyContent="center" target="_blank" href={item.authorUrl || ""} aria-label={`info about ${item.title}`} >
                            <CameraAltIcon style={{margin:0}} className={classes.imageListIcon} />
                            <Typography className="photoCredsText" style={{margin: "0px 8px"}} variant='body2' color='textSecondary' >{"@" + item.author}</Typography>    
                        </IconButton>  
                        
                      </Box>
                    }

                    title={<Typography align="right" variant="body1">{item.title}</Typography>}
                    // subtitle={"@" + item.author}
                    position="bottom"
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

const SectionTitleText = ({id, children, variant, marginTop, marginBottom}) => {
  return (
    <Typography id={id} style={{marginTop: marginTop ? marginTop : 100, marginBottom: marginBottom ? marginBottom : 20}} variant={variant ? variant : 'h2'} align="center"><b>{children}</b></Typography>
  )
}

const MrKatVideosList = ({data, sectionTitleId, title}) => {
  const classes = GlobalStyles();
  const theme = useTheme();
  const isSmallerSize = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <Container my={8} classes={classes.backgroundRoot} maxWidth="lg">
        {/* End hero unit */}
        <SectionTitleText marginTop={20} id={sectionTitleId}>{title}</SectionTitleText>
        <Grid container spacing={8}>
          {data.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
              
                <video controls src={card.src} loading='lazy' type="video/mp4"/>
                <CardContent className={classes.cardContent} >
                  <Typography variant='body' color='textSecondary'  sx={{p:0}}>
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
        container 
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
      >

        
        <ContactCard
            text="Isaac's Insta"
            href="https://www.instagram.com/isaacpit97/"
            src={require('../images/icons/instagram-icon.png')}
            // style={{margin: "20px 8px"}}
        >
          <Typography variant="h6" align="center">Website by <b>ISAAC PITBLADO</b></Typography>
        </ContactCard>
        
      </Grid>
      <Typography variant="h6" align="center" className="navBarLink" style={{marginTop: 20, color: "#888c"}}>Icons by <Link className="navBarLink" target="_blank" href="https://icons8.com">Icons8</Link></Typography>
      
    </Container>
  )
}

const DemosButton = ({href, label, iconSrc, ...otherProps}) => {
  const classes = GlobalStyles();

  return (
    <Card className={`demoButton ${classes.lightCard}`} {...otherProps}>
      <Link className="navBarLink demoButton" target="_blank" href={href}>
        <Box  
          item
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          display="flex"
          style={{padding: "20px 40px"}}
        >
            <SectionTitleText variant="h5" marginTop={10} marginBottom={10}>{label}</SectionTitleText>  
            <img style={{marginLeft: 20}} height={80} width={80} src={iconSrc}/>
          </Box>
      </Link>
    </Card>
  )

}

const DemosSection = ({sectionTitleId}) => {
  const classes = GlobalStyles();

  return (
    <Container 
      my={8}  style={{margin: "20px 0px", maxWidth: "100%"}} classes={classes.backgroundRoot} 
      cols={2}
      sm={1}
      
    >
      <SectionTitleText id={sectionTitleId} marginTop={20}>DEMOS</SectionTitleText>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        display="flex"
        width="100%"
        spacing={2}
        sm={12}
      >
        <Grid item>
          <DemosButton label="DEMO LINK" iconSrc={require('../images/icons/google-drive.png')} href="https://drive.google.com/drive/folders/1pAB-OROGAbzrvcHXqlT7NMET4XGsrdHX?usp=sharing" />
        </Grid>
        <Grid item>
          <DemosButton label="BAND INSTA" iconSrc={require('../images/icons/instagram-icon.png')} href="https://instagram.com/mrkatband" />
        </Grid>

      </Grid>
      
    </Container>
  )
}

export default function BandHomePage() {
  const classes = GlobalStyles();

  return (
    <React.Fragment>
      <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <MrKatNavBar />
      <Container disableGutters className={classes.gradientRoot} maxWidth='100%'>        
        <MrKatCoverBioAndContact />
        <DemosSection sectionTitleId="demo-section"/>
        <MrKatVideosList sectionTitleId='vids-section' data={videoData} title="VIDS"/>
        <MrKatImagesList sectionTitleId='poster-section' regularRowHeight={300} smallRowHeight={200} data={postersData} title="POSTERS" smallCols={2} cols={4}/>
        <MrKatImagesList sectionTitleId='pics-section' regularRowHeight={200} smallRowHeight={200} data={bandPicsData} title="PICS" smallCols={2} cols={5}/>
        <Footer />
      </Container>
        {/* Hero unit */}
        
        
      </ThemeProvider>
    </React.Fragment>
  );
}