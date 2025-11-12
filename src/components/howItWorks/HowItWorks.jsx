import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BlueLogo from "../../assets/logo-blue.png"
import ScrollAnimation from 'react-animate-on-scroll';
import "../../assets/animate.css";
import BeforeFooter from "../BeforeFooter";
import home_page_top_right from '../../assets/blue-circles.png';
import { UsaMap } from "../locations/Map"
import CircleMapPath from "../circle-animated-path-map";

import BlueSection from '../services/blue-section';

import Markdown from '../markdown'
import { BlueZone } from '../markdown'

import data from "../../pages.json";
var page = data["HowItWorks"]["how-it-works.json"];


function HowItWorks() {
  return (
    <>

      <div id='map-and-dropdown' style={{}} >
        <Grid id="map-and-dropdown-child-1" container style={{ marginBottom: 0, height: "fit-content", maxWidth: "1400px", margin: "auto" }}>
          <Grid item xs={12} md={6}   >

            <h1 className="circle-h1 circle-text"
              style={{
                marginTop: "10vh",
                paddingTop: "11%"
              }}>{page["title"]}</h1>
            <h2 className="circle-h2 circle-text">
              {page["subtitle"]}
            </h2>
            <img style={{ width: "25%", display: "block", margin: "auto" }} src={page["top-image"]} alt="Blue Logo" />


          </Grid>
          <Grid item xs={0} md={6} >
            <Box className="content background-blue-circles" style={{ width: "100%", marginTop: "80px", backgroundImage: `url(${home_page_top_right})` }} >

              <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{ width: "80%" }}>
                <video controls autoPlay loop muted style={{ borderRadius: 10, width: "100%", maxWidth: "100%", height: "auto" }}>
                  <source src={page["top-video"]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

            </Box  >



          </Grid>
          <p id="map-and-dropdown-child-2" className="industries-paragraph" style={{ maxWidth: "70%" }}>
            <h2 className="circle-h3 " style={{ marginBottom: 10 }} >{page["middle title"]}</h2>
            <Markdown content={page["middle subtitle"]} ></Markdown>
          </p>
        </Grid>

      </div>

      <BlueSection page={page}></BlueSection>

      <BeforeFooter></BeforeFooter>



    </>
  );
}

export default HowItWorks;
