import * as React from 'react';
import { registerIcons, IIconOptions } from '@uifabric/styling/lib/index';
import { FileTypeIconMap } from './FileTypeIconMap';

const PNG_SUFFIX = '_png';
const SVG_SUFFIX = '_svg';

const DEFAULT_BASE_URL = 'https://spoprod-a.akamaihd.net/files/fabric/assets/item-types/';
const ICON_SIZES: number[] = [16, 20, 32, 40, 48, 96];

export function initializeFileTypeIcons(baseUrl: string = DEFAULT_BASE_URL, options?: Partial<IIconOptions>): void {
  ICON_SIZES.forEach((size: number) => {
    _initializeIcons(baseUrl, size, options);
  });
  // Currently we have a more limited set of image files for size 64.
  // When we have the full set, add 64 to ICON_SIZES and remove _initializeSize64Icons.
  _initializeSize64Icons(baseUrl, options);
}

function _initializeIcons(baseUrl: string, size: number, options?: Partial<IIconOptions>): void {
  const iconTypes: string[] = Object.keys(FileTypeIconMap);
  const fileTypeIcons: { [key: string]: JSX.Element } = {};

  iconTypes.forEach((type: string) => {
    fileTypeIcons[type + size + PNG_SUFFIX] = <img src={ baseUrl + size + '/' + type + '.png' } />;
    fileTypeIcons[type + size + SVG_SUFFIX] = <img src={ baseUrl + size + '/' + type + '.svg' } />;

    // For high resolution screens, register additional versions
    // Apply height=100% and width=100% to force image to fit into containing element

    // SVGs scale well, so you can generally use the default image.
    // 1.5x is a special case where both SVGs and PNGs need a different image.
    // Remove if statements when missing image files for sizes 20 and 40 are provided.
    if (size !== 20) {
      fileTypeIcons[type + size + '_1.5x' + PNG_SUFFIX] = (
        <img src={ baseUrl + size + '_1.5x/' + type + '.png' } height='100%' width='100%' />
      );
      if (size !== 40) {
        fileTypeIcons[type + size + '_1.5x' + SVG_SUFFIX] = (
          <img src={ baseUrl + size + '_1.5x/' + type + '.svg' } height='100%' width='100%' />
        );
      }
    }

    fileTypeIcons[type + size + '_2x' + PNG_SUFFIX] = (
      <img src={ baseUrl + size + '_2x/' + type + '.png' } height='100%' width='100%' />
    );
    fileTypeIcons[type + size + '_3x' + PNG_SUFFIX] = (
      <img src={ baseUrl + size + '_3x/' + type + '.png' } height='100%' width='100%' />
    );
    fileTypeIcons[type + size + '_4x' + PNG_SUFFIX] = (
      <img src={ baseUrl + size + '_4x/' + type + '.png' } height='100%' width='100%' />
    );
  });

  registerIcons({
    fontFace: {},
    style: {
      width: size,
      height: size,
      overflow: 'hidden'
    },
    icons: fileTypeIcons
  }, options);
}

function _initializeSize64Icons(baseUrl: string, options?: Partial<IIconOptions>): void {
  const iconTypes: string[] = Object.keys(FileTypeIconMap);
  const fileTypeIcons: { [key: string]: JSX.Element } = {};
  const size = 64;

  iconTypes.forEach((type: string) => {
    fileTypeIcons[type + size + PNG_SUFFIX] = <img src={ baseUrl + size + '/' + type + '.png' } />;
    fileTypeIcons[type + size + SVG_SUFFIX] = <img src={ baseUrl + size + '/' + type + '.svg' } />;

    // For high resolution screens, register additional versions.
    // Size 64 only has PNGs for 1.5x and 2x.
    fileTypeIcons[type + size + '_1.5x' + PNG_SUFFIX] = (
      <img src={ baseUrl + size + '_1.5x/' + type + '.png' } height='100%' width='100%' />
    );
    fileTypeIcons[type + size + '_2x' + PNG_SUFFIX] = (
      <img src={ baseUrl + size + '_2x/' + type + '.png' } height='100%' width='100%' />
    );
  });

  registerIcons({
    fontFace: {},
    style: {
      width: size,
      height: size,
      overflow: 'hidden'
    },
    icons: fileTypeIcons
  }, options);
}
