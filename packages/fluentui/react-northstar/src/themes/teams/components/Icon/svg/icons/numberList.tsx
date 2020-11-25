import * as React from 'react';
import cx from 'classnames';
import { teamsIconClassNames } from '../teamsIconClassNames';
import { TeamsSvgIconSpec } from '../../svg/types';

export default {
  icon: ({ classes, rtl }) => {
    return rtl ? (
      <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
        <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
          <path d="M17.0004 1.5C17.0004 1.26811 16.8409 1.06665 16.6152 1.01337C16.3864 0.959365 16.1597 1.07489 16.0517 1.27908C16.0297 1.32097 16.0056 1.36174 15.9808 1.40201C15.9271 1.4893 15.8449 1.61261 15.7349 1.75015C15.512 2.02877 15.1904 2.34598 14.7767 2.55278C14.5298 2.67628 14.4296 2.97661 14.5531 3.2236C14.6766 3.47059 14.977 3.57071 15.224 3.44721C15.5238 3.29731 15.7823 3.11091 16.0004 2.91823V5.5C16.0004 5.77614 16.2242 6 16.5004 6C16.7765 6 17.0004 5.77614 17.0004 5.5V1.5Z" />
          <path d="M14.6467 7.64651C14.4514 7.84179 14.4514 8.15837 14.6467 8.35362C14.8408 8.5477 15.1548 8.54883 15.3503 8.35703L15.3569 8.35101C15.3648 8.34391 15.3794 8.33132 15.4001 8.315C15.4419 8.28217 15.5073 8.23546 15.5935 8.18805C15.7654 8.09341 16.0106 8.00085 16.3132 8.00001C16.5405 8.00453 16.7241 8.06477 16.8376 8.14879C16.9333 8.21968 17.0002 8.31947 17.0002 8.50009C17.0002 8.70237 16.93 8.81922 16.7895 8.93631C16.6382 9.06244 16.4416 9.15973 16.1713 9.29351C16.1255 9.3162 16.0769 9.34027 16.0266 9.36539C15.7129 9.52225 15.3239 9.72887 15.0209 10.0622C14.6994 10.4158 14.5002 10.8809 14.5002 11.5001C14.5002 11.7763 14.7241 12.0001 15.0002 12.0001H17.4997C17.7758 12.0001 18.0002 11.7763 18.0002 11.5001C18.0002 11.224 17.7764 11.0001 17.5002 11.0001H15.5895C15.6348 10.8934 15.6944 10.808 15.7608 10.7349C15.9266 10.5526 16.1626 10.4154 16.4738 10.2598C16.5123 10.2406 16.5528 10.2207 16.5948 10.2001C16.8568 10.0716 17.1788 9.91363 17.4297 9.70453C17.758 9.43099 18.0002 9.04783 18.0002 8.50009C18.0002 7.99565 17.7775 7.60048 17.4327 7.34515C17.1063 7.10344 16.7001 7.00638 16.3259 7.00007L16.3175 7C15.8048 6.99998 15.3929 7.15701 15.1113 7.31196C14.9703 7.38957 14.8597 7.46787 14.7822 7.5288C14.7433 7.55936 14.7124 7.58584 14.6898 7.60609C14.6784 7.61622 14.6692 7.62483 14.662 7.63164L14.6528 7.64051L14.6493 7.64388L14.6479 7.64529L14.6467 7.64651Z" />
          <path d="M15.7504 15.5C15.7504 15.2239 15.9742 15 16.2504 15C16.5931 15 16.7826 14.9033 16.878 14.8169C16.9723 14.7315 17.011 14.6256 17.007 14.5187C16.9997 14.3253 16.8211 14 16.2504 14C15.8378 14 15.6242 14.1017 15.5277 14.166C15.4771 14.1997 15.45 14.229 15.4392 14.242L15.4351 14.2471C15.4393 14.2396 15.4433 14.232 15.4472 14.2243L15.4462 14.2263L15.4449 14.2289L15.4425 14.2335L15.4384 14.2409C15.4361 14.245 15.4336 14.2489 15.4336 14.2489L15.433 14.2498L15.4351 14.2471C15.3047 14.4768 15.0158 14.5667 14.7767 14.4472C14.5298 14.3237 14.4296 14.0234 14.5531 13.7764L14.5539 13.775L14.5546 13.7735L14.5562 13.7704L14.5597 13.7636L14.5684 13.7479C14.5749 13.7364 14.5829 13.7231 14.5925 13.7081C14.6117 13.6783 14.6374 13.642 14.6709 13.6018C14.7382 13.521 14.8361 13.4253 14.973 13.334C15.2515 13.1483 15.6629 13 16.2504 13C17.2796 13 17.976 13.6747 18.0063 14.4813C18.02 14.8487 17.8882 15.217 17.6098 15.5C17.8882 15.783 18.02 16.1513 18.0063 16.5187C17.976 17.3253 17.2796 18 16.2504 18C15.6629 18 15.2515 17.8517 14.973 17.666C14.8361 17.5747 14.7382 17.479 14.6709 17.3982C14.6374 17.358 14.6117 17.3217 14.5925 17.2919C14.5829 17.2769 14.5749 17.2636 14.5684 17.2521L14.5597 17.2364L14.5562 17.2296L14.5546 17.2265L14.5539 17.225L14.5531 17.2236C14.4296 16.9766 14.5298 16.6763 14.7767 16.5528C15.0158 16.4333 15.3047 16.5232 15.4351 16.7529L15.4392 16.758C15.45 16.771 15.4771 16.8003 15.5277 16.834C15.6242 16.8983 15.8378 17 16.2504 17C16.8211 17 16.9997 16.6747 17.007 16.4813C17.011 16.3744 16.9723 16.2685 16.878 16.1831C16.7826 16.0967 16.5931 16 16.2504 16C15.9742 16 15.7504 15.7761 15.7504 15.5Z" />
          <path d="M3.5 4C3.22386 4 3 4.22386 3 4.5C3 4.77614 3.22386 5 3.5 5H11.5C11.7761 5 12 4.77614 12 4.5C12 4.22386 11.7761 4 11.5 4H3.5Z" />
          <path d="M3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10H11.5C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9H3.5Z" />
          <path d="M3.5 14C3.22386 14 3 14.2239 3 14.5C3 14.7761 3.22386 15 3.5 15H11.5C11.7761 15 12 14.7761 12 14.5C12 14.2239 11.7761 14 11.5 14H3.5Z" />
        </g>
        <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
          <path d="M17.0001 1.5C17.0001 1.26811 16.8407 1.06665 16.615 1.01337C16.3862 0.959365 16.1594 1.07489 16.0515 1.27908C16.0295 1.32097 16.0053 1.36174 15.9805 1.40201C15.9268 1.4893 15.8447 1.61261 15.7347 1.75015C15.5118 2.02877 15.1901 2.34598 14.7765 2.55278C14.5295 2.67628 14.4294 2.97661 14.5529 3.2236C14.6764 3.47059 14.9767 3.57071 15.2237 3.44721C15.5235 3.29731 15.782 3.11091 16.0001 2.91823V5.5C16.0001 5.77614 16.224 6 16.5001 6C16.7763 6 17.0001 5.77614 17.0001 5.5V1.5Z" />
          <path d="M14.6464 7.64651C14.4512 7.84179 14.4512 8.15837 14.6465 8.35362C14.8406 8.5477 15.1546 8.54883 15.3501 8.35703L15.3567 8.35101C15.3646 8.34391 15.3791 8.33132 15.3999 8.315C15.4417 8.28217 15.5071 8.23546 15.5932 8.18805C15.7652 8.09341 16.0103 8.00085 16.3129 8.00001C16.5402 8.00453 16.7239 8.06477 16.8373 8.14879C16.9331 8.21968 17 8.31947 17 8.50009C17 8.70237 16.9298 8.81922 16.7893 8.93631C16.6379 9.06244 16.4414 9.15973 16.1711 9.29351C16.1252 9.3162 16.0766 9.34027 16.0264 9.36539C15.7127 9.52225 15.3237 9.72887 15.0207 10.0622C14.6992 10.4158 14.5 10.8809 14.5 11.5001C14.5 11.7763 14.7239 12.0001 15 12.0001H17.4994C17.7756 12.0001 18 11.7763 18 11.5001C18 11.224 17.7761 11.0001 17.5 11.0001H15.5892C15.6346 10.8934 15.6941 10.808 15.7606 10.7349C15.9263 10.5526 16.1623 10.4154 16.4736 10.2598C16.5121 10.2406 16.5526 10.2207 16.5946 10.2001C16.8566 10.0716 17.1785 9.91363 17.4295 9.70453C17.7577 9.43099 18 9.04783 18 8.50009C18 7.99565 17.7772 7.60048 17.4324 7.34515C17.106 7.10344 16.6999 7.00638 16.3256 7.00007L16.3172 7C15.8046 6.99998 15.3926 7.15701 15.1111 7.31196C14.9701 7.38957 14.8594 7.46787 14.7819 7.5288C14.743 7.55936 14.7121 7.58584 14.6895 7.60609C14.6782 7.61622 14.6689 7.62483 14.6617 7.63164L14.6525 7.64051L14.6491 7.64388L14.6476 7.64529L14.6464 7.64651Z" />
          <path d="M15.7501 15.5C15.7501 15.2239 15.974 15 16.2501 15C16.5929 15 16.7823 14.9033 16.8778 14.8169C16.972 14.7315 17.0107 14.6256 17.0067 14.5187C16.9995 14.3253 16.8208 14 16.2501 14C15.8376 14 15.624 14.1017 15.5275 14.166C15.4769 14.1997 15.4497 14.229 15.4389 14.242L15.4348 14.2471C15.439 14.2396 15.4431 14.232 15.447 14.2243L15.446 14.2263L15.4447 14.2289L15.4422 14.2335L15.4382 14.2409C15.4358 14.245 15.4334 14.2489 15.4334 14.2489L15.4328 14.2498L15.4348 14.2471C15.3045 14.4768 15.0155 14.5667 14.7765 14.4472C14.5295 14.3237 14.4294 14.0234 14.5529 13.7764L14.5536 13.775L14.5544 13.7735L14.5559 13.7704L14.5595 13.7636L14.5682 13.7479C14.5746 13.7364 14.5826 13.7231 14.5922 13.7081C14.6114 13.6783 14.6372 13.642 14.6707 13.6018C14.738 13.521 14.8358 13.4253 14.9728 13.334C15.2513 13.1483 15.6626 13 16.2501 13C17.2794 13 17.9758 13.6747 18.006 14.4813C18.0198 14.8487 17.888 15.217 17.6096 15.5C17.888 15.783 18.0198 16.1513 18.006 16.5187C17.9758 17.3253 17.2794 18 16.2501 18C15.6626 18 15.2513 17.8517 14.9728 17.666C14.8358 17.5747 14.738 17.479 14.6707 17.3982C14.6372 17.358 14.6114 17.3217 14.5922 17.2919C14.5826 17.2769 14.5746 17.2636 14.5682 17.2521L14.5595 17.2364L14.5559 17.2296L14.5544 17.2265L14.5536 17.225L14.5529 17.2236C14.4294 16.9766 14.5295 16.6763 14.7765 16.5528C15.0155 16.4333 15.3045 16.5232 15.4348 16.7529L15.4389 16.758C15.4497 16.771 15.4769 16.8003 15.5275 16.834C15.624 16.8983 15.8376 17 16.2501 17C16.8208 17 16.9995 16.6747 17.0067 16.4813C17.0107 16.3744 16.972 16.2685 16.8778 16.1831C16.7823 16.0967 16.5929 16 16.2501 16C15.974 16 15.7501 15.7761 15.7501 15.5Z" />
          <path d="M3.75 4C3.33579 4 3 4.33579 3 4.75C3 5.16421 3.33579 5.5 3.75 5.5H11.25C11.6642 5.5 12 5.16421 12 4.75C12 4.33579 11.6642 4 11.25 4H3.75Z" />
          <path d="M3.75 9C3.33579 9 3 9.33579 3 9.75C3 10.1642 3.33579 10.5 3.75 10.5H11.25C11.6642 10.5 12 10.1642 12 9.75C12 9.33579 11.6642 9 11.25 9H3.75Z" />
          <path d="M3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5H11.25C11.6642 15.5 12 15.1642 12 14.75C12 14.3358 11.6642 14 11.25 14H3.75Z" />
        </g>
      </svg>
    ) : (
      <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
        <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
          <path d="M5.00011 1.5C5.00011 1.26811 4.84067 1.06665 4.61499 1.01337C4.38621 0.959365 4.15942 1.07489 4.05148 1.27908C4.0295 1.32097 4.00531 1.36174 3.98053 1.40201C3.92681 1.4893 3.8447 1.61261 3.73468 1.75015C3.51178 2.02877 3.19011 2.34598 2.7765 2.55278C2.52951 2.67628 2.4294 2.97661 2.5529 3.2236C2.67639 3.47059 2.97673 3.57071 3.22372 3.44721C3.52353 3.29731 3.78202 3.11091 4.00011 2.91823V5.5C4.00011 5.77614 4.22397 6 4.50011 6C4.77625 6 5.00011 5.77614 5.00011 5.5V1.5Z" />
          <path d="M8.75 4C8.33579 4 8 4.33579 8 4.75C8 5.16421 8.33579 5.5 8.75 5.5H16.25C16.6642 5.5 17 5.16421 17 4.75C17 4.33579 16.6642 4 16.25 4H8.75Z" />
          <path d="M8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H16.25C16.6642 10.5 17 10.1642 17 9.75C17 9.33579 16.6642 9 16.25 9H8.75Z" />
          <path d="M8 14.75C8 14.3358 8.33579 14 8.75 14H16.25C16.6642 14 17 14.3358 17 14.75C17 15.1642 16.6642 15.5 16.25 15.5H8.75C8.33579 15.5 8 15.1642 8 14.75Z" />
          <path d="M2.64642 7.64651C2.45117 7.84179 2.4512 8.15837 2.64647 8.35362C2.84059 8.5477 3.15457 8.54883 3.35008 8.35703L3.35665 8.35101C3.36458 8.34391 3.37911 8.33132 3.39988 8.315C3.44165 8.28217 3.50709 8.23546 3.59323 8.18805C3.76518 8.09341 4.01033 8.00085 4.31294 8.00001C4.54021 8.00453 4.72387 8.06477 4.83732 8.14879C4.93306 8.21968 5 8.31947 5 8.50009C5 8.70237 4.92979 8.81922 4.78928 8.93631C4.63792 9.06244 4.44136 9.15973 4.17109 9.29351C4.12524 9.3162 4.07662 9.34027 4.0264 9.36539C3.71266 9.52225 3.32368 9.72887 3.02065 10.0622C2.69919 10.4158 2.5 10.8809 2.5 11.5001C2.5 11.7763 2.72386 12.0001 3 12.0001H5.49944C5.77558 12.0001 6 11.7763 6 11.5001C6 11.224 5.77614 11.0001 5.5 11.0001H3.58925C3.63458 10.8934 3.69413 10.808 3.7606 10.7349C3.92632 10.5526 4.16234 10.4154 4.4736 10.2598C4.51228 10.2405 4.55304 10.2205 4.59534 10.1997C4.8573 10.0712 5.17854 9.91364 5.42947 9.70453C5.75771 9.43099 6 9.04783 6 8.50009C6 7.99565 5.77725 7.60048 5.43244 7.34515C5.10604 7.10344 4.69985 7.00638 4.32563 7.00007L4.31722 7C3.80459 6.99998 3.39261 7.15701 3.11107 7.31196C2.97006 7.38957 2.85942 7.46787 2.78191 7.5288C2.74303 7.55936 2.71212 7.58584 2.68951 7.60609C2.67819 7.61622 2.66892 7.62483 2.66173 7.63164L2.65251 7.64051L2.64907 7.64388L2.64765 7.64529L2.64642 7.64651ZM2.66173 7.63164L2.64642 7.64651C2.64642 7.64651 2.7471 7.55676 2.66173 7.63164Z" />
          <path d="M3.75011 15.5C3.75011 15.2239 3.97397 15 4.25011 15C4.5929 15 4.78233 14.9033 4.87775 14.8169C4.97201 14.7315 5.01072 14.6256 5.00671 14.5187C4.99946 14.3253 4.82083 14 4.25011 14C3.8376 14 3.62396 14.1017 3.52746 14.166C3.4769 14.1997 3.44973 14.229 3.43891 14.242L3.43482 14.2471C3.30449 14.4768 3.01552 14.5667 2.7765 14.4472C2.52951 14.3237 2.4294 14.0234 2.5529 13.7764L2.55361 13.775L2.55435 13.7735L2.55594 13.7704L2.55948 13.7636L2.56815 13.7479C2.57465 13.7364 2.58262 13.7231 2.59222 13.7081C2.61141 13.6783 2.63716 13.642 2.67069 13.6018C2.73799 13.521 2.83582 13.4253 2.97276 13.334C3.25126 13.1483 3.66262 13 4.25011 13C5.27939 13 5.97576 13.6747 6.00601 14.4813C6.01979 14.8487 5.88798 15.217 5.60959 15.5C5.88798 15.783 6.01979 16.1513 6.00601 16.5187C5.97576 17.3253 5.27939 18 4.25011 18C3.66262 18 3.25126 17.8517 2.97276 17.666C2.83582 17.5747 2.73799 17.479 2.67069 17.3982C2.63716 17.358 2.61141 17.3217 2.59222 17.2919C2.58262 17.2769 2.57465 17.2636 2.56815 17.2521L2.55948 17.2364L2.55594 17.2296L2.55435 17.2265L2.55361 17.225L2.5529 17.2236C2.4294 16.9766 2.52951 16.6763 2.7765 16.5528C3.01552 16.4333 3.30449 16.5232 3.43482 16.7529L3.43891 16.758C3.44973 16.771 3.4769 16.8003 3.52746 16.834C3.62396 16.8983 3.8376 17 4.25011 17C4.82083 17 4.99946 16.6747 5.00671 16.4813C5.01072 16.3744 4.97201 16.2685 4.87775 16.1831C4.78233 16.0967 4.5929 16 4.25011 16C3.97397 16 3.75011 15.7761 3.75011 15.5ZM3.43482 14.2471C3.43904 14.2396 3.44309 14.232 3.44698 14.2243L3.44596 14.2263L3.44465 14.2289L3.44223 14.2335L3.43817 14.2409C3.43583 14.245 3.43339 14.2489 3.43339 14.2489L3.43279 14.2498L3.43482 14.2471Z" />
        </g>
        <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
          <path d="M5.00011 1.5C5.00011 1.26811 4.84067 1.06665 4.61499 1.01337C4.38621 0.959365 4.15942 1.07489 4.05148 1.27908C4.0295 1.32097 4.00531 1.36174 3.98053 1.40201C3.92681 1.4893 3.8447 1.61261 3.73468 1.75015C3.51178 2.02877 3.19011 2.34598 2.7765 2.55278C2.52951 2.67628 2.4294 2.97661 2.5529 3.2236C2.67639 3.47059 2.97673 3.57071 3.22372 3.44721C3.52353 3.29731 3.78202 3.11091 4.00011 2.91823V5.5C4.00011 5.77614 4.22397 6 4.50011 6C4.77625 6 5.00011 5.77614 5.00011 5.5V1.5Z" />
          <path d="M8.75 4C8.33579 4 8 4.33579 8 4.75C8 5.16421 8.33579 5.5 8.75 5.5H16.25C16.6642 5.5 17 5.16421 17 4.75C17 4.33579 16.6642 4 16.25 4H8.75Z" />
          <path d="M8.75 9C8.33579 9 8 9.33579 8 9.75C8 10.1642 8.33579 10.5 8.75 10.5H16.25C16.6642 10.5 17 10.1642 17 9.75C17 9.33579 16.6642 9 16.25 9H8.75Z" />
          <path d="M8 14.75C8 14.3358 8.33579 14 8.75 14H16.25C16.6642 14 17 14.3358 17 14.75C17 15.1642 16.6642 15.5 16.25 15.5H8.75C8.33579 15.5 8 15.1642 8 14.75Z" />
          <path d="M2.64642 7.64651C2.45117 7.84179 2.4512 8.15837 2.64647 8.35362C2.84059 8.5477 3.15457 8.54883 3.35008 8.35703L3.35665 8.35101C3.36458 8.34391 3.37911 8.33132 3.39988 8.315C3.44165 8.28217 3.50709 8.23546 3.59323 8.18805C3.76518 8.09341 4.01033 8.00085 4.31294 8.00001C4.54021 8.00453 4.72387 8.06477 4.83732 8.14879C4.93306 8.21968 5 8.31947 5 8.50009C5 8.70237 4.92979 8.81922 4.78928 8.93631C4.63792 9.06244 4.44136 9.15973 4.17109 9.29351C4.12524 9.3162 4.07662 9.34027 4.0264 9.36539C3.71266 9.52225 3.32368 9.72887 3.02065 10.0622C2.69919 10.4158 2.5 10.8809 2.5 11.5001C2.5 11.7763 2.72386 12.0001 3 12.0001H5.49944C5.77558 12.0001 6 11.7763 6 11.5001C6 11.224 5.77614 11.0001 5.5 11.0001H3.58925C3.63458 10.8934 3.69413 10.808 3.7606 10.7349C3.92632 10.5526 4.16234 10.4154 4.4736 10.2598C4.51228 10.2405 4.55304 10.2205 4.59534 10.1997C4.8573 10.0712 5.17854 9.91364 5.42947 9.70453C5.75771 9.43099 6 9.04783 6 8.50009C6 7.99565 5.77725 7.60048 5.43244 7.34515C5.10604 7.10344 4.69985 7.00638 4.32563 7.00007L4.31722 7C3.80459 6.99998 3.39261 7.15701 3.11107 7.31196C2.97006 7.38957 2.85942 7.46787 2.78191 7.5288C2.74303 7.55936 2.71212 7.58584 2.68951 7.60609C2.67819 7.61622 2.66892 7.62483 2.66173 7.63164L2.65251 7.64051L2.64907 7.64388L2.64765 7.64529L2.64642 7.64651ZM2.66173 7.63164L2.64642 7.64651C2.64642 7.64651 2.7471 7.55676 2.66173 7.63164Z" />
          <path d="M3.75011 15.5C3.75011 15.2239 3.97397 15 4.25011 15C4.5929 15 4.78233 14.9033 4.87775 14.8169C4.97201 14.7315 5.01072 14.6256 5.00671 14.5187C4.99946 14.3253 4.82083 14 4.25011 14C3.8376 14 3.62396 14.1017 3.52746 14.166C3.4769 14.1997 3.44973 14.229 3.43891 14.242L3.43482 14.2471C3.30449 14.4768 3.01552 14.5667 2.7765 14.4472C2.52951 14.3237 2.4294 14.0234 2.5529 13.7764L2.55361 13.775L2.55435 13.7735L2.55594 13.7704L2.55948 13.7636L2.56815 13.7479C2.57465 13.7364 2.58262 13.7231 2.59222 13.7081C2.61141 13.6783 2.63716 13.642 2.67069 13.6018C2.73799 13.521 2.83582 13.4253 2.97276 13.334C3.25126 13.1483 3.66262 13 4.25011 13C5.27939 13 5.97576 13.6747 6.00601 14.4813C6.01979 14.8487 5.88798 15.217 5.60959 15.5C5.88798 15.783 6.01979 16.1513 6.00601 16.5187C5.97576 17.3253 5.27939 18 4.25011 18C3.66262 18 3.25126 17.8517 2.97276 17.666C2.83582 17.5747 2.73799 17.479 2.67069 17.3982C2.63716 17.358 2.61141 17.3217 2.59222 17.2919C2.58262 17.2769 2.57465 17.2636 2.56815 17.2521L2.55948 17.2364L2.55594 17.2296L2.55435 17.2265L2.55361 17.225L2.5529 17.2236C2.4294 16.9766 2.52951 16.6763 2.7765 16.5528C3.01552 16.4333 3.30449 16.5232 3.43482 16.7529L3.43891 16.758C3.44973 16.771 3.4769 16.8003 3.52746 16.834C3.62396 16.8983 3.8376 17 4.25011 17C4.82083 17 4.99946 16.6747 5.00671 16.4813C5.01072 16.3744 4.97201 16.2685 4.87775 16.1831C4.78233 16.0967 4.5929 16 4.25011 16C3.97397 16 3.75011 15.7761 3.75011 15.5ZM3.43482 14.2471C3.43904 14.2396 3.44309 14.232 3.44698 14.2243L3.44596 14.2263L3.44465 14.2289L3.44223 14.2335L3.43817 14.2409C3.43583 14.245 3.43339 14.2489 3.43339 14.2489L3.43279 14.2498L3.43482 14.2471Z" />
        </g>
      </svg>
    );
  },
  styles: {},
} as TeamsSvgIconSpec;
