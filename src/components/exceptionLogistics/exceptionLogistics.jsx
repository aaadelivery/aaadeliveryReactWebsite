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

var data = require("../../pages.json");
var page = data["Logistics"]["exceptional-logistics-lasting-value-aaas-commitment-to-communities-and-customers.json"];

console.log(page);




function ExceptionLogistics() {

  return (
    <>
    <div id='map-and-dropdown'>
        <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                {page["title"]}
            </h1>
        </Container>

        <div  style= {{
            display : "block",
            width:"80%",
            marginLeft : "15%",
            position : "relative",
            textColor : "#2e2e2e",
            fontSize:"1vw"
        }} >
        
            <img  src={require('./top.png')} style={{
                width : "100%"
            }} />

            <div  style={{
                position : "absolute",
                top : "45%",
                left : "3%",
                width : "15%",
            }}> {page["topStep1"]}
                
            </div>
            <div  style={{
                position : "absolute",
                top : "20%",
                left : "27%",
                width : "15%",
            }}>
                {page["topStep2"]}
            </div>
            <div  style={{
                position : "absolute",
                top : "23%",
                left : "51%",
                width : "15%",
            }}>
                {page["topStep3"]}
            </div>
            <div  style={{
                position : "absolute",
                top : "33%",
                left : "74%",
                width : "15%",
            }}>
                {page["topStep4"]}
            </div>

        </div>


        <Container maxWidth="xl" disableGutters style={{maxWidth:"80%" , marginTop:20}} className="about-us-cols">
            <Grid container>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <h2>{page["paragraphTitle1"]}</h2>
                    <div className="leftText">
                        <Markdown content = {page["paragraphContent1"]} ></Markdown>
                    </div>
                    <h2>{page["paragraphTitle2"]}</h2>
                    <div className="leftText">
                        <Markdown content = {page["paragraphContent2"]} ></Markdown>
                    </div>

                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["paragraphImage1"]}  style={{width:"80%",margin:"auto"}}></img>

                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <h2>{page["paragraphTitle3"]}</h2>
                    <div className="leftText">
                        <Markdown content = {page["paragraphContent3"]} ></Markdown>
                
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["paragraphImage2"]}  style={{width:"80%",margin:"auto"}}></img>

                </Grid>

            </Grid>
        </Container>
    
        <div className="screen screen-2" style={{height:"fit-content",margin:"auto", width:"90vw",paddingBottom:"30px"}}>
            
            <Grid container >
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

        <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                {page["bottomTitle1"]}
            </h1>
            <p className="subheading content">
                <Markdown content = {page["bottomContent1"]} ></Markdown>
            </p>
        </Container>
        
        <div  style= {{
            display : "block",
            width:"80%",
            marginLeft : "15%",
            position : "relative",
            textColor : "#2e2e2e",
            fontSize:"1vw"
        }} >
        
            <img  src={require('./top.png')} style={{
                width : "100%"
            }} />

            <div  style={{
                position : "absolute",
                top : "45%",
                left : "3%",
                width : "15%",
            }}>
                {page["bottomStep1"]}
            </div>
            <div  style={{
                position : "absolute",
                top : "20%",
                left : "27%",
                width : "15%",
            }}>
                {page["bottomStep2"]}
            </div>
            <div  style={{
                position : "absolute",
                top : "23%",
                left : "51%",
                width : "15%",
            }}>
                {page["bottomStep3"]}
            </div>
            <div  style={{
                position : "absolute",
                top : "33%",
                left : "74%",
                width : "15%",
            }}>
                {page["bottomStep4"]}
            </div>

        </div>
        <Container  disableGutters style={{width:"70vw",margin:"auto" , padding : "20px"}}>
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
