import { Box } from 'grommet';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{}>;

const PageHeader = ({ children }: Props) => (
  <Box
    as="header"
    direction="row"
    align="start"
    justify="between"
    gap="small"
    wrap
  >
    {children}
  </Box>
);

export default PageHeader;
