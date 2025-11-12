import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-circles.png';
import { UsaMap } from "../locations/Map";
import CircleMapPath from "../circle-animated-path-map";
import Markdown from '../markdown'
import { BlueZone } from '../markdown'
import BeforeFooter from '../BeforeFooter';

import data from "../../pages.json";
var page = data["WhatWeOffer"]["hello-world.json"];


function WhatWeOffer() {

  return (
    <>
      <div id='map-and-dropdown'>
        <Grid id="what-we-offer-top-grid" container style={{ marginBottom: 0, height: "fit-content", maxWidth: "1400px", margin: "auto" }} >
          <Grid item xs={12} lg={6} style={{ marginTop: "5%" }}  >

            <h1 className="circle-h1 circle-text" style={{ width: "75%", margin: "auto" }}>{page["title"]}</h1>
            <h2 className="circle-h2 circle-text" style={{ width: "90%", margin: "auto" }}>
              {page["subtitle"]}
            </h2>



          </Grid>
          <Grid item xs={0} lg={6} >
            <Box className="content background-blue-circles" style={{ width: "100%", marginTop:"80px", backgroundImage: `url(${home_page_top_right})` }} >

              <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{ width: "80%"  }}>
                <video controls autoPlay loop muted style={{ borderRadius: 10, width: "100%" }}>
                  <source src={page["video"]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </Box  >


          </Grid>

        </Grid>


        <div id="what-we-offer-screen-2" className="screen screen-2" style={{ height: 'fit-content', maxWidth: "1400px", margin: "auto" }}>
          <Container disableGutters style={{ padding: 30, maxWidth: "90vw" }}>
            <h1 style={{ width: "80%", margin: "auto", textAlign: "center", marginTop: 30, marginBottom: 30 }}>
              {page["middle title"]}
            </h1>

            <p className="subheading content" style={{ textJustify: 'none' }}>
              <Markdown content={page["middle subtitle"]}></Markdown>
            </p>

            <Grid container >
              <Grid item xs={12} md={4}>
                <img src={page["l2img"]} style={{ width: "80%", margin: "auto" }}></img>
                <div className="content middle bold-inline">
                  {page["l2title"]}
                </div>
                <div className="content middle-subheader">
                  {page["l2sbtitle"]}
                </div>
                <div className="content checked">
                  <Markdown content={page["l2content"]} />
                </div>

              </Grid>



              <Grid item xs={12} md={4}>
                <UsaMap></UsaMap>
                <img src={page["c2img"]} style={{ width: "80%", margin: "auto" }}></img>
                <div className="content middle bold-inline">
                  {page["c2title"]}
                </div>
                <div className="content middle-subheader">
                  {page["c2sbtitle"]}
                </div>
              </Grid>


              <Grid item xs={12} md={4}>
                <img src={page["r2img"]} style={{ width: "80%", margin: "auto" }}></img>
                <div className="content middle bold-inline">
                  {page["r2title"]}
                </div>
                <div className="content middle-subheader">
                  {page["r2sbtitle"]}
                </div>
                <div className="content checked">
                  <Markdown content={page["r2content"]} />
                </div>

              </Grid>
            </Grid>
          </Container>


        </div>

        <div id="what-we-offer-screen-3" className="screen screen-3" style={{ height: "fit-content" }}>

          <div id="what-we-offer-top-semicircle" className="top-semicircle semicircle-white">
            <div className="circle-h2">
              <h1 style={{ width: "80%", margin: "auto", textAlign: "center" }}>{page["topsmtext"]}</h1>

            </div>
          </div>
          <p className="subheading content">
            <Markdown content={page["blueTopText"]} ></Markdown>
          </p>

          <div id="what-we-offer-blue-zone-container" style={{ maxWidth: "1400px", margin: "auto" }} >
            <BlueZone content={page["paragraphs2"]}></BlueZone>

            <h1 style={{ width: "80%", margin: "auto", textAlign: "center" }}>{page["blueWhiteMiddleTitle"]}</h1>

            <p className="subheading content">
              <Markdown content={page["blueWhiteMiddleText"]} ></Markdown>
            </p>
            <BlueZone content={page["paragraphs"]}></BlueZone>

            <p className="subheading content">

              <Markdown content={page["blueBottomText"]} ></Markdown>
            </p>

          </div>
          <div id="what-we-offer-bottom-images-container" style={{ maxWidth: "1200px", margin: "auto" }} >
          <Grid container>
            <Grid item xs={12} sm={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <img style={{
                display: 'block',
                width: "80%",
                margin: "auto"
              }} src={page["blimage"]} alt="delivery signature" />
            </Grid>

            <Grid item xs={12} sm={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
              <img style={{
                display: 'block',
                width: "80%",
                margin: "auto"
              }} src={page["bcimage"]} alt="delivery signature" />
            </Grid>
            <Grid item xs={12} sm={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }} >
              <img style={{
                display: 'block',
                width: "80%",
                margin: "auto"
              }} src={page["brimage"]} alt="delivery signature" />
            </Grid>


          </Grid>
          </div>


        </div>
        <h2 className=" bottom-blue-semicircle circle-h2 schedule" style={{ textAlign: "center" }}>{page["bottomsmtext"]}</h2>


        <div id="what-we-offer-screen-4" className="screen screen-4" style={{ height: "fit-content" }}>


          <BeforeFooter></BeforeFooter>

        </div>



      </div>

    </>
  );
}

export default WhatWeOffer;
