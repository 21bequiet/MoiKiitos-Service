import { Grid } from 'carbon-components-react';

import AppItem from './item';

const AppItemList = (
  {
    items,
    count,
    setCount
  }
) => {
  return (
    <Grid>
      {
        items.map((item, row) =>
          <AppItem
            key={row}
            item={item}
            count={count}
            setCount={setCount}
          />
        )
      }
    </Grid>
  )
};

export default AppItemList;