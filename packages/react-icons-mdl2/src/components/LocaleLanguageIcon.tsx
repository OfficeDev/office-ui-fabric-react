import * as React from 'react';
import createSvgIcon from '../utils/createSvgIcon';

const LocaleLanguageIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" className={classes.svg} focusable="false">
      <path d="M601 1152l295 886v10H765l-86-256H345l-86 256H128v-10l295-886h178zm36 512l-125-374-125 374h250zM893 512q3 65 3 128v64q0 32-2 64H768v128H523l10 64q5 32 14 64H418q-8-32-12-64t-9-64H188q20 36 46 68t57 60h-35l-45 90q-101-91-156-214T0 640q0-88 23-170t64-153 100-129T317 88t153-65T640 0q88 0 170 23t153 64 129 100 100 130 65 153 23 170q0 32-3 64t-10 64h-124q17-65 17-128t-17-128H893zM640 120q-19 0-34 16t-28 41-22 56-15 60-11 54-6 37h231q-2-11-6-35t-10-54-16-60-22-56-28-42-33-17zM387 768q-3-64-3-128 0-63 3-128H137q-17 65-17 128t17 128h250zm11-384q6-58 18-116t34-112q-83 33-150 91T188 384h210zm369 384q3-64 3-128 0-63-3-128H513q-3 65-3 128 0 64 3 128h254zm58-613q23 54 36 112t20 117h211q-45-78-113-137t-154-92zm566 734q0-30-1-61t-8-60q69 0 137 6 6 1 12 3t7 10q0 5-3 12t-5 12q-2 6-3 16t-2 21-1 22 0 17v13h296q42 0 83-1t84-2q7 0 13 3 3 5 3 10-1 17-2 35t-1 36v58q0 36 1 72t2 73v7q0 4-3 6-8 2-13 2h-25q-20 0-41 1-19 0-34-1t-17-3q-2-8-2-24t-1-36q0-33 1-68t1-52h-802v39q0 15 1 31t0 34q0 29-1 52t-3 26q-8 2-13 2H949q-11 0-13-3t-2-13q1-40 1-79t0-79v-58q0-29-1-58 0-5 2-11 8-2 13-2 42 1 83 2t84 1h275v-11zm639 553q2 8 2 13v96q0 4-2 12-8 2-13 2-40-1-79-2t-79-1h-321v33q0 52 1 104t3 104v4q0 24-9 48t-29 38q-14 10-39 15t-55 8-56 3-44 1h-19q-13 0-18-6-3-3-7-16t-6-18q-7-26-16-48t-24-46q34 4 68 5t68 2q24 0 36-7t13-34v-190h-319q-40 0-80 1t-80 2q-8 0-12-3-2-6-2-11v-96-7q0-4 3-7 6-2 11-2l80 2q40 1 80 1h319q-2-26-2-52t-6-53q20 2 39 3t40 4h3q1 0 4 1 35-25 67-53t64-57h-308q-42 0-83 1t-84 2q-8 0-12-3-2-6-2-11v-95q0-4 2-12 8-2 12-2 42 1 83 2t84 1h373q16 0 30-4t25-5q8 0 23 12t30 28 26 32 12 25q0 10-6 15t-15 10q-14 7-27 18t-25 21q-52 43-104 83t-110 78v11h321q40 0 79-1t79-2q7 0 13 3z" />
    </svg>
  ),
  displayName: 'LocaleLanguageIcon',
});

export default LocaleLanguageIcon;
