import React from "react";

type Props = {};

function WatchTimeIcon({}: Props) {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 9.00002V12L9.5 13.5M12.5105 17.35L12.1605 21.18C12.1154 21.6787 11.885 22.1423 11.5147 22.4792C11.1444 22.8162 10.6611 23.002 10.1605 23H5.83047C5.3298 23.002 4.84657 22.8162 4.47627 22.4792C4.10597 22.1423 3.87553 21.6787 3.83047 21.18L3.48047 17.35M3.49047 6.65002L3.84047 2.82002C3.88537 2.32309 4.1144 1.8609 4.48258 1.52417C4.85077 1.18744 5.33152 1.00049 5.83047 1.00002H10.1805C10.6811 0.997985 11.1644 1.18381 11.5347 1.52079C11.905 1.85776 12.1354 2.32137 12.1805 2.82002L12.5305 6.65002M15 12C15 15.866 11.866 19 8 19C4.13401 19 1 15.866 1 12C1 8.13402 4.13401 5.00002 8 5.00002C11.866 5.00002 15 8.13402 15 12Z"
        stroke="#175F70"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default WatchTimeIcon;
