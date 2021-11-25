import { Link as ReactRouterLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(ReactRouterLink)`
  &:link,
  &:visited {
    color: inherit;
    text-decoration-color: inherit;
  }
`;

const Link = (props: LinkProps) => <StyledLink {...props} />;

export default Link;
