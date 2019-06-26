import React, { Component } from 'react';

class Subject extends Component {
  render() {
    const slika = this.props.slika;
    console.log(slika);
    return (
      <div>
        <img src={slika} alt="" />
        <div className="mb-0 jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="bg-dark text-white text-center p-2">
              <a>{this.props.ime}</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;
