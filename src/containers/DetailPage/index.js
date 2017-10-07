import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchArticleAction, updateArticleAction } from '../../actions';

import ExtendedCard from '../../components/ExtendedCard';
import Loader from '../../components/Loader';

class DetailPage extends Component {

  componentDidMount() {
    const articleID = this.props.match.params.id;
    const { fetchData } = this.props;
    fetchData(articleID);
  }

  render() {
    const { isFetching, updateData, ...props } = this.props;
    return (
      <div className="HomePage">
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

DetailPage.propTypes = {
  fetchData: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  updateData: PropTypes.func.isRequired,
};

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

export default
  connect(mapStateToProps,
    mapDispatchToProps)(DetailPage);
