import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-column.png';


import {BlueSection2} from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["same-day-delivery"]["at-home-same-day-delivery.json"];



function SameDayDelivery() {


  return (
    <div className="home">
            
    <div >
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, marginTop:"5vh", height:"fit-content"}}>
        <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}}  >
          <h1 className="circle-h1   "  style={{}}>{page["paragraphs top"][0]["paragraphs-with-image-top"]["title"] }</h1>
          <p style={{ textAlign:"justify"}}>
            <Markdown content = {page["paragraphs top"][0]["paragraphs-with-image-top"]["content"]} ></Markdown>
          </p>
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={4} >
          <div style={{width: '100%'}}>

           <img style={{
            display:'block',
            width:"80%",
            margin:"auto"
           }} src={page["paragraphs top"][0]["paragraphs-with-image-top"]["thumbnail"]} alt="delivery signature" />

           </div>
        </Grid>
        

      </Grid>

      {page["paragraphs top"].slice(1).map((element, index) => (
      <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}> 
              <Grid item xs={12} sm={8} style={{ marginTop:"5%",padding:"0 5vw"}} order={{ xs: index % 2 , sm: (index+1)%2 }} >
                <h2 className=" circle-text textLeft "  style={{}}>{element["paragraphs-with-image-top"]["title"]}</h2>
                <p className="textLeft" >
                  <Markdown content = {element["paragraphs-with-image-top"]["content"]} ></Markdown>
                </p>
              </Grid>
            
               <Grid justifyContent="center" item xs={12} sm={4} order={{ xs: (index+1)%2 , sm: index % 2 }}>
                <div style={{width: '100%'}}>
      
                 <img style={{
                  display:'block',
                  width:"80%",
                  margin:"auto"
                 }} src={element["paragraphs-with-image-top"]["thumbnail"]} alt="delivery signature" />
      
                 </div>
              </Grid>
              

            
        </Grid>
                           
                           
      ))}
      
    </div>
    <BlueSection2 page={page} ></BlueSection2>
        <BeforeFooter></BeforeFooter>


    </div>
  );
}

export default SameDayDelivery;
