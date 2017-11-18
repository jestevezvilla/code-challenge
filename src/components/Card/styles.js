import styled from 'styled-components';

const StyledCard = styled.div`
  box-sizing: border-box;
  color: palevioletred;
  display: inline-block;
  font-weight: bold;
  opacity: ${props => (props.removing ? 0.01 : 1)};
  padding: 0 1em 1em 1em;
  transition: opacity 300ms ease-in;
  vertical-align: top;
  width: 33%;
  h2 {
    color: #000;
  }
`;

export default StyledCard;
