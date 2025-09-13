import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import {UsaMap} from "./Map.js"
import UsaStatesSelect from "./UsaStatesDropDown";
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";

import {BlueSection2} from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["Locations"]["we-are-currently-serving-all-48-states-nationwide.json"];



function Locations() {
  return (
    <>

    <div id='map-and-dropdown'>

    <Grid container  style={{marginTop:100}}>
    <h1 className="circle-text" style={{width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
      {page["title"]}
    </h1>

          <Grid item xs={12} md={3}>
          <div className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
            <Box sx={{ marginTop :{xs : 0 , md :"20vh"}}} >

              <UsaStatesSelect></UsaStatesSelect>

            </Box>
            
          </div>
              
          </Grid>
          <Grid item xs={12} md={6}>
          <div className="rounded-corners" style={{width:"90%" , margin : "auto"}}>
            <div className="us-map">
              <UsaMap></UsaMap>
            </div>
            
          </div>
              
          </Grid>
          <Grid item xs={12} md={3}>
          <div className="circle-white"
           style={{width:"90%" , margin : "auto" ,height:"fit-content"  }}>
          
            
          </div>
              
          </Grid>
    </Grid>

    </div>

    <div className="screen screen-2" style={{height:'fit-content'}}>



    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
        <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
            {page["middle title"]}
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
              <img src= {page["c2img"]}  style={{width:"80%",margin:"auto" , opacity:0}}></img>
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

    <div className="screen screen-3" style={{height:"fit-content"}}>

<div className="top-semicircle semicircle-white">
    <div className="circle-h2">

    </div>
</div>


<div style={{maxWidth:"90vw",margin:"auto"}} >

<Grid container>
<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={page["image-left"]} alt="delivery signature" />
</Grid>

<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
              <h2 style={{textAlign:"center"}} className="middle bold-inline">
                {page["pTitle"]}
              </h2>
              <div className="content ">
                <Markdown content = {page["content"]} ></Markdown>
              </div>
              <div className="content ">
                <Markdown content = {page["content 2"]} ></Markdown>
              </div>
</Grid>
<Grid item xs={12} md={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
<img style={{
      display:'block',
      width:"80%",
      margin:"auto"
     }} src={page["image-right"]} alt="delivery signature" />
</Grid>


</Grid>

<p className="subheading content">
        <Markdown   content = {page["blueBottomText"]} ></Markdown>
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

<h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}> {page["bottomsmtext"]}</h2>



</div>

      

<BeforeFooter></BeforeFooter>



    </>
  );
}

export default Locations;
