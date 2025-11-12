import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Markdown from '../markdown.jsx';
import BeforeFooter from '../BeforeFooter.jsx';
import background_carrier from '../../assets/carrier/mountain-background.png'; // Import background image
import logo from '../../assets/logo.png'; // Import logo image

import data from "../../pages.json";
var page = data["sms-terms"]["sms-terms.json"];

function SmsTerms() {
  return (
    <>
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
                    width: "90%"
                }}
            >
                <h2 className="bold-inline" >
                    {page["title"]}
                </h2>
                <Markdown content = {page["p2"]}></Markdown>
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
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block",alignSelf:"center"}} src={logo}  alt="AAA Delivery Service" className="logo-1" /> 
                <div style={{display:"inline-block"}}>
                    For help or questions regarding the SMS program, contact us at privacy@aaadeliveryservice.com or (844) 222-0206.<br/>
                    © 2024 AAA Delivery Service, LLC. <br/>
                    Privacy Policy | SMS Terms <br/>
                </div>
            <img style={{width:"clap(1cm,5vw,10cm)",display:"inline-block"}} src={logo}  alt="AAA Delivery Service" className="logo-1" /> 
            </div>
        </div>
    </>
  );
}

export default SmsTerms;
