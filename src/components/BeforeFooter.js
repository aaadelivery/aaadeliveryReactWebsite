import React from 'react';
import Grid from "@mui/material/Grid";
import "../assets/animate.css";

import Box from "@mui/material/Box";
import Markdown from './markdown.js'

var data = require("../pages.json");
var page = data["footer"]["order-tracking-in-real-time.json"];

export  default function BeforeFooter(){
    return  <>
        <div className="screen screen-4" style={{height:"fit-content"}}>


          <Grid container  justifyContent="flex-end" style={{ marginBottom:0, height:"fit-content"}}>
          <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
            <Box  style={{margin:"auto"}} >
              <h2>{page["title"]}</h2>
              <div className="content textLeft" >
                <Markdown content={page["p1"]} ></Markdown>
              </div>
            </Box>
            <Box  style={{margin:"auto"}} >
                  <h2>{page["title2"]}</h2>
                  <div className="content textLeft" >
                    <Markdown content={page["p2"]} ></Markdown>
                  </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop:"5%",padding:"0 5vw"}}  >
            <video   autoPlay loop  muted style={{borderRadius:"5%"  , width:"100%"  }}>
                  <source src={page["tvideo"]}  type="video/mp4" />

                          Your browser does not support the video tag.
            </video>
          </Grid>           
          </Grid>

        </div>


    </>
}