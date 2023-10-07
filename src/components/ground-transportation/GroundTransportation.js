import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


import {BlueSection2} from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["Freight"]["ground-transportation.json"];



function SameDayDelivery() {


  return (
    <>
    <div style={{ marginTop:"6%",padding:"0 5vw", paddingBottom:"10vh"}} >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
        <Grid item xs={12} sm={7} style={{ marginTop:"5%"}}  >
          <h1 className="circle-h1"  > {page["title"]} </h1>
          <p >
            <Markdown content = {page["subtitle"] } ></Markdown>
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={5} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:" auto"
           }} src={page["top-image"]} alt="delivery signature" />

           </div>
        </Grid>

      </Grid>

      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}} >

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


    </div>
      


        <BlueSection2 page={page} ></BlueSection2>
        <BeforeFooter></BeforeFooter>

    </>
  );
}

export default SameDayDelivery;
