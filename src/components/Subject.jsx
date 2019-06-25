import React, { Component } from 'react';

class Subject extends Component {
  render() {
    return (
      <div>
        <div className="mb-0 jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="bg-dark text-white text-center p-2">
              {this.props.ime}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;
