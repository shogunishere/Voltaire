import React, { Component } from 'react';

class Komentar extends Component {
  render() {
    return (
      <div style={{ width: '230px' }} className="card">
        <div class="card-body ">
          <blockquote class=" blockquote mb-0">
            <p>{this.props.komentar}</p>
            <footer class="blockquote-footer">{this.props.komentator}</footer>
          </blockquote>
        </div>
      </div>
    );
  }
}

export default Komentar;
