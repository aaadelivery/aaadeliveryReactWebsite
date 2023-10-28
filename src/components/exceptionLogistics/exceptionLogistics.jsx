import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-circles.png';
import {UsaMap} from "../locations/Map.js"
import CircleMapPath from "../circle-animated-path-map";
import Markdown from '../markdown.js'
import {BlueZone} from '../markdown.js'
import BeforeFooter from '../BeforeFooter';
import Animation from "./animation.jsx";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

var data = require("../../pages.json");
var page = data["Logistics"]["exceptional-logistics-lasting-value-aaas-commitment-to-communities-and-customers.json"];

console.log(page);




function ExceptionLogistics() {
    const [expanded1, setExpanded1] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded1(!expanded1);
    };
  

    const [expanded2, setExpanded2] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(!expanded2);
    };
  
  return (
    <>
    <div id='map-and-dropdown'>


        <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                {page["title"]}
            </h1>
        </Container>
        <Container disableGutters style={{padding:30,width:"100%" }} >
            <Animation steps = {[page["topStep1"] , page["topStep2"] , page["topStep3"] , page["topStep4"] ]}></Animation>

        </Container>




        <Container maxWidth="xl" disableGutters style={{maxWidth:"80%" , marginTop:20}} className="about-us-cols">
            <Grid container >
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <Accordion expanded={expanded1 } onChange={handleChange('panel1')} style={{boxShadow : "none"}}>
                        <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <div>
                                <h2>{page["paragraphTitle1"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent1"]} ></Markdown>
                                </div>
                                <h2>{page["paragraphTitle2"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent2"]} ></Markdown>
                                </div>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h2>{page["paragraphTitle1hidden"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent1hidden"]} ></Markdown>
                                </div>
                                <h2>{page["paragraphTitle2hidden"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent2hidden"]} ></Markdown>
                                </div>
                            </div>
                            
                        </AccordionDetails>
                    </Accordion>

                    <button style={{
                        backgroundColor : "white",
                        borderColor : "blue",
                        borderWidth : "2px",
                        padding  : "1vw" , 
                        borderRadius : "200px"
                    }} 
                        onClick={handleChange('panel1')}
                    >Read {expanded1 ? "Less" : "More"}</button>

                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["paragraphImage1"]}  style={{width:"80%",margin:"auto"}}></img>

                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <Accordion expanded={expanded2 } onChange={handleChange2('panel1')} style={{boxShadow : "none"}}>
                        <AccordionSummary
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <div>
                                <h2>{page["paragraphTitle3"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent3"]} ></Markdown>
                                </div>

                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div>
                                <h2>{page["paragraphTitle3hidden"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent3hidden"]} ></Markdown>
                                </div>
                                <h2>{page["paragraphTitle4hidden"]}</h2>
                                <div className="leftText">
                                    <Markdown content = {page["paragraphContent4hidden"]} ></Markdown>
                                </div>
                            </div>
                            
                        </AccordionDetails>
                    </Accordion>

                    <button style={{
                        backgroundColor : "white",
                        borderColor : "blue",
                        borderWidth : "2px",
                        padding  : "1vw" , 
                        borderRadius : "200px"
                    }} 
                        onClick={handleChange2('panel1')}
                    >Read {expanded2 ? "Less" : "More"}</button>
                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["paragraphImage2"]}  style={{width:"80%",margin:"auto"}}></img>

                </Grid>

            </Grid>
        </Container>
    
        <div className="screen screen-2" style={{height:"fit-content",margin:"auto", width:"90vw",paddingBottom:"30px"}}>
            
            <Grid container spacing = "5vw" >
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
                    <div className="content middle bold-inline">
                        {page["l2title3"]}
                    </div>
                    <div className="content ">
                    <Markdown content ={page["l2content3"]}></Markdown>
                    </div>

                    </Grid>
                    <Grid item xs={12} md={4}>
                    <UsaMap/>
                    <img src= {page["c2img"]}  style={{width:"80%",margin:"auto"}}></img>
                    <div className="content middle bold-inline">
                        {page["c2title"]}
                    </div>
                    <div className="content ">
                    <Markdown content ={page["c2content"]}></Markdown>
                    </div>
                    <div className="content middle bold-inline">
                        {page["c2title2"]}
                    </div>
                    <div className="content ">
                    <Markdown content ={page["c2content2"]}></Markdown>
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
                    <div className="content middle bold-inline">
                        {page["r2title3"]}
                    </div>
                    <div className="content ">
                    <Markdown content ={page["r2content3"]}></Markdown>
                    </div>

                    </Grid>
            </Grid>
        
        </div>

        <div className="screen screen-3" style={{height:"fit-content"}}>


            <div className="top-semicircle semicircle-white">
                <div className="circle-h2">
                </div>
            </div>


            
            <Container  disableGutters style={{padding:"10px",width:"70%",argin:"auto" }}>
                <p style={{textAlign:"center" }}>
                    <Markdown content = {page["blueTopText"]} ></Markdown>
                </p>
                <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" ,marginBottom:"50px"}} > { page["topsmtitle"] } </h2>
            </Container>


            <Grid container
             style = {{
                        textAlign :"center",
                        width : "80%",
                        margin : "auto",
                    }}>
                {page["founders"].map((member,index) => {
                    return <>
                        <Grid item xs = {12} sm={3} >
                            <div style = {{
                                textAlign :"center",
                                width : "90%",
                                margin : "auto",
                            }}>
                                <img style={{
                                    borderRadius : "9%",
                                    width : "66%",
                                    margin : "auto",
                                    display : "block",
                                    marginBottom : "20px"
                                }} 
                                    src= {member["pgimg"]["image"]} ></img>
                                <div className="content middle bold-inline">
                                    {member["pgimg"]["name"]}
                                </div>
                                <div className="content ">
                                    {member["pgimg"]["job"]}
                                </div>

                            </div>
                        </Grid>
                    </>
                })}
            </Grid>
        </div>

        <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>
            {page["bottomsmtext"]}
        </h2>

        <Container  disableGutters style={{padding:30,maxWidth:"90vw" , paddingBottom : "0px"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                {page["bottomTitle1"]}
            </h1>
            <p className="subheading content" style={{paddingBottom :  "0px"}}>
                <Markdown content = {page["bottomContent1"]} ></Markdown>
            </p>
        </Container>

        <Container disableGutters style={{padding:"0px 30px",width:"100%" }} >
            <Animation steps = {[page["bottomStep1"] , page["bottomStep1"] , page["bottomStep1"] , page["bottomStep1"] ]}></Animation>

        </Container>
        

        <Container  disableGutters style={{width:"70vw",margin:"auto" , padding : "20px" , paddingTop : "0px"}}>
            <h2>{page["bottomTitle2"]}</h2>
            <div className="leftText">
                <Markdown content = {page["bottomContent2"]} ></Markdown>
            </div>
        </Container>
    </div>
      
    </>
  );
}

export default ExceptionLogistics;
