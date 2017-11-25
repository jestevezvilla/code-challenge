import styled from 'styled-components';
import { rgba } from 'polished';

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #CCC;
  background-color: ${rgba('#FFF', 0.5)};
  text-align: right;
`;

export default StyledFooter;
