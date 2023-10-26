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
var page = data["Healthcare"]["healthcare-courier-services.json"];


function SameDayDelivery() {


  return (
    <div className="home" >
      <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 textLeft" style={{paddingRight:"5%"}}  >
              {page["title"]}
	          </h1>

              <p className="industries-paragraph" >
                {page["subtitle"]}
              </p>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content background-blue-circles" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`}} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>

           <img style={{
            display:'block',
            width:"100%",
            margin:" auto",
            borderRadius:"clamp(10px,3%,50px)",
            boxShadow:"1px 1px 6px -2px grey",

           }} src={page["top-image"]} alt="delivery signature" />

          </div>

          </Box  >

              
          </Grid>

    </Grid>

    <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>

<Grid justifyContent="center" item xs={12} sm={4} >
  <div style={{width: '100%'}}>

   <img style={{
    display:'block',
    width:"80%",
    margin:"4vh auto"
}} src={page["l2img"]} alt="delivery signature" />

    <h2 className="centered">{page["l2title1"]}</h2>
   </div>
</Grid>
<Grid justifyContent="center" item xs={12} sm={4} >
  <div style={{width: '100%'}}>

   <img style={{
    display:'block',
    width:"80%",
    margin:"4vh auto"
   }} src={page["c2img"]} alt="delivery signature" />
    <h2 className="centered">{page["c2title"]}</h2>
   </div>
</Grid>
<Grid justifyContent="center" item xs={12} sm={4} >
  <div style={{width: '100%'}}>

   <img style={{
    display:'block',
    width:"80%",
    margin:"4vh auto"
}} src={page["r2img"]} alt="delivery signature" />

    <h2 className="centered">{page["r2title1"]}</h2>

   </div>
</Grid>

</Grid>

    <div className="screen screen-3" style={{height:"fit-content"}}>

      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>{page["topsmtext"]}</h1>

          </div>
      </div>
      <p className="subheading content">
        <Markdown content={page["blueTopText"] } ></Markdown>
      </p>

      <div style={{maxWidth:"90vw",margin:"auto"}} >
        <BlueZone content = {page["paragraphs"]}></BlueZone>

        <h1 style={{width :"80%", margin:"auto",textAlign:"center" , marginTop : "50px" }}>{page["blueWhiteMiddleTitle"]}</h1>

        <p className="subheading content">
          <Markdown content={page["blueWhiteMiddleText"] } ></Markdown>
        </p>
        <BlueZone content = {page["paragraphs2"]}></BlueZone>

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

    </div>
  );
}

export default SameDayDelivery;
