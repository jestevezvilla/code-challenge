import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { deleteArticle, fetchArticlesAction } from '../../actions';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './styles.css';

class HomePage extends Component {

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { articles, isFetching, onDeleteClick } = this.props;
    return (
      <div className="HomePage">
        {isFetching ?
          <Loader title="Loading data..." /> :
          <div className="HomePage__container">
            {articles.map(item =>
              <Card
                onDelete={() => onDeleteClick(item.id)}
                key={item.id} {...item}
              />)}
          </div>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetchData: PropTypes.func,
  isFetching: PropTypes.bool.isRequired,
  onDeleteClick: PropTypes.func,
};

const mapStateToProps = state => {
  const { isFetching, articles } = state.articles;
  return {
    isFetching,
    articles,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteClick(id) {
    dispatch(deleteArticle(id));
  },
  fetchData() {
    dispatch(fetchArticlesAction());
  },
});


export default
  connect(mapStateToProps,
    mapDispatchToProps)(HomePage);
