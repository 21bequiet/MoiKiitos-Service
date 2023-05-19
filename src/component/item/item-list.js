import { Grid } from 'carbon-components-react';

import AppItem from './item';

const AppItemList = ({ items }) => {
  return (
    <Grid>
      {
        items.map((item, row) =>
          <AppItem key={row} item={item} />
        )
      }
    </Grid>
  )
};

export default AppItemList;