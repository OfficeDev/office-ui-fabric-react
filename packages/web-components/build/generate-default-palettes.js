import fs from 'fs';
import path from 'path';
import { parseColorHexRGB } from '@microsoft/fast-colors';
import { createColorPalette } from '../src/color/create-color-palette';
import { accentBaseColor, neutralBaseColor } from '../src/color/color-constants';

const outpath = path.resolve(__dirname, '../src/default-palette.ts');

/**
 * Define palettes from base colors
 */
const neutralPalette = createColorPalette(parseColorHexRGB(neutralBaseColor));
const accentPalette = createColorPalette(parseColorHexRGB(accentBaseColor));

const file = `/**
 * DO NOT EDIT THIS FILE DIRECTLY
 * This file generated by web-components/build/${path.parse(__filename).name}${path.parse(__filename).ext}
 */
export const neutralPalette: string[] = ${JSON.stringify(neutralPalette, null, 4)};
export const accentPalette: string[] = ${JSON.stringify(accentPalette, null, 4)};
`;

fs.writeFile(outpath, file, error => {
  if (error) {
    throw error;
  } else {
    console.log('\nPalette data written to', outpath, '\n');
  }
});
