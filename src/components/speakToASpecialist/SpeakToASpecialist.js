import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormTextFields from "./Form";
import home_page_top_right from "../../assets/blue-column.png"


import {BlueSection2} from '../services/blue-section.js';
import BeforeFooter from '../BeforeFooter';
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["speak-to-a-specialist"]["ready-to-speak-to-a-specialist.json"];


function SpeakToASpecialist() {

 
  return <> 
  <Container id="speak-to-a-specialist-top-container" maxWidth={false} disableGutters  sx={{backgroundImage: {md:"none",lg:`url(${home_page_top_right})`} }}style={{margin:"auto", backgroundRepeat:"no-repeat" , backgroundPosition:"100% -20px" , backgroundSize : "300px" , marginTop:80, width:"100vw", overflow:"visible", paddingRight:"150px" }}>
      <Grid container
>
          <Grid item 
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
          xs={12} md={6} style={{padding:30 , height:"fit-content"}}>


                <h1  className = "circle-h1" style={{
                  letterSpacing:3,
                  fontWeight:500,
                  textAlign:"center"
                }}>  {page['title']}  </h1>
                <p style={{
                  fontWeight:600,
                  textJustify: "none",
                  
                }}>
                  <Markdown content ={page["subtitle"].replace("\n","<br/>") }  ></Markdown>


                </p>


            <Box 
              style={{
                width: "100%",
              }} >

              <div id="speak-to-a-specialist-video-top-container" className="rounded-corners box-shadow video-container-common" style={{}}>
                <video id="speak-to-a-specialist-video-top" controls autoPlay loop muted style={{ borderRadius: 10, width: "100%" , height:"auto" }}>
                  <source src={page["top-image"]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </Box  >

          </Grid>

        <Grid item xs={12} md={6} >
        <div  > 
        <div  style={{margin:"10%"}}>
            <FormTextFields />
          </div>
        </div>
          
                
        </Grid>
      </Grid>
  </Container>

  <div id="speak-to-a-specialist-screen-2" className="screen screen-2" style={{height:'fit-content' , backgroundColor:"#367bdc" , color:"white", marginBottom:20}}>


      <div className="top-semicircle semicircle-white">
          <div className="circle-h2" >
          <h1 style={{width :"80%", margin:"auto",textAlign:"center" , color:"black" }}> {page["topsmtext"]} </h1>

          </div>
      </div>


      <p className="content" style={{
                  fontWeight:600,
                  width:"80%",
                  margin:"auto",
                  color:"white"
                }}>
                    <Markdown content = {page["blueTopText"]} ></Markdown>
                </p>


      <Container maxWidth="xl" disableGutters style={{marginBottom: "220px"}}>

        <Grid container style={{marginTop:50,marginBottom:"20vh"}}>
            <Grid item xs={12} md={6}>
              <div style={{width:"80%" , margin:"auto" }} >
                <h2>
                  {page["blueTitle"]} 
                </h2>
                <Markdown content = {page["blueContent"]} ></Markdown>

              </div>

            </Grid>


            <Grid item xs={12} md={4}>
            <div id="speak-to-a-specialist-video-middle-container" className="video-container-common" style={{borderRadius:10 }}>
                  <video id="speak-to-a-specialist-video-middle"
                    style={{width:"100%" }}
                    loop
                     autoPlay
                    muted
                    controls
                  >
                    <source
                        src={page["bluevideo"]}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.

                  </video>
                </div>
            </Grid>

            
        </Grid>
      </Container>
      
      <div className="bottom-semicircle semicircle-white">
      </div>
  </div>

  <div id="speak-to-a-specialist-screen-3" className="screen screen-2" style={{height:"fit-content",marginBottom:"3vw"}}>
  <div className="top-semicircle semicircle-white">
          <div className="circle-h2" >
          <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , color:"black"  }}>{page["s3topsmtext"]}</h1>

          </div>
      </div>


      <Container maxWidth="xl" disableGutters style={{marginBottom:150}}>
        <div className="content" style={{width:"80%" , margin:"auto", marginBottom:"8vh"}}>
          <Markdown content = {page["s3TopText"]} ></Markdown>


        </div>


        <Grid container >
            <Grid item xs={12} md={4}>
                <div className="content checked" style={{width:"90%" }}>
                  <Markdown content = {page["s3l2content1"]} ></Markdown>
                </div>
            </Grid>


            <Grid item xs={0} md={4} >
            <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} style={{maxWidth:"800px", margin:"auto"}}
