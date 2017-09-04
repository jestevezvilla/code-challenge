import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postUpdatedArticle } from '../../actions';

import './styles.css';

class Message extends Component {
  componentDidMount() {
    const { postUpdatedData } = this.props;
    setTimeout(postUpdatedData, 3000);
  }
  render() {
    return (<div className="Message">
      <span>{this.props.text}</span>
    </div>);
  }

}


Message.propTypes = {
  postUpdatedData: PropTypes.func,
  text: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  postUpdatedData() {
    dispatch(postUpdatedArticle());
  },
});

export default
  connect(null, mapDispatchToProps)(Message);
