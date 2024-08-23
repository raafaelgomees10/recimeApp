import styled, { keyframes } from "styled-components";
import React from "react";

const strokeAnimation1 = keyframes`
  0% {
    stroke-dashoffset: 530.39px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;
const strokeAnimation2 = keyframes`
  0% {
    stroke-dashoffset: 113px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const strokeAnimation3 = keyframes`
  0% {
    stroke-dashoffset: 118px;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const Pulse = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0);
  }
`;

const SVG = styled.svg`
  transform-origin: center;

  animation: ${Pulse} 1.5s linear 2.9s forwards;

  .svg-elem-1 {
    stroke-dashoffset: 530px;
    stroke-dasharray: 530px;
    animation: ${strokeAnimation1} 2.5s ease-in-out forwards;
  }

  .svg-elem-2 {
    stroke-dashoffset: 113px;
    stroke-dasharray: 113px;
    animation: ${strokeAnimation2} 2.5s ease-in-out 0.22s forwards;
  }

  .svg-elem-3 {
    stroke-dashoffset: 118px;
    stroke-dasharray: 118px;
    animation: ${strokeAnimation3} 2.5s ease-in-out 0.44s forwards;
  }
`;

const Loading = () => {
  return (
    <SVG
      width="152"
      height="158"
      viewBox="0 0 152 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95.4757 1H94.5496C63.8809 1 39.0228 20.2382 39.0228 43.9688V50.691C38.5328 50.3409 38.0047 49.9743 37.4416 49.5951C37.4198 49.5824 37.4035 49.5656 37.3818 49.5553C32.356 46.192 24.7715 42.0704 17.4035 41.796C16.296 41.76 15.1965 41.8083 14.1107 41.9529C11.7385 42.28 8.78428 43.1767 6.15494 45.4271L6.14699 45.4336C4.76856 46.6175 3.4796 48.1681 2.41014 50.2027C2.09323 50.8081 1.83067 51.42 1.62748 52.0445C-0.286935 57.7757 2.36666 64.2691 7.04337 71.0373C10.975 76.7329 16.3391 82.6274 21.6279 88.4378C29.5753 97.1695 37.7798 106.182 38.9605 112.449C38.9902 112.571 39.0065 112.695 39.0203 112.812C39.0796 113.191 39.0203 113.564 39.0203 113.92V126.996C38.9985 127.165 38.9985 127.34 38.9985 127.509C38.9985 127.679 38.9985 127.859 39.0203 128.029C39.0662 129.125 39.2611 130.198 39.6077 131.229C41.7332 137.66 49.2801 142.404 58.2514 142.404H61.2407V135.35H58.2539C54.3979 135.35 51.0457 133.682 49.3344 131.229C48.5518 130.12 48.1132 128.85 48.1132 127.509C48.1132 126.319 48.4598 125.19 49.0769 124.175C50.6962 121.512 54.2085 119.67 58.2514 119.67H141.839C146.903 119.67 151 116.5 151 112.588V43.9688C151.003 20.2382 126.142 1 95.4757 1Z"
        stroke="url(#paint0_linear_364_30)"
        className="svg-elem-1"
      ></path>
      <path
        d="M146.121 135.333H139.495H101V142.412H139.495H146.358C149.059 142.412 151.222 140.653 150.982 138.556C150.772 136.696 148.568 135.333 146.121 135.333Z"
        stroke="url(#paint1_linear_364_30)"
        className="svg-elem-2"
      ></path>
      <path
        d="M66 130.167V153.21C66 154.519 66.7861 155.8 68.2481 156.527C70.3495 157.563 73.0379 157.333 74.7486 156.065L81.2496 151.239C81.2658 151.223 81.2966 151.223 81.3184 151.239L87.966 156.174C88.6363 156.677 89.4613 157.072 90.386 157.243C91.7175 157.483 93.044 157.351 94.2148 156.86C95.879 156.168 96.8036 154.797 96.8036 153.385V130.167H66Z"
        stroke="url(#paint2_linear_364_30)"
        className="svg-elem-3"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_364_30"
          x1="151"
          y1="142.404"
          x2="9.84252"
          y2="-7.33555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7A00"></stop>
          <stop offset="1" stopColor="#FFC531"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_364_30"
          x1="150.998"
          y1="142.411"
          x2="9.43839"
          y2="-9.98248"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7A00"></stop>
          <stop offset="1" stopColor="#FFC531"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_364_30"
          x1="152.383"
          y1="144.781"
          x2="14.3878"
          y2="-7.81376"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7A00"></stop>
          <stop offset="1" stopColor="#FFC531"></stop>
        </linearGradient>
      </defs>
    </SVG>
  );
};

export default Loading;
