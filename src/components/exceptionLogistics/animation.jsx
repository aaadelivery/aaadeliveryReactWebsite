import React, { useRef } from "react";
import "./style.css";
import { useState } from "react";

import useMountTransition from "../locations/useMountTransition";
import { useIsVisible } from "react-is-visible";

const svgStyle = {
  width: "100%",
  height: "355px",
};

export default function Animation(props) {
  const [isMounted, setIsMounted] = useState(true);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <>
      <div
        ref={nodeRef}
        class="works aos-init aos-animate"
        data-aos={isVisible ? "works" : "no"}
        data-aos-offset="400"
      >
        <svg
          class="works__svg"
          style={svgStyle}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(31 -66)">
            <path
              transform="translate(30 -550)"
              class="works__line"
              id="line-arrow"
              opacity="0.3"
              d="M1 803C96.6535 743.056 257.717 671.991 536 751.5C749.5 812.5 903.12 694.225 1004.36 554.415C1105.6 414.605 1212 1 1212 1"
              stroke="#B1BBC6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <g class="point-1 point" data-work-id="1">
              <g>
                <circle cx="45" cy="245" r="34" fill="#0193D8"></circle>
                <circle
                  cx="45"
                  cy="245"
                  r="34"
                  stroke="#FFF"
                  stroke-width="3px"
                ></circle>
              </g>
              <g class="text">
                <text class="txt" fill="#263238">
                  <tspan x="-17" y="160">
                    {props.steps[0].split("|").slice(0, 1).join(" ")}{" "}
                  </tspan>
                  <tspan x="-17" y="180">
                    {props.steps[0].split("|").slice(1).join(" ")}{" "}
                  </tspan>
                </text>
                <text class="number" fill="#FFF">
                  <tspan x="32" y="252">
                    01
                  </tspan>
                </text>
              </g>
            </g>
            <g class="point-2 point" data-work-id="2">
              <g>
                <circle cx="255" cy="172" r="34" fill="#34A9DF"></circle>
                <circle
                  cx="255"
                  cy="172"
                  r="34"
                  stroke="#FFF"
                  stroke-width="3px"
                ></circle>
              </g>
              <g class="text">
                <text class="txt" fill="#263238">
                  <tspan x="195" y="109">
                    {props.steps[1].split("|").slice(0, 1).join(" ")}{" "}
                  </tspan>
                  <tspan x="195" y="129">
                    {props.steps[1].split("|").slice(1).join(" ")}
                  </tspan>
                </text>
                <text class="number" fill="#FFF">
                  <tspan x="239" y="180">
                    02
                  </tspan>
                </text>
              </g>
            </g>
            <g class="point-3 point" data-work-id="3">
              <g>
                <circle cx="470" cy="180" r="34" fill="#37B8CC"></circle>
                <circle
                  cx="470"
                  cy="180"
                  r="34"
                  stroke="#FFF"
                  stroke-width="3px"
                ></circle>
              </g>
              <g class="text">
                <text class="txt" fill="#263238">
                  <tspan x="410" y="111">
                    {props.steps[2].split("|").slice(0, 1).join(" ")}{" "}
                  </tspan>
                  <tspan x="410" y="131">
                    {props.steps[2].split("|").slice(1).join(" ")}{" "}
                  </tspan>
                </text>
                <text class="number" fill="#FFF">
                  <tspan x="453" y="189">
                    03
                  </tspan>
                </text>
              </g>
            </g>
            <g class="point-4 point" data-work-id="4">
              <g>
                <circle cx="680" cy="215" r="34" fill="#39C2BF"></circle>
                <circle
                  cx="680"
                  cy="215"
                  r="34"
                  stroke="#FFF"
                  stroke-width="3px"
                ></circle>
              </g>
              <g class="text">
                <text class="txt" fill="#263238">
                  <tspan x="620" y="144">
                    {props.steps[3].split("|").slice(0, 1).join(" ")}{" "}
                  </tspan>
                  <tspan x="620" y="164">
                    {props.steps[3].split("|").slice(1).join(" ")}{" "}
                  </tspan>
                </text>
                <text class="number" fill="#FFF">
                  <tspan x="663" y="224">
                    04
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}
