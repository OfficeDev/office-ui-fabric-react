import * as React from 'react';
import { Grid, Image } from '@fluentui/react-northstar';

const images = [
  <Image key="ade" fluid src="public/images/avatar/large/ade.jpg" style={{ msGridColumn: 1, msGridRow: 1 }} />,
  <Image key="chris" fluid src="public/images/avatar/large/chris.jpg" style={{ msGridColumn: 2, msGridRow: 1 }} />,
  <Image
    key="christian"
    fluid
    src="public/images/avatar/large/christian.jpg"
    style={{ msGridColumn: 3, msGridRow: 1 }}
  />,
  <Image key="daniel" fluid src="public/images/avatar/large/daniel.jpg" style={{ msGridColumn: 4, msGridRow: 1 }} />,
  <Image key="elliot" fluid src="public/images/avatar/large/elliot.jpg" style={{ msGridColumn: 5, msGridRow: 1 }} />,
  <Image key="elyse" fluid src="public/images/avatar/large/elyse.png" style={{ msGridColumn: 6, msGridRow: 1 }} />,
  <Image key="helen" fluid src="public/images/avatar/large/helen.jpg" style={{ msGridColumn: 7, msGridRow: 1 }} />,
  <Image key="jenny" fluid src="public/images/avatar/large/jenny.jpg" style={{ msGridColumn: 1, msGridRow: 2 }} />,
  <Image key="joe" fluid src="public/images/avatar/large/joe.jpg" style={{ msGridColumn: 2, msGridRow: 2 }} />,
  <Image key="justen" fluid src="public/images/avatar/large/justen.jpg" style={{ msGridColumn: 3, msGridRow: 2 }} />,
  <Image key="kristy" fluid src="public/images/avatar/large/kristy.png" style={{ msGridColumn: 4, msGridRow: 2 }} />,
  <Image key="laura" fluid src="public/images/avatar/large/laura.jpg" style={{ msGridColumn: 5, msGridRow: 2 }} />,
  <Image key="matt" fluid src="public/images/avatar/large/matt.jpg" style={{ msGridColumn: 6, msGridRow: 2 }} />,
  <Image key="matthew" fluid src="public/images/avatar/large/matthew.png" style={{ msGridColumn: 7, msGridRow: 2 }} />,
  <Image key="molly" fluid src="public/images/avatar/large/molly.png" style={{ msGridColumn: 1, msGridRow: 3 }} />,
  <Image key="nan" fluid src="public/images/avatar/large/nan.jpg" style={{ msGridColumn: 2, msGridRow: 3 }} />,
  <Image key="nom" fluid src="public/images/avatar/large/nom.jpg" style={{ msGridColumn: 3, msGridRow: 3 }} />,
  <Image key="patrick" fluid src="public/images/avatar/large/patrick.png" style={{ msGridColumn: 4, msGridRow: 3 }} />,
  <Image key="rachel" fluid src="public/images/avatar/large/rachel.png" style={{ msGridColumn: 5, msGridRow: 3 }} />,
  <Image key="steve" fluid src="public/images/avatar/large/steve.jpg" style={{ msGridColumn: 6, msGridRow: 3 }} />,
  <Image key="stevie" fluid src="public/images/avatar/large/stevie.jpg" style={{ msGridColumn: 7, msGridRow: 3 }} />,
  <Image key="tom" fluid src="public/images/avatar/large/tom.jpg" style={{ msGridColumn: 1, msGridRow: 4 }} />,
  <Image
    key="veronika"
    fluid
    src="public/images/avatar/large/veronika.jpg"
    style={{ msGridColumn: 2, msGridRow: 4 }}
  />,
];

const GridExample = () => (
  <div>
    Grid with specified number or columns:
    <Grid columns={7} content={images} />
    <br />
    Grid with explicitly specified columns:
    <Grid
      style={{
        gridTemplateColumns: 'repeat(3, 1fr) 2fr 2fr 110px 14rem 50px 20%',
        msGridColumns: '(1fr)[3] 2fr 2fr 110px 14rem 50px 20%',
      }}
      content={images}
    />
  </div>
);

export default GridExample;
