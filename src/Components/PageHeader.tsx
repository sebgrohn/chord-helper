import { Box } from 'grommet';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{}>;

const PageHeader = ({ children }: Props) => (
  <Box as="header" direction="row" align="start" gap="small">
    {children}
  </Box>
);

export default PageHeader;
