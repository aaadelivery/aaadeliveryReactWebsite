import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {UsaMap} from "./Map"
import UsaStatesSelect from "./UsaStatesDropDown";
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";

import {BlueSection2} from '../services/blue-section';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown'

import data from "../../pages.json";
var page = data["Locations"]["we-are-currently-serving-all-48-states-nationwide.json"];



function Locations() {
  return (
    <>

    <div id='map-and-dropdown' style={{}}>

    <Grid id="locations-top-grid" container  style={{marginTop:100}}>
    <h1 id="locations-title" className="circle-text" style={{width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
      {page["title"]}
    </h1>

          <Grid id="locations-usa-select-grid-item" item xs={12} md={3}>
          <div id="locations-usa-select-circle-white" className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
            <Box id="locations-usa-select-box" sx={{ marginTop :{xs : 0 , md :"20vh"}}} >

              <UsaStatesSelect id="locations-usa-states-select"></UsaStatesSelect>

            </Box>
            
          </div>
              
          </Grid>
          <Grid id="locations-map-grid-item" item xs={12} md={6}>
          <div id="locations-map-rounded-corners" className="rounded-corners" style={{width:"90%" , margin : "auto"}}>
            <div id="locations-us-map" className="us-map">
              <UsaMap id="locations-usa-map"></UsaMap>
            </div>
            
          </div>
              
          </Grid>
          <Grid id="locations-empty-grid-item" item xs={12} md={3}>
          <div id="locations-empty-circle-white" className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
          
            
          </div>
              
          </Grid>
    </Grid>

    </div>

    <div id="locations-screen-2-outer" className="screen screen-2" style={{height:'fit-content'}}>



    <div id="locations-screen-2-inner" className="screen screen-2" style={{height:'fit-content'}}>


      <Container id="locations-screen-2-container" disableGutters style={{padding:30,maxWidth:"1200px", margin:"auto"}}>
        <h1 id="locations-middle-title" style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            {page["middle title"]}
        </h1>

        <Grid id="locations-middle-grid" container>
            <Grid id="locations-middle-grid-item-1" item xs={12} md={4}>
              <img id="locations-l2img" src= {page["l2img"]}  style={{width:"80%",maxWidth:"100%",height:"auto",margin:"auto"}}></img>
              <div id="locations-l2title1" className="content middle bold-inline">
                {page["l2title1"]}
              </div>
              <div id="section-content-experience" className="content ">
               <Markdown content ={page["l2content1"]}></Markdown>
              </div>
              <div id="locations-l2title2" className="content middle bold-inline">
                {page["l2title2"]}
              </div>
              <div id="section-content-reliable" className="content ">
               <Markdown content ={page["l2content2"]}></Markdown>
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src= {page["c2img"]}  style={{width:"80%",maxWidth:"100%",height:"auto",margin:"auto" , opacity:0}}></img>
              <img src= {page["c2img"]}  style={{width:"80%",maxWidth:"100%",height:"auto",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {page["c2title"]}
              </div>
              <div id="section-content-cost-saving" className="content ">
               <Markdown content ={page["c2content"]}></Markdown>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              
              <img src= {page["r2img"]}  style={{width:"80%",maxWidth:"100%",height:"auto",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {page["r2title1"]}
              </div>
              <div id="section-content-flexible" className="content ">
               <Markdown content ={page["r2content1"]}></Markdown>
              </div>
              <div className="content middle bold-inline">
                {page["r2title2"]}
              </div>
              <div id="section-content-customer-service" className="content ">
               <Markdown content ={page["r2content2"]}></Markdown>
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>
        </Grid>
      </Container>
      
     
    </div>

    <div className="screen screen-3" style={{height:"fit-content"}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>


<div id="locations-screen-3-content-container" style={{maxWidth:"1200px",margin:"auto"}} >

<Grid id="locations-screen-3-grid" container>
<Grid id="locations-screen-3-grid-item-1" item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      maxWidth:"100%",
      height:"auto",
      margin:"auto"
     }} src={page["image-left"]} alt="delivery signature" />
</Grid>

<Grid id="locations-screen-3-grid-item-2" item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <h2 style={{textAlign:"center"}} className="middle bold-inline">
                {page["pTitle"]}
              </h2>
              <div id="locations-screen-3-content-1" className="content ">
                <Markdown content = {page["content"]} ></Markdown>
              </div>
              <div id="locations-screen-3-content-2" className="content ">
                <Markdown content = {page["content 2"]} ></Markdown>
              </div>
</Grid>
<Grid id="locations-screen-3-grid-item-3" item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      maxWidth:"100%",
      height:"auto",
      margin:"auto"
     }} src={page["image-right"]} alt="delivery signature" />
</Grid>


</Grid>

<p className="subheading content">
        <Markdown   content = {page["blueBottomText"]} ></Markdown>
</p>


</div>
<Grid id="locations-bottom-images-grid" container style={{ maxWidth: "1200px", margin: "auto" }}>
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <img style={{
            display:'block',
            width:"80%",
            maxWidth:"100%",
            height:"auto",
            margin:"auto"
           }} src={page["blimage"]} alt="delivery signature" />
      </Grid>
      
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <img style={{
            display:'block',
            width:"80%",
            maxWidth:"100%",
            height:"auto",
            margin:"auto"
           }} src={page["bcimage"]} alt="delivery signature" />
      </Grid>
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
      <img style={{
            display:'block',
            width:"80%",
            maxWidth:"100%",
            height:"auto",
            margin:"auto"
           }} src={page["brimage"]} alt="delivery signature" />
      </Grid>
      

    </Grid>

  
</div>

<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}> {page["bottomsmtext"]}</h2>



</div>

      

<BeforeFooter></BeforeFooter>



    </>
  );
}

export default Locations;