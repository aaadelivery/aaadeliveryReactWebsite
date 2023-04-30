import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BlueLogo from "../../assets/logo-blue.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";
import BeforeFooter from "../BeforeFooter";
import home_page_top_right from '../../assets/blue-circles.png';
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";

import BlueSection from '../services/blue-section.js';

import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'

var data = require("../../pages.json");
var page = data["HowItWorks"]["how-it-works.json"];


function HowItWorks() {
  return (
    <>

  <div id='map-and-dropdown' >
    <Grid container  style={{marginBottom:"1vh" , padding :"0px 20px",paddingLeft :"5vw"}}>
          <Grid item xs={12} md={6}   >

          <h1 className="circle-h1 circle-text"
            style={{ marginTop:"10vh",
                    paddingTop: "11%"}}>{page["title"]}</h1>
              <h2 className="circle-h2 circle-text">
                {page["subtitle"]}
              </h2>
              <img style={{width:"25%" , display:"block",margin:"auto"}}src={page["top-image"]} alt="Blue Logo" />

                      
          </Grid>
          <Grid item xs={0} md={6} >
          <Box className="content background-blue-circles"  sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{marginBottom:"0px",  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video
             
              style={{ width: "100%" }}
              loop
               autoPlay 
              muted
              controls
            >
              <source
                src={page["top-video"]} 
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>
          <p  className="industries-paragraph"  style={{maxWidth:"70%"}}>
          <h2 className="circle-h3 "  style={{marginBottom:10}} >{page["middle title"] }</h2>
            <Markdown content = {page["middle subtitle"]  } ></Markdown>
          </p>
    </Grid>

</div>

<BlueSection page = {page}></BlueSection>

<BeforeFooter></BeforeFooter>



    </>
  );
}

export default HowItWorks;
