import React, { Component } from 'react';

class Knjiga extends Component {
  render() {
    return (
      <div class="col-md-4">
        <a href={this.props.href}>
          <div class="card mb-4 shadow-sm">
            <svg width="100%" height="225">
              <rect width="100%" height="100%" fill="#000000" />
              <text
                textAnchor="middle"
                x="50%"
                y="50%"
                fill="#eceeef"
                dy=".3em"
              >
                {this.props.ime}
              </text>
            </svg>
          </div>
        </a>
      </div>
    );
  }
}

export default Knjiga;
