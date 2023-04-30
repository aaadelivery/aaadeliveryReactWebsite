import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextMobileStepper from "./Founders";

import BeforeFooter from "../BeforeFooter";
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["about-us"]["customer-obsession-people-led-innovation-driven.json"];


export default function AboutUs(){
    return <div className="unjustified">
    <Container maxWidth="xl" disableGutters style={{maxWidth:"100%" , marginTop:50,padding:"1.5rem"}}>
        <Grid container>
            <Grid item xs={12} md={8} style={{padding:30}} >
                    <h1 style={{fontSize:"3rem" , fontWeight:"heaboldvy" ,margin:"auto",marginBottom:"5rem"}}>
                       {page["title"]} 
                    </h1>
                <Box sx={{ display: { xs: 'none', md: 'block'} }} style={{fontWeight:"bold"  }}  >         
                    <p style={{fontWeight:"bold" , fontFamily:"sans-serif" }}>
                        <Markdown content={page["p1"]} ></Markdown>
                    </p>

                    <p>
                    <Markdown content={page["p2"]} ></Markdown>

                    </p>

                    <p>
                    <Markdown content={page["p3"]} ></Markdown>
                    </p>
                    <p>
                    <Markdown content={page["p4"]} ></Markdown>

                    </p>
                </Box>
            </Grid>
            <Grid item xs={12} md={4} >
                <Box sx={{ marginTop: { xs: 0, md: '50%', lg: '50%' } }}  >
                    <img style={{width:"100%" ,overflow:"hidden", display:"block"}}src={ page["timage"] } alt="Blue Logo" />

                </Box>
            </Grid>
        </Grid>
    </Container>

    <Container maxWidth="xl" disableGutters style={{maxWidth:"80%" , marginTop:20}} className="about-us-cols">
        <Grid container>
            <Grid item xs={12} md={4} style={{padding:30}}>
                <h1>{page["ut"]}</h1>
                <hr style={{ border: "3px solid red" , width:"50%" , marginRight:"50%"}}></hr>
                <h2>{page["t1"]}</h2>
                <div className="leftText">
                    <Markdown content = {page["pt1"]} ></Markdown>
                </div>
                <h2>{page["t2"]}</h2>
                <div className="leftText">
                    <Markdown content = {page["pt2"]} ></Markdown>
                </div>

            </Grid>
            <Grid item xs={12} md={4} style={{padding:30}}>
            <h1>{page["t3"]}</h1>
            <p>
            <div  className="square-list">
            <Markdown  content = {page["pt3"]} ></Markdown>
            </div>

            </p>
            </Grid>
            <Grid item xs={12} md={4} style={{padding:30}}>
            <h1>{page["t4"]}</h1>
            <div className="leftText">
            <Markdown  content = {page["pt4"]} ></Markdown>
            </div>
            <div>
            <TextMobileStepper/>
            </div>
            


            </Grid>
        </Grid>
    </Container>
    </div>
}