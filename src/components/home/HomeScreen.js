import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import home_page_top_right from '../../assets/blue-column.png';
import "../../assets/animate.css";
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'
import BeforeFooter from '../BeforeFooter';

var data = require("../../pages.json");


var home = data["home"]["reliable-same-day-delivery-courier-service.json"];



function HomeScreen() {
  console.log(data);

  return ( 
    <>
    <div className="home" style={{marginTop:"5vh"}}>
    <Grid container  style={{ marginBottom:0, height:"fit-content"}}>
          <Grid item xs={12} lg={6} style={{ paddingLeft:"5%",paddingRight:"5%"}}  >

          <h1 className="circle-h1 circle-text" style={{marginTop:0, paddingTop:"clamp(1cm,10vh,3cm)",paddingRight:"5%"}}  >
                {home["title"]}
	            </h1>

              <h4 className="circle-h4 circle-text">
                {home["subtitle"]}
              </h4>

              
          </Grid>
          <Grid item xs={0} lg={6} >
          <Box className="content" sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }} style={{  backgroundImage: `url(${home_page_top_right})`  , backgroundRepeat:"no-repeat" , backgroundPosition:"right" , backgroundSize : "auto  100%" , padding:"10vh 0 clamp(1cm,10vh,5cm)",backgroundOrigin:"border-box" , paddingTop:"clamp(1cm,10vh,3cm)" }} >

          <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{width:"80%" }}>
            <video  controls    autoPlay loop  muted style={{borderRadius:10  , width:"100%"  }}>
                      <source  src={home["video"]}   type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
          </div>

          </Box  >

              
          </Grid>

    </Grid>


    <div className="screen screen-2" style={{height:'fit-content'}}>


      <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
      <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
        {home["middle title"]}</h1>

        <p className="subheading content">
          {home[ "middle subtitle"]}
        </p>

        <Grid container>
            <Grid item xs={12} md={4}>
              <img src= {home["l2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {home["l2title"]}
              </div>
              <div className="content middle-subheader">
                {home["l2sbtitle"]}
              </div>
              <div className="content textLeft">
               <Markdown content ={home["l2content"]}></Markdown>
              </div>
              <div className="column-footer" style={{marginBottom:30}}>
                <a className="button-link speak-to-a-specialist-link" href="/speak-to-a-specialist"><button className="round-button round-button-blue">Learn More</button></a>
              </div>
            </Grid>


            <Grid item xs={12} md={4}>
              <UsaMap/>
              <img src={home["c2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {home["c2title"]}
              </div>
              <div className="content middle-subheader">
                {home["c2sbtitle"]}
              </div>

            </Grid>

            <Grid item xs={12} md={4}>
              <img src={home["r2img"]}  style={{width:"80%",margin:"auto"}}></img>
              <div className="content middle bold-inline">
                {home["r2title"]}
              </div>
              <div className="content middle-subheader">
                {home["r2sbtitle"]}
              </div>
              <div className="content textLeft" >
                <Markdown content ={home["r2content"]}></Markdown>
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
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" }}>{home["topsmtext"]}</h1>

          </div>
      </div>
      <p className="subheading content">
        <Markdown   content = {home["blueTopText"]} ></Markdown>
      </p>

      <div style={{maxWidth:"90vw",margin:"auto"}} >
      <BlueZone content = {home["paragraphs"]}></BlueZone>

      <p className="subheading content">
        <Markdown   content = {home["bottomtext"]} ></Markdown>
      </p>

    </div>
    <Grid container>
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={home["blimage"]} alt="delivery signature" />
      </Grid>
      
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={home["bcimage"]} alt="delivery signature" />
      </Grid>
      <Grid item xs={12} sm={4}  sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
      <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={home["brimage"]} alt="delivery signature" />
      </Grid>
      

    </Grid>

        
    </div>
    <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}> {home["bottomsmtext"]}</h2>


    <BeforeFooter></BeforeFooter>


  
  </div>
</>
  );
}

export default HomeScreen;
