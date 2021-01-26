import * as React from 'react';
import { Carousel, Image } from '@fluentui/react-northstar';

const imageAltTags = {
  ade: 'Portrait of Allan',
  elliot: 'Portrait of Carole',
  molly: 'Portrait of Johnie',
  nan: 'Portrait of Kat',
};
const carouselItems = [
  {
    key: 'ade',
    id: 'ade',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        fluid
        alt={imageAltTags.ade}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        fluid
        alt={imageAltTags.ade}
      />
    ),
    'aria-label': imageAltTags.ade,
  },
  {
    key: 'elliot',
    id: 'elliot',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
        fluid
        alt={imageAltTags.elliot}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
        fluid
        alt={imageAltTags.elliot}
      />
    ),
    'aria-label': imageAltTags.elliot,
  },
  {
    key: 'molly',
    id: 'molly',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/JohnieMcConnell.jpg"
        fluid
        alt={imageAltTags.molly}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/JohnieMcConnell.jpg"
        fluid
        alt={imageAltTags.molly}
      />
    ),
    'aria-label': imageAltTags.molly,
  },
  {
    key: 'nan',
    id: 'nan',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatLarsson.jpg"
        fluid
        alt={imageAltTags.nan}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatLarsson.jpg"
        fluid
        alt={imageAltTags.nan}
      />
    ),
    'aria-label': imageAltTags.nan,
  },
  {
    key: 'elliot1',
    id: 'elliot1',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
        fluid
        alt={imageAltTags.elliot}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CarolePoland.jpg"
        fluid
        alt={imageAltTags.elliot}
      />
    ),
    'aria-label': imageAltTags.elliot,
  },
  {
    key: 'ade1',
    id: 'ade1',
    content: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        fluid
        alt={imageAltTags.ade}
      />
    ),
    thumbnail: (
      <Image
        src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
        fluid
        alt={imageAltTags.ade}
      />
    ),
    'aria-label': imageAltTags.ade,
  },
];

const CarouselExample = () => (
  <Carousel
    ariaRoleDescription="carousel"
    ariaLabel="Portrait collection"
    thumbnails
    navigation={{
      'aria-label': 'people portraits',
      items: carouselItems.map((item, index) => ({
        key: index,
        'aria-controls': item.id,
        'aria-label': item['aria-label'],
        content: item.thumbnail,
      })),
    }}
    items={carouselItems}
    getItemPositionText={(index: number, size: number) => `${index + 1} of ${size}`}
  />
);

export default CarouselExample;
