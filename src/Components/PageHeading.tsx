import { Heading } from 'grommet';
import { PropsWithChildren } from 'react';

export type Props = PropsWithChildren<{}>;

const PageHeading = ({ children }: Props) => (
  <Heading level={2} size="small" margin={{ vertical: 'small' }}>
    {children}
  </Heading>
);

export default PageHeading;
