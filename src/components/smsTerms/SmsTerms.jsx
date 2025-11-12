import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"; // Added Grid import
import Markdown from '../markdown.jsx';
import BeforeFooter from '../BeforeFooter.jsx';
import home_page_top_right from '../../assets/blue-circles.png'; // Added image import
import BlueSection from '../services/blue-section.jsx'; // Added BlueSection import

function SmsTerms() {
  const smsTermsContent = `
# SMS Terms

AAA Delivery Service – SMS Terms
Program: AAA Dispatch Alerts
Last Updated: November 2025
AAA Delivery Service, LLC (“AAA Delivery Service,” “we,” “our,” or “us”) provides text message communications (“SMS”) strictly for internal operational purposes. These messages are sent only to employees and independent contractor drivers who have provided consent during the onboarding or application process.

## Message Purpose
Messages are used solely for company operations, including but not limited to:
- Route assignments and scheduling updates
- Delivery confirmations and troubleshooting
- Safety notifications and dispatch coordination
No marketing or promotional text messages are sent to the public.

## Message Frequency
Message frequency varies depending on operational needs, delivery volume, and driver schedule.

## Cost
Standard message and data rates may apply based on your mobile carrier plan.

## Opt-Out Instructions
You may opt out of AAA Delivery Service SMS communications at any time by replying STOP to any message. You will receive one final confirmation message acknowledging your opt-out request.

## Help Instructions
For assistance, reply HELP to any AAA Delivery Service message, or contact us directly at:
📧 privacy@aaadeliveryservice.com
📞 (844) 222-0206

## Privacy and Data
AAA Delivery Service respects your privacy. Personal information collected for SMS communication is never sold or shared with third parties for marketing purposes.
Text message opt-ins are excluded from any information sharing.
For more details, please review our Privacy Policy.

## Carriers Disclaimer
Wireless carriers are not liable for delayed or undelivered messages.

## Eligibility
This SMS program is intended exclusively for AAA Delivery Service employees and independent contractor drivers aged 18 or older.

AAA Delivery Service, LLC
8813 N Tarrant Pkwy, Suite 236
North Richland Hills, TX 76182
📧 privacy@aaadeliveryservice.com
`;

  return (
    <>
      <div className="home" style={{ margin: "auto" }}>
        <Grid container style={{ marginBottom: 0, height: "fit-content", maxWidth: "1400px", margin: "auto" }}>
          <Grid item xs={12} lg={6} style={{ paddingLeft: "5%", paddingRight: "5%" }}  >
            <h1 className="circle-h1 circle-text" style={{ marginTop: 0, paddingTop: "clamp(1cm,10vh,3cm)", paddingRight: "5%" }}  >
              SMS Terms and Conditions
            </h1>
            <p className="industries-paragraph">
              AAA Delivery Service, LLC (“AAA Delivery Service,” “we,” “our,” or “us”) provides text message communications (“SMS”) strictly for internal operational purposes. These messages are sent only to employees and independent contractor drivers who have provided consent during the onboarding or application process.
            </p>
          </Grid>
          <Grid item xs={0} lg={6} >
            <Box className="content alternative-background-blue-circles" style={{ width: "100%", backgroundImage: `url(${home_page_top_right})`, backgroundPosition: "50% center", marginTop: 0, paddingTop: "clamp(1cm,10vh,3cm)" }} >
              <div className="speak-to-a-specialist-form rounded-corners box-shadow" style={{ width: "80%" }}>
                <img
                  style={{
                    display: 'block',
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    margin: " auto",
                    borderRadius: "clamp(10px,3%,50px)",
                    boxShadow: "1px 1px 6px -2px grey",
                  }}
                  src="/images/sms-hero.png" // Placeholder image
                  alt="SMS Terms"
                />
              </div>
            </Box>
          </Grid>
        </Grid>

        <Container maxWidth="md" style={{ marginTop: '50px', marginBottom: '50px' }}>
          <Box>
            <Markdown content={smsTermsContent} />
          </Box>
        </Container>

        <BlueSection page={{
          topsmtext: "Contact Us",
          blueTopText: "For assistance, reply HELP to any AAA Delivery Service message, or contact us directly.",
          paragraphs: [
            {
              pgimg: {
                title: "Email",
                content: "privacy@aaadeliveryservice.com",
                thumbnail: "/images/email-icon.png" // Placeholder icon
              }
            },
            {
              pgimg: {
                title: "Phone",
                content: "(844) 222-0206",
                thumbnail: "/images/phone-icon.png" // Placeholder icon
              }
            }
          ],
          blueBottomText: "We respect your privacy. Your mobile number will not be shared or sold to third parties for marketing purposes. For more details, please review our Privacy Policy.",
          blimage: "/images/privacy-icon.png", // Placeholder image
          bcimage: "/images/data-security.png", // Placeholder image
          brimage: "/images/compliance.png", // Placeholder image
          bottomsmtext: "Thank you for choosing AAA Delivery Service."
        }} />
      </div>
      <BeforeFooter />
    </>
  );
}

export default SmsTerms;
