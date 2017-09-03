import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class ExtendedCard extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
  }

  getTags = tags =>
    (<div className="CardExtended__wrapper__tags">
      {tags.map(tag => <span className="CardExtended__wrapper__tags__tag" key={tag}>{tag}</span>)}
    </div>);

  makeEditable = () =>
    this.setState({
      editable: true,
    });

  changeTitle = ev => {
    const { onChangeData, ...props } = this.props;
    if (ev.target.value !== '' && ev.target.value !== props.title) {
      onChangeData(props.id, ev.target.value);
    }
  }

  handleKeyPress = ev => {
    if (ev.key === 'Enter') {
      ev.target.blur();
    }
  }

  render() {
    const { ...props } = this.props;
    const { editable } = this.state;
    return (<div className="CardExtended">
      <div className="CardExtended__wrapper">
        <h2>
          {!editable ?
            <span
              className="CardExtended__wrapper__input"
              onClick={this.makeEditable}
            >{props.title}</span>
            :
            <input
              type="text"
              autoFocus
              className="CardExtended__wrapper__input"
              defaultValue={props.title}
              onBlur={this.changeTitle}
              onKeyPress={this.handleKeyPress}
            />}
        </h2>
        {props.tags && this.getTags(props.tags)}
        {props.published &&
          <span className="CardExtended__wrapper__badge">Published</span>}
        <i>{props.author}</i>
        <p className="CardExtended__wrapper__p">{props.content}</p>
      </div>
    </div>);
  }

}

ExtendedCard.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  onChangeData: PropTypes.func,
  published: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default ExtendedCard;
