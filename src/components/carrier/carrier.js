import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import home_page_top_right from '../../assets/blue-column.png';
import {Link} from "react-router-dom";

import background_carrier from '../../assets/carrier/mountain-background.png';
import BeforeFooter from "../BeforeFooter";
import Markdown from '../markdown.js'

var data = require("../../pages.json");
var page = data["carriers"]["become-a-carrier.json"];

export default function Carrier(){
    return <>
        <div style={{
             backgroundImage: `url(${background_carrier})`,
             backgroundRepeat: "no-repeat",
             backgroundAttachment: "fixed",
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundOrigin: "padding-box",
             width: "100%",
             paddingTop: "20vh",
             paddingBottom: "10vh", 
        }}>

            <Box
                style={{
                    margin:"auto",
                    minHeight: "100vh",
                }}
                sx={{
                    width: {
                        xs:"90%",
                        lg:"60%"
                    } , 
                }}
            >
                <h1 style={{width: "80%", margin: "30px auto", textAlign: "center"}}>
                    {page["title"]}
                </h1>
                <h1 className="circle-h1 circle-text blue-text">
                {page["subtitle"]}
                </h1>
                <h4 className="circle-h4 circle-text">
                    <Markdown content = {page["p1"]}></Markdown>
                </h4>
                <Link to="/carrier-registration" className="black-link">
                    <h2 className="centered"
                        style={{
                            backgroundColor: 'white',
                            color:"rgb(54, 123, 220)",
                            textAlign: 'center'
                        }}>CARRIER REGISTRATION
                    </h2>
                </Link>






            </Box>

        </div>
        <div style={{
            backgroundColor:"rgba(0,0,0,0.1)"
        }}>
            <div className= "carrier-grey-text" style={{
                width:"80%",
                margin:"auto",
                textAlign:"center",
                padding:"5vh 0",

            }}>
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block",alignSelf:"center"}} src={require('../../assets/logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 
                <div style={{display:"inline-block"}}>
                    For help or questions regarding the registration process on this website, contact RMIS at 888-643-8174.<br/>
                    © 2022 Registry Monitoring Insurance Services, Inc. <br/>
                    RMIS Privacy Policy | Do Not Sell My Personal Information <br/>
                    RMIS © Status - All Systems Operational 
                </div>
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block"}} src={require('../../assets/logo.png')}  alt="AAA Delivery Service" className="logo-1" /> 



            </div>

        </div>

   </>

}