import newLogoWhite from "../../assets/new-logo-white.png";
import planet from "../../assets/planet.png";

import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CertificationsPopover from "./certifications";
import { Link } from "react-router-dom";

import data from "../../pages.json";
var footerData = data["footerLayout"]["footerLayout.json"];

function Footer() {
  return (
    <>
      <div
        className="footer"
        style={{ height: "fit-content", paddingBottom: 20 }}
      >
        <Container maxWidth="xl" disableGutters style={{ padding: 30 }}>
          <Grid container spacing={1} alignContent="center">
            <Grid
              item
              xs={12}
              sm={12}
              md={2.5}
              alignItems="center"
              style={{ padding: 10 }}
            >
              <div>
                <img
                  src={newLogoWhite}
                  style={{
                    width: "80%",
                    display: "block",
                    marginBottom: "50px",
                    marginTop: -13,
                  }}
                ></img>
              </div>
              <p className="content" style={{ textAlign: "left" }}>
                {footerData.main_description}
              </p>

              <CertificationsPopover></CertificationsPopover>
            </Grid>
            <Grid
              item
              xs={0}
              sm={0}
              md={0.5}
              sx={{ display: { sm: "none", md: "block" } }}
            >
              <div style={{ width: "100%" }}></div>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <div className="footer-col-header">Our services</div>
              <ul>
                {footerData.our_services.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <div className="footer-col-header">Industries</div>
              <ul>
                {footerData.industries.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={2} style={{ padding: 5 }}>
              <div className="footer-col-header">Our Company</div>
              <ul>
                {footerData.our_company.map((item, index) => (
                  <li key={index}>
                    {item.url === "#" ? (
                      item.label
                    ) : (
                      <Link to={item.url}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ padding: 5 }}>
              <div className="footer-col-header">Contact Us</div>
              <ul>
                {footerData.contact_us.map((item, index) => (
                  <li key={index}>
                    {item.url.startsWith("mailto:") ||
                    item.url.startsWith("tel:") ? (
                      <a href={item.url}>{item.label}</a>
                    ) : item.url === "#" ? (
                      item.label.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < item.label.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))
                    ) : (
                      <Link to={item.url}>{item.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
          <hr style={{ color: "white" }}></hr>

          <div
            style={{
              color: "white",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={planet}
              style={{ width: "2vw", display: "inline-block" }}
            ></img>
            {footerData.copyright_text}
          </div>
          <br />
          <div
            style={{
              color: "white",
              fontSize: "1.5vw",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Link to={footerData.privacy_policy_link}>Privacy policy</Link>
            {"     -     "}
            <Link to={footerData.sms_terms_link}>SMS Terms</Link>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
