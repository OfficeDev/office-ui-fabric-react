import { Coachmark } from './Coachmark';
import { isConformant } from '../../common/isConformant';

describe('Coachmark', () => {
  isConformant({
    Component: Coachmark,
    displayName: 'Coachmark',
    disabledTests: ['component-handles-classname', 'component-has-root-ref', 'component-handles-ref'],
  });
});
