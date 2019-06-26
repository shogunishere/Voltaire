import React, { Component } from 'react';
import Subject from './Subject.jsx';

class Subjects extends Component {
  render() {
    const predmeti = this.props.predmeti.map(predmet => {
      return <Subject ime={predmet.ime} slika={predmet.slika} />;
    });

    return (
      <div className="text-center">
        <h3 className="m-4">Predmeti:</h3>
        {predmeti}
      </div>
    );
  }
}

export default Subjects;
