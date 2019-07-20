import React, { Component } from 'react';

class ConceptCard extends Component {
  render() {
    return (
      <div
        id="concept-card"
        class="card"
        style={{ display: this.props.display,position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)' }}
      >
        <h5 id="title" class="card-header">
          {this.props.title}

          <span
            className="close"
            style={{ float: 'right', cursor: 'pointer' }}
            onClick={this.props.onClose}
          >
            &times;
          </span>
        </h5>
        <div class="card-body">
          <p id="info" class="card-text">
            {this.props.content}
          </p>
          <a
            style={{ color: 'white', cursor: 'pointer' }}
            href={this.props.fullArticleLink}
            class="btn btn-primary"
          >
            Link to full article
          </a>
        </div>
      </div>
    );
  }
}

export default ConceptCard;
