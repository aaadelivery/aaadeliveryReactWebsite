import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-circles.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"

import BlueSection from './blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'

var data = require("../../pages.json");
var page = data["Delivery"]["overnight-delivery-services.json"];


function Overnight() {

  return ( 
    <>
    <div className="home">
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

            <h1 className="circle-h1 textLeft" style={{paddingRight:"5%"}}  >
                {page["title"] }
	        </h1>
              <p className="industries-paragraph" >
                <Markdown content = {page["subtitle"]} ></Markdown>
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
    

    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            {page["middle title"]}
        </h1>

        <p className="subheading content">
          <Markdown content = {page["middle subtitle"]} ></Markdown>
        </p>

        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            {page["middle title2"]}
        </h1>

        <Grid container>
            <Grid item xs={12} md={4}>
              <img src= {page["l2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {page["l2title1"]}
              </div>
              <div className="content ">
               <Markdown content ={page["l2content1"]}></Markdown>
              </div>
              <div className="content middle bold-inline">
                {page["l2title2"]}
              </div>
              <div className="content ">
               <Markdown content ={page["l2content2"]}></Markdown>
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <UsaMap/>
              <img src= {page["c2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {page["c2title"]}
              </div>
              <div className="content ">
               <Markdown content ={page["c2content"]}></Markdown>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              
              <img src= {page["r2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {page["r2title1"]}
              </div>
              <div className="content ">
               <Markdown content ={page["r2content1"]}></Markdown>
              </div>
              <div className="content middle bold-inline">
                {page["r2title2"]}
              </div>
              <div className="content ">
               <Markdown content ={page["r2content2"]}></Markdown>
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
     
    </div>

    <BlueSection page = {page}></BlueSection>


    <BeforeFooter></BeforeFooter>
    

  </div>
</>
  );
}

export default Overnight;
