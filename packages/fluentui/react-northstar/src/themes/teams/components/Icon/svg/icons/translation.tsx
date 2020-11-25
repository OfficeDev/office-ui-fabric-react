import * as React from 'react';
import cx from 'classnames';
import { TeamsSvgIconSpec } from '../types';
import { teamsIconClassNames } from '../teamsIconClassNames';

export default {
  icon: ({ classes }) => (
    <svg
      style={{ overflow: 'visible' }}
      role="presentation"
      focusable="false"
      viewBox="2 2 16 16"
      className={classes.svg}
    >
      <g className={cx(teamsIconClassNames.outline, classes.outlinePart)}>
        <path d="M14.1663 4.02867C14.4267 4.12081 14.563 4.40654 14.4709 4.66685C14.3501 5.00788 14.2182 5.4771 14.1178 5.86047C14.6877 5.77587 15.2665 5.65653 15.8867 5.51288C16.1557 5.45058 16.4243 5.61815 16.4866 5.88717C16.5489 6.15619 16.3814 6.42479 16.1123 6.4871C15.339 6.66621 14.6101 6.81289 13.8717 6.90283C13.7759 7.35654 13.7014 7.77084 13.6451 8.15021C14.1202 8.04599 14.5738 8.00553 14.9996 8.02075L14.9996 8C14.9996 7.72386 15.2235 7.5 15.4996 7.5C15.7758 7.5 15.9996 7.72386 15.9996 8C15.9996 8.05657 15.9991 8.11281 15.9979 8.16871C17.1392 8.47838 17.9781 9.23987 18.3435 10.2263C18.9579 11.8853 18.1287 13.8787 15.7027 14.9569C15.4504 15.069 15.1549 14.9554 15.0427 14.7031C14.9306 14.4507 15.0442 14.1552 15.2966 14.0431C17.3705 13.1213 17.7913 11.6147 17.4057 10.5737C17.1874 9.984 16.6776 9.44916 15.9129 9.18633C15.6829 10.7237 15.021 11.9466 14.229 12.7925C14.3126 12.9656 14.3958 13.1436 14.4641 13.3151C14.5662 13.5717 14.441 13.8625 14.1844 13.9646C13.9278 14.0667 13.637 13.9415 13.5349 13.6849C13.5066 13.6137 13.4777 13.5463 13.448 13.4802C13.028 13.7794 12.5905 13.9869 12.1705 14.0835C11.5942 14.2161 10.963 14.1517 10.534 13.6942C9.88917 13.0053 9.84361 11.8611 10.2855 10.8412C10.6652 9.96479 11.4186 9.11781 12.5848 8.54034C12.6387 8.07338 12.7199 7.55894 12.8332 6.98891C12.3926 7.00755 11.9403 7.00326 11.4659 6.97127C11.1904 6.95269 10.9821 6.71428 11.0007 6.43876C11.0192 6.16325 11.2577 5.95496 11.5332 5.97353C12.0633 6.00928 12.5641 6.00772 13.0566 5.97553C13.1605 5.55444 13.3512 4.8331 13.5282 4.33317C13.6203 4.07286 13.906 3.93653 14.1663 4.02867ZM12.501 9.74109C11.8436 10.1821 11.427 10.7219 11.2031 11.2387C10.8542 12.0439 10.9881 12.716 11.2638 13.0105C11.2637 13.0104 11.2639 13.0106 11.2638 13.0105C11.3573 13.11 11.5624 13.1973 11.9463 13.109C12.2578 13.0373 12.6311 12.8571 13.0121 12.5576C12.8658 12.22 12.7272 11.8324 12.6313 11.353C12.5405 10.8996 12.4899 10.3743 12.501 9.74109ZM13.7808 11.7797C14.316 11.0956 14.759 10.1665 14.9271 9.01632C14.539 9.00681 14.1111 9.05601 13.6457 9.17854C13.605 9.19274 13.5647 9.20726 13.525 9.22209C13.4663 10.0545 13.5146 10.671 13.6118 11.1568C13.6578 11.3868 13.7156 11.5913 13.7808 11.7797Z" />
        <path d="M6.92028 5.2159C5.77942 4.88398 4.78409 5.00841 4.07616 5.21575C3.72264 5.3193 3.439 5.44393 3.24121 5.5443C3.14215 5.59457 3.0641 5.63901 3.00903 5.67212C2.98147 5.68868 2.95962 5.70244 2.9437 5.71271L2.92429 5.72542L2.91797 5.72966L2.91566 5.73123L2.91393 5.73241C2.91384 5.73249 2.91436 5.73325 2.94925 5.78397C3.23698 6.20225 3.1703 6.10548 2.91393 5.73241C2.68634 5.88881 2.62863 6.20009 2.78502 6.42767C2.94134 6.65514 3.25207 6.71313 3.47963 6.55703L3.4788 6.5576L3.48576 6.55305C3.49318 6.54826 3.50608 6.5401 3.52423 6.52919C3.56057 6.50735 3.6177 6.47463 3.69373 6.43605C3.84612 6.35872 4.07228 6.2589 4.35724 6.17544C4.92619 6.0088 5.72242 5.90898 6.64043 6.17595C7.35305 6.38517 7.66747 6.76919 7.82692 7.16112C7.98173 7.54163 8.0026 7.95751 8.00531 8.33243C7.46199 8.18407 6.79336 8.03682 6.08385 8.00744C5.04808 7.96456 3.8874 8.17096 2.87738 9.01102C1.98877 9.75011 1.78345 10.8818 2.07014 11.853C2.35713 12.8252 3.14925 13.692 4.31803 13.9348C5.22351 14.123 6.18016 13.8639 6.9599 13.5212C7.3403 13.354 7.69572 13.1594 8.0057 12.9665V13.5C8.0057 13.7761 8.22956 14 8.5057 14C8.78184 14 9.0057 13.7754 9.0057 13.4993L9.0057 8.44586C9.0058 8.05404 9.00595 7.40554 8.7532 6.78428C8.48142 6.11625 7.93342 5.51313 6.92136 5.21622L6.92028 5.2159ZM6.04249 9.00659C6.76366 9.03645 7.44769 9.209 8.0057 9.37205V11.757C7.65814 12.0182 7.13927 12.35 6.55757 12.6057C5.85264 12.9155 5.12729 13.0816 4.52148 12.9557C3.75127 12.7957 3.22322 12.2271 3.02922 11.5699C2.83491 10.9116 2.98777 10.2199 3.51683 9.77985C4.27958 9.14545 5.16917 8.97043 6.04249 9.00659Z" />
      </g>
      <g className={cx(teamsIconClassNames.filled, classes.filledPart)}>
        <path d="M14.4169 4.01646C14.5641 3.62927 14.3695 3.1961 13.9823 3.04894C13.5951 2.90179 13.1619 3.09638 13.0148 3.48358C12.877 3.8462 12.7329 4.31371 12.6171 4.71772C12.0072 4.75709 11.3992 4.76194 10.7966 4.72388C10.3832 4.69777 10.0269 5.01173 10.0008 5.42512C9.97468 5.83851 10.2886 6.19479 10.702 6.22089C11.2136 6.2532 11.7252 6.25763 12.2346 6.23891C12.112 6.80385 12.0204 7.31977 11.9558 7.79323C10.6465 8.41657 9.783 9.33491 9.34166 10.3069C8.82961 11.4346 8.86071 12.7562 9.65959 13.5705C10.2022 14.1227 10.985 14.177 11.652 14.0346C12.0945 13.9401 12.5526 13.7495 12.9972 13.4784C13.0069 13.5001 13.0165 13.5222 13.0262 13.5447C13.1889 13.9256 13.6296 14.1025 14.0105 13.9397C14.3914 13.777 14.5683 13.3362 14.4055 12.9553C14.3441 12.8116 14.2704 12.6599 14.1947 12.5107C15.0196 11.655 15.7125 10.4698 16.01 9.00478C16.6692 9.29212 17.1198 9.75939 17.3353 10.2479C17.5593 10.7555 17.5652 11.335 17.2825 11.8996C16.9964 12.471 16.3824 13.0861 15.2659 13.5596C14.8846 13.7213 14.7066 14.1615 14.8683 14.5429C15.03 14.9242 15.4702 15.1022 15.8516 14.9405C17.211 14.364 18.1411 13.5353 18.6238 12.5711C19.1099 11.6001 19.1092 10.5521 18.7076 9.64224C18.2589 8.62554 17.3533 7.8407 16.1659 7.46418L16.166 7.42505C16.166 7.01084 15.8302 6.67505 15.416 6.67505C15.0724 6.67505 14.7827 6.90612 14.694 7.22135C14.328 7.21089 13.9468 7.23404 13.5537 7.29412C13.6191 6.93098 13.7008 6.53814 13.8013 6.1124C14.549 6.02109 15.287 5.8894 16.0083 5.73293C16.4131 5.64511 16.6701 5.24577 16.5822 4.84097C16.4944 4.43617 16.0951 4.17921 15.6903 4.26702C15.2078 4.37168 14.723 4.46343 14.2376 4.53805C14.2973 4.35061 14.3584 4.17044 14.4169 4.01646ZM10.7075 10.9271C10.9082 10.485 11.2689 10.0119 11.8335 9.60042C11.8415 10.1464 11.8974 10.6182 11.9875 11.0378C12.0776 11.457 12.1996 11.8123 12.3315 12.1248C11.9712 12.3617 11.6267 12.5062 11.3388 12.5676C10.919 12.6573 10.7621 12.5524 10.7299 12.5196C10.5158 12.3014 10.3493 11.7158 10.7075 10.9271ZM14.5379 8.71564C14.3513 9.62696 13.9766 10.3904 13.521 10.9937C13.4968 10.9071 13.4743 10.817 13.4541 10.7226C13.3542 10.2579 13.3003 9.66383 13.3532 8.85955C13.7779 8.7599 14.1733 8.71534 14.5379 8.71564Z" />
        <path d="M5.98384 5.20417C4.8591 4.87338 3.8763 4.9975 3.17824 5.20418C2.82993 5.30731 2.54983 5.4316 2.35304 5.53255C2.2544 5.58315 2.1759 5.62829 2.11937 5.66264C2.09108 5.67983 2.06821 5.69437 2.05099 5.7056L2.0294 5.7199L2.02181 5.72504L2.01883 5.72709L2.01754 5.72798L2.01639 5.72878C1.6762 5.9651 1.592 6.43245 1.82832 6.77263C2.06365 7.1114 2.5281 7.19632 2.86791 6.96364L2.8703 6.96207C2.87475 6.95917 2.88417 6.95313 2.89832 6.94453C2.92669 6.92729 2.97373 6.9 3.03768 6.86719C3.1661 6.80131 3.35944 6.71489 3.60409 6.64246C4.09176 6.49807 4.77262 6.41167 5.55976 6.64297C6.13378 6.81342 6.36072 7.11019 6.47827 7.40227C6.55773 7.59972 6.59408 7.81246 6.61063 8.03131C6.17101 7.92588 5.66664 7.83547 5.13731 7.81332C4.1271 7.77104 2.97039 7.9745 1.96162 8.82265C1.03553 9.6013 0.832241 10.7852 1.12309 11.7812C1.41457 12.7793 2.22308 13.6801 3.42556 13.9327C4.3545 14.1278 5.3108 13.8568 6.05641 13.5256C6.25378 13.4379 6.44406 13.3432 6.62429 13.2445V13.25C6.62429 13.6642 6.96008 14 7.37429 14C7.78851 14 8.12429 13.6638 8.12429 13.2496L8.1243 8.49684C8.1245 8.13042 8.12485 7.47597 7.8698 6.84224C7.58688 6.13926 7.01294 5.50937 5.98547 5.20465L5.98384 5.20417ZM5.07459 9.31201C5.62773 9.33516 6.1592 9.45493 6.62429 9.58497V11.4739C6.32191 11.6924 5.90611 11.951 5.44742 12.1548C4.81424 12.4361 4.20849 12.5644 3.73392 12.4647C3.13568 12.339 2.71817 11.8922 2.56296 11.3607C2.40712 10.8271 2.53646 10.2991 2.92694 9.97077C3.56452 9.4347 4.31186 9.28009 5.07459 9.31201Z" />
      </g>
    </svg>
  ),
  styles: {},
} as TeamsSvgIconSpec;