>
            <img  style={{width:"100%" , maxWidth:"100%" , height:"auto" }} src={page["s3c2img"]} alt="Blue Logo" />

            </Box>
            </Grid>

            <Grid item xs={12} md={4} >
                <div className="content checked" style={{width:"90%" }}>
                  <Markdown content = {page["s3r2content1"]} ></Markdown>

                </div>

            </Grid>
        </Grid>
        <div className="column-footer" style={{display:"block", marginBottom:150,width:"100%" }}>
                  <a className="button-link" href="/speak-to-a-specialist"  style={{marginLeft:"8%" , marginRight:0}}>
                    <button className="round-button round-button">
                      Get Started
                    </button>
                  </a>
                  <a className="button-link" href="/how-it-works" style={{float:"right",marginRight:"8%" , marginLeft:0}}>
                    <button className="round-button round-button">
                      How it works
                    </button>
                  </a>
        </div>

        <div className="content" style={{width:"80%",margin:"auto",paddingTop:"3em",color:"black",marginBottom:"10vh"}}>
          <Markdown content = {page["s3BottomText"]} ></Markdown>
        </div>

      </Container>



    </div>


  <div id="speak-to-a-specialist-screen-4">

  <div id="speak-to-a-specialist-screen-4-child-1" style={{width:"100%", backgroundColor:"#367bdc" }}>
  
    <div id="speak-to-a-specialist-screen-4-child-1-1" className="top-semicircle semicircle-white" style={{borderRadius:"0px 0px 100% 100%"}}>
    </div>

    <p id="speak-to-a-specialist-screen-4-child-1-2" className="content screen-3" style={{marin:"auto",width:"70%"}}>
      <Markdown content = {page["s4bluetoptext"]} ></Markdown>
    </p>

    <Grid id="speak-to-a-specialist-screen-4-child-1-3" container className="screen-3" style={{minWidth:"0 !important"}}>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} style={{maxWidth:"100%", minWidth:"0 !important"}} >
        <img  style={{display:"block",width:"100% !important" , maxWidth:"100%" , height:"auto", margin:"auto", minWidth:"0 !important" }} src={page["blimage"]} alt="Blue Logo" />
        <h2 className="centered" >{page["blueTitleLeft"]}</h2>
      </Grid>
      <Grid item xs={12} md={4} style={{maxWidth:"100%", minWidth:"0 !important"}}>
        <img  style={{display:"block",width:"100% !important" , maxWidth:"100%" , height:"auto", margin:"auto", minWidth:"0 !important" }} src={page["bcimage"]} alt="Blue Logo" />
        <h2 className="centered" >{page["blueTitleCenter"]}</h2>

      </Grid>
      <Grid item xs={12} md={4} sx={{display:{xs:"none" , md:"block"}}} style={{maxWidth:"100%", minWidth:"0 !important"}} >
        <img  style={{display:"block",width:"100% !important" , maxWidth:"100%" , height:"auto", margin:"auto", minWidth:"0 !important" }} src={page["brimage"]} alt="Blue Logo" />
        <h2 className="centered" >{page["blueTitleRight"]}</h2>

      </Grid>

    </Grid>

  </div>

  <h2 id="speak-to-a-specialist-screen-4-child-2" className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>{page["bottomsmtext"]}</h2>


    <BeforeFooter id="speak-to-a-specialist-screen-4-child-3"/>
  </div>



  </>
  
}

export default SpeakToASpecialist;
