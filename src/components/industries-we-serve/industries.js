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
        <Grid item xs={12} md={6} style={{ marginTop:"0%"}}  >
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

            <a href="/at-home" className="black-link"><h2 className="centered">{page["l2title1"]}</h2></a>
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

    <div className="screen screen-3" style={{height:"fit-content"}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>
<h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>{page["topsmtext"]}</h1>

<p className="subheading content">
  <Markdown content={page["blueTopText"] } ></Markdown>
</p>

<div style={{maxWidth:"90vw",margin:"auto"}} >
  <BlueZone content = {page["paragraphs2"]}></BlueZone>

  <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>{page["blueWhiteMiddleTitle"]}</h1>

  <p className="subheading content">
    <Markdown content={page["blueWhiteMiddleText"] } ></Markdown>
  </p>
  <BlueZone content = {page["paragraphs"]}></BlueZone>

<p className="subheading content">
  
  <Markdown content = {page["blueBottomText"]} ></Markdown>
</p>

</div>
<Grid container>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={page["blimage"]} alt="delivery signature" />
</Grid>

<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={page["bcimage"]} alt="delivery signature" />
</Grid>
<Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={page["brimage"]} alt="delivery signature" />
</Grid>


</Grid>

  
</div>
<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>{page["bottomsmtext"]}</h2>


        <BeforeFooter></BeforeFooter>

    </>
  );
}

export default IndustriesWeServe;
