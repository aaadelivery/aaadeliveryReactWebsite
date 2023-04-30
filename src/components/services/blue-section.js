import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Markdown from '../markdown.js'
import {BlueZone2 , BlueZone} from '../markdown.js'



export default function BlueSection(props){
    var page = props.page;
    return <>
    

    <div className="screen screen-3" style={{height:"fit-content"}}>


      <div className="top-semicircle semicircle-white">
          <div className="circle-h2">
          <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" }} > { page["topsmtext"] } </h2>
          </div>
      </div>
      <p className="subheading content">
        {page["blueTopText"].length > 50 && <Markdown   content = {page["blueTopText"]} ></Markdown> }
        {page["blueTopText"].length <= 50 && <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" }} > { page["blueTopText"] } </h2>}
        
      </p>

      <div style={{maxWidth:"90vw",margin:"auto"}} >
      <BlueZone content = {page["paragraphs"]}></BlueZone>

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

    
        </>
}

export function BlueSection2(props){
  var page = props.page;
  return <>
  

  <div className="screen screen-3" style={{height:"fit-content"}}>


    <div className="top-semicircle semicircle-white">
        <div className="circle-h2">
        <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" }} > { page["topsmtext"] } </h2>
        </div>
    </div>
    <p className="subheading content">
      {page["blueTopText"].length > 50 && <Markdown   content = {page["blueTopText"]} ></Markdown> }
      {page["blueTopText"].length <= 50 && <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" }} > { page["blueTopText"] } </h2>}
      
    </p>

    <div style={{maxWidth:"90vw",margin:"auto"}} >
    <BlueZone2 content = {page["paragraphs"]}></BlueZone2>

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

  
      </>
}