import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-circles.png';
import BlueSection from '../services/blue-section';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown'
import {BlueZone} from '../markdown'

import data from "../../pages.json";
var page = data["Industries"]["industries-we-serve.json"];


function IndustriesWeServe() {


  return (
    <>
    <div className="home" style={{ margin: "auto" }} >
      <Grid id="industries-we-serve-grid" container  justifyContent="flex-end" style={{ marginBottom: 0, height: "fit-content", maxWidth: "1400px", margin: "auto" }}>
        <Grid item xs={12} md={6} style={{ marginTop:"0%"}}  >
          <h1 id="page-title" className="circle-h1  textLeft"  >{page["title"]}</h1>
          <p className="industries-paragraph"  >
            <Markdown content = {page["subtitle"]} />
          </p>
        </Grid>
        <Grid item xs={0} md={6} >
        <Box className="content background-blue-circles" style={{ width: "100%", marginTop: "80px", backgroundImage: `url(${home_page_top_right})` }} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%" , maxWidth:"100%", height:"auto" }}>
                      <source  src={page["top-video"]}  type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

      </Grid>
      <h1  className="circle-h2 schedule " style={{textAlign:"center"  }}>{page["middle title"]}</h1>

      <Grid id="industries-middle-grid" container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={page["l2img"]} alt="delivery signature" />

            <a href={page["l2link1"]} className="black-link"><h2 className="centered">{page["l2title1"]}</h2></a>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
           }} src={page["c2img"]} alt="delivery signature" />
            <a href={page["c2link"]} className="black-link"><h2 className="centered">{page["c2title"]}</h2></a>
           </div>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"4vh auto"
        }} src={page["r2img"]} alt="delivery signature" />

            <a href={page["r2link1"]} className="black-link"><h2 className="centered">{page["r2title1"]}</h2></a>

           </div>
        </Grid>
        
      </Grid>


    </div>

    <div id="industries-screen-3" className="screen screen-3" style={{height:"fit-content"}}>

<div id="industries-top-semicircle" className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>
<h1 id="industries-topsmtext-h1" style={{width :"80%", margin:"auto",textAlign:"center" }}>{page["topsmtext"]}</h1>

<p id="industries-blue-top-text-paragraph" className="subheading content">
  <Markdown content={page["blueTopText"] } ></Markdown>
</p>

<div id="industries-blue-zone-container" style={{}} >
  <BlueZone content = {page["paragraphs2"]}></BlueZone>

  <h1 id="industries-blue-white-middle-title" style={{width :"80%", margin:"auto",textAlign:"center" }}>{page["blueWhiteMiddleTitle"]}</h1>

  <p id="industries-blue-white-middle-text-paragraph" className="subheading content">
    <Markdown content={page["blueWhiteMiddleText"] } ></Markdown>
  </p>
  <BlueZone content = {page["paragraphs"]}></BlueZone>

<p id="industries-blue-bottom-text-paragraph" className="subheading content">
  
  <Markdown content = {page["blueBottomText"]} ></Markdown>
</p>

</div>
<Grid id="industries-bottom-images-grid" container>
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
