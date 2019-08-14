import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

// tslint:disable:jsx-no-lambda

export const SearchBoxFullSizeExample: React.FunctionComponent = () => {
  return (
    <Stack tokens={{ childrenGap: 20 }} styles={{ root: { maxWidth: 300 } }}>
      <SearchBox
        placeholder="Search"
        onSearch={newValue => console.log('value is ' + newValue)}
        onFocus={() => console.log('onFocus called')}
        onBlur={() => console.log('onBlur called')}
        onChange={() => console.log('onChange called')}
      />
      <SearchBox
        placeholder="Search with no animation"
        disableAnimation
        onSearch={newValue => console.log('value is ' + newValue)}
        onFocus={() => console.log('onFocus called')}
        onBlur={() => console.log('onBlur called')}
        onChange={() => console.log('onChange called')}
      />
    </Stack>
  );
};
