import * as React from 'react'
import { TeamsProcessedSvgIconSpec } from '../types'

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" className={classes.svg} viewBox="8 8 16 16">
      <path d="M22.066 10.117c.18.078.342.188.489.328.14.146.25.309.328.489s.117.368.117.566v7c0 .198-.04.387-.117.566s-.188.34-.328.48c-.147.147-.309.259-.489.337S21.697 20 21.5 20H18v1h1c.288 0 .5.212.5.5s-.206.5-.5.5h-6a.508.508 0 0 1-.5-.5c0-.27.17-.5.5-.5h1v-1h-3.5c-.198 0-.387-.04-.566-.117s-.34-.19-.48-.336c-.147-.14-.259-.3-.337-.48S9 18.697 9 18.5v-7c0-.198.04-.387.117-.566s.19-.343.336-.489c.14-.14.3-.25.48-.328S10.303 10 10.5 10h11c.197 0 .387.04.566.117zM10.5 11a.481.481 0 0 0-.352.148.48.48 0 0 0-.148.352v7c0 .136.05.253.148.352.1.1.216.148.352.148h11a.48.48 0 0 0 .352-.148A.485.485 0 0 0 22 18.5v-7a.486.486 0 0 0-.148-.352A.484.484 0 0 0 21.5 11h-11zm5.5 7.438L13.852 17H12v-4h1.852L16 11.562v6.876zM14.148 14H13v2h1.148l.852.563v-3.125l-.852.562zM15 20v1h2v-1h-2zm3-5c0 .521-.13 1.013-.39 1.477l-.828-.578c.144-.287.219-.586.219-.899s-.075-.612-.22-.898l.828-.578c.26.463.391.956.391 1.476zm1.809-1.371a4.98 4.98 0 0 1-.559 3.996l-.82-.578a4.35 4.35 0 0 0 .422-.988c.097-.347.148-.7.148-1.059s-.05-.712-.148-1.059c-.1-.346-.24-.675-.422-.988l.82-.578c.244.39.43.809.559 1.254z" />
    </svg>
  ),
  styles: {},
} as TeamsProcessedSvgIconSpec
