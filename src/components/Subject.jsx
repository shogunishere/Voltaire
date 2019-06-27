import React, { Component } from 'react';

class Subject extends Component {
  render() {
    // Propsi
    const slika = this.props.slika;
    const ime = this.props.ime;

    return (
      <div className=" predmet mb-0">
        <div
          style={{
            backgroundImage: `url(${slika})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="mb-0 jumbotron jumbotron-fluid"
        >
          <div className="p-2 container">
            <h3
              style={{ width: '40%', margin: 'auto' }}
              className="bg-dark text-white text-center p-2"
            >
              <a>{ime}</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Subject;
