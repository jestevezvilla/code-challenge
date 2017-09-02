import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchArticles } from '../../actions';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './styles.css';

class HomePage extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchArticles());
  }

  componentDidUpdate(prevProps) {
    // if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
    //   const { dispatch, selectedSubreddit } = this.props
    //   dispatch(fetchArticlesIfNeeded(selectedSubreddit))
    // }
  }

  render() {
    const { articles, isFetching } = this.props;

    return (
      <div className="HomePage">
        {isFetching ?
          <Loader title="Loading data..." /> :
          <div className="HomePage__container">
            {articles.map(item => <Card key={item.id} {...item} />)}
          </div>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { isFetching, articles } = state;
  return {
    isFetching,
    articles,
  };
};

export default connect(mapStateToProps)(HomePage);
