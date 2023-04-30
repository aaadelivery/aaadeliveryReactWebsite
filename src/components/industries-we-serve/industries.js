import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-circles.png';
import BlueSection from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'

var data = require("../../pages.json");
var page = data["Industries"]["industries-we-serve.json"];


function IndustriesWeServe() {


  return (
    <>
    <div className="home" >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} md={6} style={{ marginTop:"5%"}}  >
          <h1 className="circle-h1  textLeft"  >{page["title"]}</h1>
          <p className="industries-paragraph"  >
            <Markdown content = {page["subtitle"]} />
          </p>
        </Grid>
        <Grid item xs={0} md={6} >
        <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%"  }}>
                      <source  src={page["top-video"]}  type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

      </Grid>
      <h1  className="circle-h2 schedule " style={{textAlign:"center"  }}>{page["middle title"]}</h1>

      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={page["l2img"]} alt="delivery signature" />

            <a href="/same-day-delivery" className="black-link"><h2 className="centered">{page["l2title1"]}</h2></a>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
           }} src={page["c2img"]} alt="delivery signature" />
            <a href="/healthcare" className="black-link"><h2 className="centered">{page["c2title"]}</h2></a>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={page["r2img"]} alt="delivery signature" />

            <a href="/ground-transportation" className="black-link"><h2 className="centered">{page["r2title1"]}</h2></a>

           </div>
        </Grid>
        
      </Grid>


    </div>

        <BlueSection page = {page } ></BlueSection>
        <BeforeFooter></BeforeFooter>

    </>
  );
}

export default IndustriesWeServe;
