import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AnimationOnScroll from 'react-animate-on-scroll';
import "../assets/animate.css";
import Box from "@mui/material/Box";
import { useState , useEffect ,useRef} from "react";
import '../assets/animate-path.css'




export   function MapPath(){


    const [start,setStart] = useState(false)
    const delay = "3s"
 



    return <>
        <AnimationOnScroll initiallyVisible={true} animateIn="fade" afterAnimatedIn={() => setStart(true) }>
            <svg className= { start ? "road-map image active" : "road-map image" } width="100%" viewBox="0 0 667 398" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <rect id="path-1" x="0" y="0" width="667" height="398" rx="24"></rect>
                                        <filter x="-8.4%" y="-11.6%" width="116.8%" height="128.1%" filterUnits="objectBoundingBox" id="filter-3">
                                            <feOffset dx="0" dy="10" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="17" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.0969733392 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <rect x="-153" y="-333" width="1192" height="1192" id="rect-4"></rect>
                                        <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-5">
                                            <stop stop-color="#09B4AF" offset="0%"></stop>
                                            <stop stop-color="#019AE2" offset="100%"></stop>
                                        </linearGradient>
                                        <filter x="-191.2%" y="-161.8%" width="482.4%" height="482.4%" filterUnits="objectBoundingBox" id="filter-7">
                                            <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                                            <feOffset dx="0" dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.111724213 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <filter x="-191.2%" y="-161.8%" width="482.4%" height="482.4%" filterUnits="objectBoundingBox" id="filter-9">
                                            <feMorphology radius="12" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                                            <feOffset dx="0" dy="5" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="6" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.111724213 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <rect id="path-10" x="0" y="0" width="86" height="26" rx="4"></rect>
                                        <filter x="-70.3%" y="-228.8%" width="240.7%" height="565.4%" filterUnits="objectBoundingBox" id="filter-11">
                                            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feColorMatrix values="0 0 0 0 0.0887449424   0 0 0 0 0.0899591403   0 0 0 0 0.0966372283  0 0 0 0.189084353 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <rect id="path-12" x="0" y="0" width="86" height="26" rx="4"></rect>
                                        <filter x="-69.8%" y="-230.8%" width="239.5%" height="561.5%" filterUnits="objectBoundingBox" id="filter-13">
                                            <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feColorMatrix values="0 0 0 0 0.262745098   0 0 0 0 0.28627451   0 0 0 0 0.415686275  0 0 0 0.1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <circle id="path-14" cx="20" cy="20" r="20"></circle>
                                        <filter x="-78.8%" y="-76.2%" width="257.5%" height="257.5%" filterUnits="objectBoundingBox" id="filter-15">
                                            <feMorphology radius="1" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                                            <feOffset dx="0" dy="1" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                                            <feColorMatrix values="0 0 0 0 0.0686707428   0 0 0 0 0.0686707428   0 0 0 0 0.0686707428  0 0 0 0.249153191 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                        <path d="M6.99655893,86 C3.13246613,86 0,82.8628618 0,78.9987227 L0,7.00127733 C0,3.13457863 3.12859527,0 7.00390625,0 L155.996094,0 C159.864244,0 163,3.13713819 163,7.00127733 L163,78.9987227 C163,82.8654214 159.857021,86 155.999873,86 L90,86 L81.5,97 L73,86 L6.99655893,86 Z" id="path-16"></path>
                                        <filter x="-8.6%" y="-13.4%" width="120.9%" height="135.1%" filterUnits="objectBoundingBox" id="filter-17">
                                            <feOffset dx="3" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                            <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                                            <feColorMatrix values="0 0 0 0 0.674847147   0 0 0 0 0.674847147   0 0 0 0 0.674847147  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                                        </filter>
                                    </defs>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <image href={require('../assets/background-map.jpg')} x="0" y="0" height="398" width="667"></image>

                                        <g id="Artboard">

                                            <path className="road-map__road" id="road" stroke="url(#linearGradient-5)" stroke-width="7" d="M93,205 L114.838866,246.385673 C119.858626,255.898354 129.731052,261.851405 140.486937,261.851405 L264.192061,261.851405 C273.932649,261.851405 283.02262,256.961343 288.390705,248.833446 L291.779876,243.701852 C297.238581,235.436746 306.538137,230.529329 316.441893,230.687595 L467.862449,233.10736 C479.26753,233.289618 488.777172,241.884263 490.108398,253.212851 C491.380222,264.035925 501.185074,271.778744 512.008148,270.50692 C512.071254,270.499504 512.134325,270.491784 512.197357,270.483759 L580,261.851405 L580,261.851405"></path>
                                            <g id="Group-41" transform="translate(50, 158)">
                                                <g className="road-map__tooltip-pickup">
                                                    <g id="Rectangle">
                                                        <use fill="black" fill-opacity="1" filter="url(#filter-11)" href="#path-10"></use>
                                                        <use fill="#FFFFFF" fill-rule="evenodd" href="#path-10"></use>
                                                    </g>
                                                    <text id="Pick-Up" fill="#2C2C2C">
                                                        <tspan x="13" y="17" font-weight="bold">Pick-Up</tspan>
                                                    </text>
                                                </g>
                                            </g>
                                            <animateMotion id="motionTrack" xlinkHref="#Group-41" dur="12s"  begin="0" fill="remove" keyPoints="1;0" keyTimes="0;1" repeatCount="1">
                                                <mpath xlinkHref="#road"></mpath>
                                            </animateMotion>

                                            <g id="Group-37" transform="translate(545, 214)">
                                                <g className="road-map__tooltip-delivery">
                                                    <g id="Rectangle">
                                                        <use fill="black" fill-opacity="1" filter="url(#filter-13)" href="#path-12"></use>
                                                        <use fill="#FFFFFF" fill-rule="evenodd" href="#path-12"></use>
                                                    </g>
                                                    <text id="Delivery" fill="#2C2C2C">
                                                        <tspan x="12" y="17" font-weight="bold">Delivery</tspan>
                                                    </text>
                                                </g>
                                            </g>

                                            <g className="road-map__oval-pickup">
                                                <circle fill="black" filter="url(#filter-7)" cx="92" cy="202" r="0"></circle>
                                                <circle opacity="0.17" fill="#FFFFFF" cx="92" cy="202" r="20.5"></circle>
                                                <circle opacity="0.44" fill="#FFFFFF" cx="92" cy="202" r="14.5"></circle>
                                                <circle stroke="#FFFFFF" stroke-width="3" fill="#009EE8" fill-rule="evenodd" cx="92" cy="202" r="10"></circle>
                                            </g>
                                            <g className="road-map__oval-delivery">
                                                <circle fill="black" filter="url(#filter-9)" cx="588" cy="259" r="0"></circle>
                                                <circle opacity="0.17" fill="#FFFFFF" cx="588" cy="259" r="20.5"></circle>
                                                <circle opacity="0.44" fill="#FFFFFF" cx="588" cy="259" r="14.5"></circle>
                                                <circle stroke="#FFFFFF" stroke-width="3" fill="#09B4AF" fill-rule="evenodd" cx="588" cy="259" r="10"></circle>
                                            </g>

                                         


                                            <g id="track-tooltip" className="road-map__track-tooltip">
                                                <g >
                                                    <use fill="black" fill-opacity="1" filter="url(#filter-17)" href="#path-16"></use>
                                                    <use fill="#FFFFFF" fill-rule="evenodd" href="#path-16"></use>
                                                    <text fill="#2C2C2C">
                                                        <tspan x="16" y="25">Unit#</tspan>
                                                    </text>
                                                    <text fill="#2C2C2C">
                                                        <tspan x="69" y="25" font-weight="bold">1394</tspan>
                                                    </text>
                                                    <text fill="#2C2C2C">
                                                        <tspan x="16" y="48">ETA</tspan>
                                                    </text>
                                                    <text fill="#2C2C2C">
                                                        <tspan id="time-eta" x="69" y="48" font-weight="bold">4 hr 16 min</tspan>
                                                    </text>
                                                    <text fill="#2C2C2C">
                                                        <tspan x="16" y="71">Speed</tspan>
                                                    </text>
                                                    <text fill="#2C2C2C">
                                                        <tspan x="69" y="71" font-weight="bold">89 mi/hr</tspan>
                                                    </text>
                                                </g>
                                            </g>



                                            <g id="track" className="road-map__track">
                                                <g>
                                                    <use fill="black" fill-opacity="1" filter="url(#filter-15)" href="#path-14"></use>
                                                    <use stroke="#03A4C9" stroke-width="2" fill="#FFFFFF" fill-rule="evenodd" href="#path-14"></use>
                                                    <path d="M30.7123847,19.2776021 C30.7065212,19.2136011 30.6893467,19.1511485 30.6616601,19.0931489 C30.6561265,19.0820817 30.6616601,19.06917 30.6515152,19.0581028 L28.8309618,16.0247694 C28.5378181,15.5376116 28.0115045,15.2389592 27.4429513,15.2371542 L23.7538867,15.2371542 L23.7538867,14.6837945 C23.7518535,13.2020587 22.5509063,12.0015241 21.06917,12 L12.0180501,12 C10.5348745,12.0015269 9.33333333,13.2043072 9.33333333,14.6874835 L9.33333333,25.2575758 C9.33333333,25.4043359 9.39163356,25.5450851 9.49540863,25.6488601 C9.5991837,25.7526352 9.7399329,25.8109354 9.88669302,25.8109354 L11.6039526,25.8109354 C11.8628477,26.9797763 12.899207,27.8117028 14.0963768,27.8117028 C15.2935466,27.8117028 16.3299059,26.9797763 16.5888011,25.8109354 L24.1956522,25.8109354 C24.4568819,26.9763341 25.491453,27.8046736 26.6857708,27.8046736 C27.8800885,27.8046736 28.9146596,26.9763341 29.1758893,25.8109354 L30.1765481,25.8109354 C30.3233082,25.8109354 30.4640574,25.7526352 30.5678325,25.6488601 C30.6716075,25.5450851 30.7299078,25.4043359 30.7299078,25.2575758 L30.7299078,19.3550725 C30.725998,19.3288498 30.7201408,19.3029547 30.7123847,19.2776021 Z M15.5457181,25.2631094 C15.5416507,26.0435161 14.9067844,26.6734386 14.1263697,26.6714099 C13.345955,26.6693713 12.7143802,26.0361486 12.7143802,25.2557312 C12.7143802,24.4753139 13.345955,23.8420912 14.1263697,23.8400526 C14.9067844,23.8380238 15.5416507,24.4679463 15.5457181,25.2483531 L15.5457181,25.2566535 L15.5457181,25.2631094 Z M22.6471673,15.7905138 L22.6471673,24.7042161 L16.5906456,24.7042161 C16.3333116,23.5329066 15.295621,22.6984461 14.0963768,22.6984461 C12.8971326,22.6984461 11.859442,23.5329066 11.602108,24.7042161 L10.4400527,24.7042161 L10.4400527,14.6874835 C10.4410691,13.8169104 11.1465546,13.1114249 12.0171278,13.1104084 L21.072859,13.1104084 C21.9434322,13.1114249 22.6489177,13.8169104 22.6499341,14.6874835 L22.6471673,15.7905138 Z M23.7538867,16.3438735 L27.4429513,16.3438735 C27.6227345,16.344497 27.7891591,16.4388975 27.8819499,16.5928854 L29.198946,18.7897233 L23.7575758,18.7897233 L23.7538867,16.3438735 Z M26.6839262,26.7055336 C25.8859534,26.7024913 25.2402513,26.055553 25.2387352,25.2575758 L25.2387352,25.2575758 C25.2392445,24.4569923 25.8885684,23.8083563 26.689152,23.8086956 C27.4897356,23.8090352 28.1385092,24.4582216 28.1383396,25.2588053 C28.1381699,26.0593889 27.4891212,26.7083004 26.6885375,26.7083004 L26.6839262,26.7055336 Z M29.6231884,24.7042161 L29.1888011,24.7042161 C28.929684,23.5334975 27.8917389,22.7001631 26.6926877,22.7001631 C25.4936366,22.7001631 24.4556915,23.5334975 24.1965744,24.7042161 L23.7575758,24.7042161 L23.7575758,19.9001318 L29.6231884,19.9001318 L29.6231884,24.7042161 Z" id="Shape" stroke="#00A8CD" stroke-width="0.5" fill="#04A5C9"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
            </svg>

          

        </AnimationOnScroll>
</>
}

export default function VideoMapPath(){
    return <>
                <video   autoPlay loop  muted style={{borderRadius:"5%"  , width:"100%"  }}>
                <source src={require('../assets/map.mp4')}  type="video/mp4" />

                        Your browser does not support the video tag.
            </video>
    </>
}