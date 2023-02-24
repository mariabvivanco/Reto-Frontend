import * as React from 'react';

const Right = () => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"

  >
    <path
      d="M0 8a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
      fill="#EBF0E9"
    />
    <g clipPath="url(#a)">
      <path
        d="m13 23 7-7-7-7"
        stroke="#739F07"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="rotate(-90 16 8)" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Right;
