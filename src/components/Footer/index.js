import React from 'react';
import PropTypes from 'prop-types';

import StyledFooter from './styles';

const Footer = props => (
  <StyledFooter className="Footer">{props.title}</StyledFooter>
);

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
