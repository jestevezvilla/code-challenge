import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchArticleAction, updateArticleAction } from '../../actions';

import ExtendedCard from '../../components/ExtendedCard';
import Loader from '../../components/Loader';

export class DetailPage extends Component {
  static propTypes = {
    fetchData: PropTypes.func,
    isFetching: PropTypes.bool,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    updateData: PropTypes.func,
  };

  static defaultProps = {
    fetchData() {},
    isFetching: false,
    updateData() {},
    match: {
      params: {
        id: null,
      },
    },
  }

  componentDidMount() {
    const articleID = this.props.match.params.id;
    const { fetchData } = this.props;
    fetchData(articleID);
  }

  render() {
    const { isFetching, updateData, ...props } = this.props;
    return (
      <div className="DetailPage">
        {isFetching ?
          <Loader title="Loading data..." /> :
          <div className="HomePage__container">
            <ExtendedCard {...props} onChangeData={(id, title) => updateData(id, title)} />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { isFetching, isUpdated, article } = state.article;
  return {
    isFetching,
    isUpdated,
    article,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData(id) {
    dispatch(fetchArticleAction(id));
  },
  updateData(id, title) {
    dispatch(updateArticleAction({ id, title }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
