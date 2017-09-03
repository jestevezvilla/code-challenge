import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';

import ExtendedCard from '../../components/ExtendedCard';
import Loader from '../../components/Loader';

class DetailPage extends Component {

  componentDidMount() {
    const articleID = this.props.match.params.id;
    const { dispatch } = this.props;
    dispatch(fetchArticle(articleID));
  }

  render() {
    const { article, isFetching } = this.props;

    return (
      <div className="HomePage">
        {isFetching ?
          <Loader title="Loading data..." /> :
          <div className="HomePage__container">
            <ExtendedCard {...article} />
          </div>
        }
      </div>
    );
  }
}

DetailPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: { id: {} } }),
};

const mapStateToProps = state => {
  const { isFetching, article } = state;
  return {
    isFetching,
    article,
  };
};

export default connect(mapStateToProps)(DetailPage);
