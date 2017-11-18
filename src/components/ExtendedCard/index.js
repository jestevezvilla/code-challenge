import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../components/LinkButton';
import Message from '../../components/Message';

class ExtendedCard extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  getTags = tags => (
    <div className="CardExtended__wrapper__tags">
      {tags.map(tag => <span className="CardExtended__wrapper__tags__tag" key={tag}>{tag}</span>)}
    </div>
  );

  makeEditable = () =>
    this.setState({
      editable: true,
    });

  changeTitle = ev => {
    const { onChangeData, article } = this.props;
    if (ev.target.value !== '' && ev.target.value !== article.title) {
      onChangeData(article.id, ev.target.value);
    }
  }

  handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.target.blur();
    }
  }

  render() {
    const { isUpdated, article } = this.props;
    const { editable } = this.state;
    return (
      <div className="CardExtended">
        <LinkButton buttonClass="Button-top" action="/" text="&lt; Back to list" />
        {isUpdated &&
          <Message text="Article updated!" />}
        <div className="CardExtended__wrapper">
          <h2 className="CardExtended__wrapper__title">
            {!editable ?
              <span
                className="CardExtended__wrapper__input"
                onClick={this.makeEditable}
                onKeyUp={this.makeEditable}
              >
                {article.title}
              </span>
              :
              <input
                type="text"
                // autoFocus
                className="CardExtended__wrapper__input"
                defaultValue={article.title}
                onBlur={this.changeTitle}
                onKeyPress={this.handleKeyPress}
              />}
          </h2>
          {article.tags && this.getTags(article.tags)}
          {article.published &&
            <span className="CardExtended__wrapper__badge">Published</span>}
          <i>{article.author}</i>
          <p className="CardExtended__wrapper__p">{article.content}</p>
        </div>
      </div>);
  }
}

ExtendedCard.propTypes = {
  article: PropTypes.shape,
  isUpdated: PropTypes.bool,
  onChangeData: PropTypes.func,
};

export default ExtendedCard;
