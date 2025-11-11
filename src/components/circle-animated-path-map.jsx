import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AnimationOnScroll from 'react-animate-on-scroll';
import "../assets/animate.css";
import Box from "@mui/material/Box";
import { useState } from "react";
import '../assets/animate-path.css'
import circle_map_image from '../assets/circle-background-map.png';



export  default function MapPath(){
    const [status,setStatus] = useState("road-map image" )
    return <>
        <AnimationOnScroll style={{   backgroundImage: `url(${circle_map_image})`  , backgroundSize: "100%", backgroundRepeat: "no-repeat"}} initiallyVisible={true} animateIn="fade" afterAnimatedIn={() => setStatus("road-map image active")}>
            <svg className= { status } style={{boxShadow:"none"}} width="100%" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
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

                                        <g id="Artboard" style={{transform:"scale(0.6,0.6)" , transformOrigin:"center"}}>

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

          
                                        </g>
                                    </g>
            </svg>
        </AnimationOnScroll>
</>
}