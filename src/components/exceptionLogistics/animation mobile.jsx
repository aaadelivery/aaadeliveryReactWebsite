import React, { useRef } from 'react'
import "./style.css";
import { useState } from "react";

import useMountTransition from "../locations/useMountTransition";
import { useIsVisible } from 'react-is-visible'



const svgStyle = {
    width: "100vw",
    height: "80vh",
}

export default function Animation(props){
    const [isMounted, setIsMounted] = useState(true);
    const hasTransitionedIn = useMountTransition(isMounted, 1000);
    const nodeRef = useRef()
    const isVisible = useIsVisible(nodeRef)
    
    return <>

        <div ref={nodeRef} class="works aos-init aos-animate" data-aos={ isVisible ?"works" : "no" } data-aos-offset="400">
            <svg class="works__svg" style={svgStyle} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(20 60)">


                    <g class="point-1 point" data-work-id="1">
                        <g>
                            <circle cx="45vw" cy="70" r="34" fill="#0193D8"></circle>
                            <circle cx="45vw" cy="70" r="34" stroke="#FFF" stroke-width="3px"></circle>
                        </g>
                        <g class="text">
                            <text class="txt" fill="#263238">
                                <tspan x="38vw" y="0">{props.steps[0].split('|').slice(0,1).join(' ') } </tspan>
                                <tspan x="38vw" y="20">{props.steps[0].split('|').slice(1).join(' ') } </tspan>
                            </text>
                            <text class="number" fill="#FFF">
                                <tspan x="42%" y="80">01
                                </tspan>
                            </text>
                        </g>
                    </g>
                    <g class="point-2 point" data-work-id="2">
                        <g>
                            <circle cx="45vw" cy="202" r="34" fill="#34A9DF"></circle>
                            <circle cx="45vw" cy="202" r="34" stroke="#FFF" stroke-width="3px"></circle>
                        </g>
                        <g class="text">
                            <text class="txt" fill="#263238">
                                <tspan x="38VW" y="139">{props.steps[1].split('|').slice(0,1).join(' ') } </tspan>
                                <tspan x="38VW" y="159">{props.steps[1].split('|').slice(1).join(' ') }</tspan>
                            </text>
                            <text class="number" fill="#FFF">
                                <tspan x="42%" y="210">02
                                </tspan>
                            </text>
                        </g>
                    </g>
                    <g class="point-3 point" data-work-id="3">
                        <g>
                            <circle cx="45vw" cy="334" r="34" fill="#37B8CC"></circle>
                            <circle cx="45vw" cy="334" r="34" stroke="#FFF" stroke-width="3px"></circle>
                        </g>
                        <g class="text">
                            <text class="txt" fill="#263238">
                                <tspan x="38vw" y="274">{props.steps[2].split('|').slice(0,1).join(' ') } </tspan>
                                <tspan x="38vw" y="294">{props.steps[2].split('|').slice(1).join(' ') } </tspan>
                            </text>
                            <text class="number" fill="#FFF">
                                <tspan x="42%" y="344">03
                                </tspan>
                            </text>
                        </g>
                    </g>
                    <g class="point-4 point" data-work-id="4">
                        <g>
                            <circle cx="45vw" cy="469" r="34" fill="#39C2BF"></circle>
                            <circle cx="45vw" cy="469" r="34" stroke="#FFF" stroke-width="3px"></circle>

                        </g>
                        <g class="text">
                            <text class="txt" fill="#263238">
                                <tspan x="38vw" y="409">{props.steps[3].split('|').slice(0,1).join(' ') } </tspan>
                                <tspan x="38vw" y="429">{props.steps[3].split('|').slice(1).join(' ') } </tspan>
                            </text>
                            <text class="number" fill="#FFF">
                                <tspan x="42%" y="479">04
                                </tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        
    </>
}