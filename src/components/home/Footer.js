import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CertificationsPopover from "./certifications";
import {Link} from "react-router-dom";
function Footer() {

  return (
    <>
        <div className="footer" style={{height:"fit-content" , paddingBottom:20}}>

            <Container maxWidth="xl" disableGutters  style={{ padding:30}}>
                <Grid container spacing={1} alignContent="center">
                    <Grid item xs={12} sm={12} md = {2.5} alignItems="center" style={{ padding:10}}>

                        <div>
                            <img src={require('../../assets/new-logo-white.png')}  style={{width:"80%" ,display:"block"  , marginBottom : "50px" , marginTop:-13 }}></img>
                        </div>
                        <p className="content" style={{textAlign:"left"}}>
                            In the world of logistics, where most situations require timeliness, AAA is a must-have option to stay ahead of the competition.
                        </p>

                        <CertificationsPopover></CertificationsPopover>

                        
                    </Grid>
                    <Grid item xs={0} sm={0} md={0.5} sx={{display:{sm:'none',md:'block'}}}  >
                                <div style={{width:"100%"}}>
                                </div>
                               
                    </Grid>
                    <Grid item xs={12} sm={6} md = {2}  >
                                <div className="footer-col-header">
                                    Our services
                                </div>
                                <ul>
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/what-we-offer"> What we offer</Link>
                                    </li>
                                    <li>
                                    <Link to="/how-it-works">How it works</Link>
                                    </li>
                                    <li>
                                    <Link to="/industries-we-serve">Industries</Link>
                                    </li>
                                    <li>
                                    <Link to="/locations">Our locations</Link>
                                    </li>
                                    
                                </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md = {2}  >
                                <div className="footer-col-header">
                                    Industries
                                </div>
                                <ul>
                                    <li>
                                    <Link to="/healthcare">Healthcare</Link>
                                    </li>
                                    <li>
                                    <Link to="/ground-transportation">Freight</Link>
                                    </li>
                                    <li>
                                    <Link to="/at-home">At Home</Link>
                                    </li>

                                </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md = {2} style={{padding:5}}>
                                <div className="footer-col-header">
                                Our Company
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About Us</Link>
                                    </li>
                                    <li>
                                        Careers
                                    </li>
                                    <li>
                                        Drive for us
                                    </li>
                                    <li>
                                        <Link to="/carriers">Carriers</Link>
                                    </li>
                                    <li>
                                        <Link to="/locations">Our locations</Link>
                                    </li>
                                </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md = {3} style={{padding:5}}>
                                <div className="footer-col-header">
                                    Contact Us
                                </div>
                                <ul>
                                    <li>
                                        <Link to="/speak-to-a-specialist">Speak to a Specialist</Link>
                                    </li>
                                    <li>
                                        <a to="mailto:info@aaadeliveryservice.com">info@aaadeliveryservice.com</a>
                                    </li>
                                    <li>
                                        <a href="tel:1844 AAA-0206">1844 AAA-0206</a>
                                        
                                    </li>
                                    <li>
                                        2101 Terminal Road
                                        <br />
                                        Fort Worth, Texas 76106
                                    </li>
                                </ul>
                    </Grid>
                </Grid>
                <hr style={{color:"white"}}></hr>

            <div style={{color:"white",fontSize:"1.5vw",display:"flex",justifyContent:"center"}}>
            <img src={require('../../assets/planet.png')}  style={{width:"2vw" ,display:"inline-block" }}></img>

                Copyright 2021 AAA Delivery Service. All Rights Reserved.

                
             </div>
             <br/>
             <div style={{color:"white",fontSize:"1.5vw",display:"flex",justifyContent:"center"}}>
             <Link to="/privacy">Privacy policy</Link>
             </div>

            </Container>

        </div>

    </>
  );
}

export default Footer;
