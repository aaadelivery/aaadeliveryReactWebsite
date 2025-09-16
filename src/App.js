import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Footer from './components/home/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import HomeScreen from './components/home/HomeScreen';
import SpeakToASpecialist from './components/speakToASpecialist/SpeakToASpecialist';
import WhatWeOffer from './components/whatWeOffer/WhatWeOffer';

import HowItWorks from './components/howItWorks/HowItWorks';
import Locations from './components/locations/Locations';
import AboutUs from './components/aboutUs/AboutUs';
import SameDayDelivery from './components/same-day-delivery/SameDayDelivery';
import GroundTransportation from './components/ground-transportation/GroundTransportation';
import Healthcare from './components/healthcare/Healthcare';
import IndustriesWeServe from './components/industries-we-serve/industries';
import Carrier from './components/carrier/carrier';
import CarrierRegistration from './components/carrier/carrier-registration';
import PrivacyPolicy from './components/carrier/privacy-policy';
import Exceptional from './components/exceptionLogistics/exceptionLogistics';

import Flexible from './components/services/flexible';
import Schedule from './components/services/schedule';
import Stat from './components/services/stat';
import Overnight from './components/services/overnight';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Close from '@mui/icons-material/Close';

const pages = [
  { label: 'Home', url: '/' },
  { label: 'Delivery', url: '/' },
  { label: 'How It Works', url: '/how-it-works' },
  { label: 'Industries', url: '/industries-we-serve' },
  { label: 'Locations', url: '/locations' },
  { label: 'Speak to a specialist', url: '/speak-to-a-specialist' },
  { label: 'Carriers', url: '/carriers' }];

const industries = [
  { label: 'Industries', url: '/industries-we-serve' },
  { label: 'Healthcare', url: '/healthcare' },
  { label: 'Freight', url: '/ground-transportation' },
  { label: 'At Home', url: '/at-home' }];

const delivery = [
  { label: 'What We Offer', url: '/what-we-offer' },
  { label: 'Stat Delivery', url: '/stat-delivery-services' },
  { label: 'Overnight Delivery', url: '/overnight-deliveries' },
  { label: 'Scheduled Route Delivery', url: '/schedule-delivery' },
  { label: 'Flexible Same Day Delivery', url: '/flexible-delivery' },


]

const links = [
  { label: 'Stat', url: '/stat-delivery-services' },
  { label: 'Scheduled', url: '/schedule-delivery' },
  { label: 'Flexible', url: '/flexible-delivery' },
  { label: 'Industries', url: '/industries-we-serve' },
  { label: 'Healthcare', url: '/healthcare' },
  { label: 'Overnight Delivery', url: '/overnight-deliveries' },
  { label: 'Freight', url: '/ground-transportation' },
  { label: 'At Home', url: '/at-home' },
  { label: 'Home', url: '/' },
  { label: 'How It Works', url: '/how-it-works' },
  { label: 'Industries', url: '/industries-we-serve' },
  { label: 'Locations', url: '/locations' },
  { label: 'Speak to a specialist', url: '/speak-to-a-specialist' },
  { label: 'Carriers', url: '/carriers' },
  { label: 'What We Offer', url: '/what-we-offer' },

]

const ScrollTopWrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <>
      <Router>
        <ScrollTopWrapper>

          <AppBar position="fixed" style={{ backgroundColor: "rgb(250, 250, 252,0.8)", boxShadow: "none", backdropFilter: "blur(3px)" }}>
            {/* <Container maxWidth="xl"> */}
            <Toolbar
              sx={{
                display: 'flex',
                padding: '0px 15px',
                justifyContent: 'space-between'
              }}
              disableGutters>


              <Box sx={{ display: { xs: 'flex', lg: 'none' }, width: "100%" }}>
                <a href="https://www.aaadeliveryservice.com/" style={{
                  width: "inherit",
                  marginRight: 0,
                  flexGrow: 2,
                  maxWidth: "15%",
                  minWidth: "5cm",
                  alignSelf: "center"
                }}>

                  <img style={{ width: "100%" }} src={require('./assets/new-logo.png')} alt="AAA Delivery Service" className="logo-1" />
                </a>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  style={{ color: "black", padding: 0, marginLeft: "auto" }}
                >
                  <MenuIcon style={{ color: "black", padding: 0 }} />
                </IconButton>
                <Menu
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  sx={{
                    "& .MuiMenu-paper": {
                      height: "100%",
                      width: "100%",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      top: "0 !important",
                      left: "0 !important",
                    }
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >



                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 2%", alignItems: "center"
                  }}>
                    <img style={{ width: "50%" }}
                      src={require('./assets/new-logo.png')}
                      alt="AAA Delivery Service"
                      className="logo-1" />
                    <Close style={{ fontSize: "25px" }} onClick={handleCloseNavMenu} />
                  </div>

                  {pages.map((page, index) => {
                    if (page.label === "Industries") {
                      return < IndustrieAccordion handleCloseNavMenu={handleCloseNavMenu} />
                    } else if (page.label === "Delivery") {
                      return <DeliveryAccordion handleCloseNavMenu={handleCloseNavMenu} />
                    } else {
                      return <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Link style={{ color: "black", width: "100%" }} to={page.url}> {page.label}</Link>
                      </MenuItem>
                    }




                  }
                  )}

                  <MenuItem  onClick={handleCloseNavMenu}>
                    <a style={{ color: "black", width: "100%" }} href={"https://aaadelivery.cxtsoftware.net/#/home"}>                       Online Portal
                    </a>
                  </MenuItem>





                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' }, alignItems: "center", justifyContent: 'space-between' }}>
                <a href="https://www.aaadeliveryservice.com/" style={{
                  width: "inherit",
                  marginRight: 0,
                  maxWidth: "15%",
                  alignSelf: "center"
                }}>

                  <img style={{ width: "100%" }} src={require('./assets/new-logo.png')} alt="AAA Delivery Service" className="logo-1" />
                </a>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {pages.map((page, index) => {
                    if (page.label === "Industries") {
                      return <IndustriesDropdown></IndustriesDropdown>
                    } else if (page.label === "Delivery") {
                      return <DeliveryDropdown ></DeliveryDropdown>
                    } else {
                      return <Link
                        style={{ alignSelf: 'center' }}
                        to={page.url}><Button className="nav-btn"
                          key={index}
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: '#090B27', display: 'block' }}
                        >
                          {page.label}
                        </Button>
                      </Link>
                    }
                  })}
                  <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignSelf: "center" }}>
                    <a href="https://aaadelivery.cxtsoftware.net/#/home">
                      <button className="round-button" id="online-portal-button" style={{ width: "fit-content", marginLeft: "20px", backgroundColor: "#367bdc", whiteSpace: "nowrap" }}>
                        Online Portal
                      </button>
                    </a>
                  </Box>
                </div>
              </Box>


            </Toolbar>
            {/* </Container> */}
          </AppBar>


          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/speak-to-a-specialist' element={<SpeakToASpecialist />} />
            <Route path='/what-we-offer' element={<WhatWeOffer />} />
            <Route path='/how-it-works' element={<HowItWorks />} />
            <Route path='/about-us' element={<Exceptional />} />
            <Route path='/locations' element={<Locations />}></Route>
            <Route path='/at-home' element={<SameDayDelivery />}></Route>
            <Route path='/ground-transportation' element={<GroundTransportation />}></Route>
            <Route path='/healthcare' element={<Healthcare />}></Route>
            <Route path='/industries-we-serve' element={<IndustriesWeServe />}></Route>
            <Route path='/carriers' element={<Carrier />}></Route>
            <Route path='/carrier-registration' element={<CarrierRegistration />}></Route>
            <Route path='/schedule-delivery' element={<Schedule />}></Route>
            <Route path='/stat-delivery-services' element={<Stat />}></Route>
            <Route path='/flexible-delivery' element={<Flexible />}></Route>
            <Route path='/overnight-deliveries' element={<Overnight />}></Route>
            <Route path="/privacy" element={<PrivacyPolicy />}> </Route>



          </Routes>
          <Footer />
        </ScrollTopWrapper>
      </Router>


    </>
  );
}

export default App;


function IndustriesDropdown() {
  return <>
    <Box style={{ alignSelf: 'center' }}>
      <Button className="dropdown nav-btn"
        sx={{ my: 2, color: '#090B27' }}
      >
        Industries ▼
        <div className="dropdown-content">
          {industries.map((page, index) => (

            <Link to={page.url}>{page.label}</Link>
          ))}
        </div>
      </Button>

    </Box>
  </>
}

function DeliveryDropdown() {
  return <>
    <Box style={{ alignSelf: 'center' }}>
      <Button className="dropdown nav-btn"
        sx={{ my: 2, color: '#090B27' }}
      >
        What We Offer ▼
        <div className="dropdown-content">
          {delivery.map((page, index) => (
            <Link to={page.url}>{page.label}</Link>
          ))}
        </div>
      </Button>

    </Box>
  </>
}

function IndustrieAccordion({ handleCloseNavMenu }) {
  return (
    <div>
      <Accordion disableGutters style={{ boxShadow: "none", border: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Industries
        </AccordionSummary>
        <AccordionDetails>
          {industries.map((page, index) => (

            <MenuItem key={index} onClick={handleCloseNavMenu}>
              <Link style={{ color: "black", width: "100%" }} to={page.url}> {page.label}</Link>
            </MenuItem>))}
        </AccordionDetails>
      </Accordion>

    </div>)
}

function DeliveryAccordion({ handleCloseNavMenu }) {
  return (
    <div>
      <Accordion disableGutters style={{ boxShadow: "none", border: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What We Offer
        </AccordionSummary>
        <AccordionDetails>
          {delivery.map((page, index) => (

            <MenuItem key={index} onClick={handleCloseNavMenu}>
              <Link style={{ color: "black", width: "100%" }} to={page.url}> {page.label}</Link>
            </MenuItem>))}
        </AccordionDetails>
      </Accordion>

    </div>)
}