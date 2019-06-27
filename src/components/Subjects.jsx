import React, { Component } from 'react';
import Subject from './Subject.jsx';

class Subjects extends Component {
  render() {
    const predmeti = this.props.predmeti.map(predmet => {
      return (
        <a href="">
          <Subject ime={predmet.ime} slika={predmet.slika} />
        </a>
      );
    });

    return (
      <div className="container-fluid text-center">
        <h3 className="m-4">Predmeti:</h3>
        {predmeti}
      </div>
    );
  }
}

export default Subjects;
