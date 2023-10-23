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
var page = data["Delivery"]["stat-delivery-service.json"];


var team = [
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    },
    {
        "name" : "John Doe",
        "description" : "Founder & Chief Executive Officer",
        "image"  : "./guy.png"
    }

]



function ExceptionLogistics() {

  return (
    <>
    <div id='map-and-dropdown'>
        <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                Exceptional Logistics, Lasting Value!  AAA's Commitment to Communities and Customers
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
            }}>
                Customer Obsession,
                Cultivating Creativity!
            </div>
            <div  style={{
                position : "absolute",
                top : "20%",
                left : "27%",
                width : "15%",
            }}>
                People-Led,
                Nurturing Talent!
            </div>
            <div  style={{
                position : "absolute",
                top : "23%",
                left : "51%",
                width : "15%",
            }}>
                Innovation-Driven,
                Beyond Satisfaction!
            </div>
            <div  style={{
                position : "absolute",
                top : "33%",
                left : "74%",
                width : "15%",
            }}>
                Quality Commitment,
                Exceeding Standards!
            </div>

        </div>


        <Container maxWidth="xl" disableGutters style={{maxWidth:"80%" , marginTop:20}} className="about-us-cols">
            <Grid container>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <h2>From AC Express to AAA Delivery Service:</h2>
                    <div className="leftText">
                        <Markdown content = {""} ></Markdown>
                        Founded in 1995 as AC Express, we embarked on a journey fueled by a vision for unparalleled delivery service. Over the years, our dedication to fast, efficient, and reliable deliveries earned us a reputation as a reputable service provider in the Dallas-Fort Worth metroplex, Austin, San Antonio, and Houston.
                    </div>
                    <h2>Transformation and Commitment:</h2>
                    <div className="leftText">
                        <Markdown content = {""} ></Markdown>
                        In the pursuit of excellence, we rebranded ourselves as AAA Delivery Service, embodying three core principles: Customer Obsession, People-Led, and Innovation-Driven.
                    </div>

                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["l2img"]}  style={{width:"80%",margin:"auto"}}></img>

                </Grid>

            </Grid>
            <Grid container>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <h2>Our Mission, Vision, and Values:</h2>
                    <div className="leftText">
                        <Markdown content = {""} ></Markdown>
                        Driven by our core values of Integrity, Leadership, Commitment, Excellence, Safety, and Professionalism, our mission is to deliver exceptional logistics solutions that drive competitive advantages and sustained value for our customers. 
                        <br></br>
                        <br></br>
                        We aim to be indispensable to our customers by providing unparalleled peace of mind and freeing them to focus on their core businesses. Through our unwavering commitment to these values, we continually strive to exceed expectations, ensuring reliability, adaptability, and customized solutions tailored to our customers' unique needs.
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{padding:30}}>
                    <img src= {page["l2img"]}  style={{width:"80%",margin:"auto"}}></img>

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
                <h2 className=" schedule " style={{width :"80%", margin:"auto",textAlign:"center" }} > { page["topsmtext"] } </h2>
                </div>
            </div>
            <Grid container
             style = {{
                        textAlign :"center",
                        width : "80%",
                        margin : "auto",
                    }}>
                {team.map((member,index) => {
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
                                    src = {require("./guy.png")} ></img>
                                <div className="content middle bold-inline">
                                    {member["name"]}
                                </div>
                                <div className="content ">
                                    {member["description"]}
                                </div>

                            </div>
                        </Grid>
                    </>
                })}
            </Grid>
        </div>

        <h2  className=" bottom-blue-semicircle circle-h2 schedule" style={{textAlign:"center"  }}>
            Ready to Experience Exceptional Delivery Services?
        </h2>

        <Container  disableGutters style={{padding:30,maxWidth:"90vw"}}>
            <h1 style={{ width :"80%", margin:"auto",textAlign:"center" , marginTop:30,marginBottom:30}}>
                Ready to Experience Exceptional Delivery Services?
            </h1>
            <p className="subheading content">
                <Markdown content = {page["middle subtitle"]} ></Markdown>
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
                Customer Obsession,
                Cultivating Creativity!
            </div>
            <div  style={{
                position : "absolute",
                top : "20%",
                left : "27%",
                width : "15%",
            }}>
                People-Led,
                Nurturing Talent!
            </div>
            <div  style={{
                position : "absolute",
                top : "23%",
                left : "51%",
                width : "15%",
            }}>
                Innovation-Driven,
                Beyond Satisfaction!
            </div>
            <div  style={{
                position : "absolute",
                top : "33%",
                left : "74%",
                width : "15%",
            }}>
                Quality Commitment,
                Exceeding Standards!
            </div>

        </div>
        <Container  disableGutters style={{width:"70vw",margin:"auto" , padding : "20px"}}>
            <h2>From AC Express to AAA Delivery Service:</h2>
            <div className="leftText">
                <Markdown content = {""} ></Markdown>
                Request a Quote: Curious about how much you can save on courier costs? Reach out for a personalized quote and discover the unmatched value AAA Delivery Service can offer your business.
            </div>
        </Container>
    </div>
      
    </>
  );
}

export default ExceptionLogistics;
