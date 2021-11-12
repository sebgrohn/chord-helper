import { Box, Heading, Paragraph } from 'grommet';
import { DocumentMissing } from 'grommet-icons';
import Link from '../../../Components/Link';

const NotFoundPage = () => (
  <Box align="center">
    <DocumentMissing size="large" />
    <Heading level={2} textAlign="center">
      Page not found
    </Heading>
    <Paragraph textAlign="center">
      This page doesn't exist. <Link to="/">Go back.</Link>
    </Paragraph>
  </Box>
);

export default NotFoundPage;
