import React, { Component } from 'react';
import { Container, Grid, Typography, Box, Card, Paper, useTheme, useMediaQuery} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


import MrKatLogo from './MrKatLogo';
import MohawkBandPic from "../images/mohawk/full-band-color.jpg";

import '../pages/Global.css'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${MohawkBandPic})`,
    height: '1000px',
    margin: 'auto',
    padding: 16,
    display: 'flex',
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: "#424242",
    borderRadius: 20,
    width: 400,
    padding: 8,
  },
  heroCard: {
    width: 400,
    boxShadow: 0,
    borderRadius: 20,
  },
  paper: {
    // height: 400,
    width: 350,
    borderRadius: 20,
    // backgroundColor: '#1f1f33',
    background:'linear-gradient(160deg,  #111 30%, #25212f 90%)',
  },
  transparent: {
    // height: 400,
    // width: 400,
    backgroundColor: '#0000'
  },
  contactUsBox: {
    padding: "40px 0px",
    margin: 0,
    // margin: 10
  }
}));

export const ContactCard = ({href, src, alt, children, ...other}) => {
  return (
      <a className="navBarLink" href={href} target="_blank">
        {/* <div className="col d-flex flex-row justify-content-center " style={{maxHeight: "inherit"}}> */}
          <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={children ? {marginBottom: 10} : {}}
          >
            {children}
            <img style={children ? {marginLeft: 8} : {}} width="50px" height="50px" 
              src={src} 
              // src={require('../images/icons/instagram-icon.png')} 
              alt={alt}
            
            />
          </Box>
          
        {/* </div> */}
      </a>
    
  );
}

const LargeBandBannerImage = ({}) => {
  return (
    <img style={{height: 'auto'}} src={require('../images/mohawk/full-band-color.jpg')}/>
  );
}

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

const MrKatCoverBioAndContact = ({bgColor, cardColor}) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'));
  return (
      <>
      <Grid container maxWidth={false} alignItems='flex-end' justifyContent="center" className={classes.mainContainer}>
          <Grid
            item
            container
            direction="row"
              justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid 
              item
            >
              <Box mb={ !isSmall ? '500px' : 0 }>
                <Card className={classes.transparent} >
                  <Grid 
                    container item
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box mr={2}>
                      {/* add margin bottom if logo and band name get staked on cover page */}
                      <MrKatLogo marginBottom={isXSmall ? 20 : 0} width={100}/>
                    </Box>
                    
                    <WhiteTextTypography variant='h3'>
                      <b>
                        MR. KAT
                      </b>
                      
                    </WhiteTextTypography>
                    
                  </Grid>
                  
                </Card>
              </Box>
              
            </Grid>
            <Grid 
              item
              // direction="row"
              // justifyContent="center"
              // alignItems="center"
            >
              <Box p={3} className={classes.paper}>
                <WhiteTextTypography variant='h5' text='center'>We are looking to gig in the Austin, San Antonio, College Station, and Dallas area. Our band members are: Kat (vocals and guitar), Isaac (guitar), Johnny (drums), and Victor (bass). Here's some of our demos.</WhiteTextTypography>
                <Box m={4} className={classes.contactUsBox}>
                  <WhiteTextTypography variant='h4' align="center">Contact us</WhiteTextTypography>
                  <WhiteTextTypography variant='h6' align='center' color="textSecondary">Shoot us a DM on the band instagram page or email us at <b>mrkat.mp3@gmail.com</b></WhiteTextTypography>
                </Box>
                
                <Grid 
                  cols={2}
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <ContactCard
                    alt="Band Page Instagram icon"
                    href="https://www.instagram.com/mrkatband/"
                    src={require('../images/icons/instagram-icon.png')}
                  />
                  <ContactCard
                    text="Email Icon"
                    href={"mailto:mrkat.mp3@gmail.com"}  
                    src={require('../images/icons/mail.png')}
                    // style={{marginLeft: 100}}
                  />
                </Grid> 
              </Box>
              
            </Grid>
            
          </Grid>
      </Grid>
        
        
          {/* <div className="w3-card w3-padding-16	 d-flex flex-row align-items-center justify-content-center contact-card-container" style={{backgroundColor: cardColor}}> */}
        
      </>
  );
}

  export default MrKatCoverBioAndContact;