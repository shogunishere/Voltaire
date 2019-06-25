import React, { Component } from 'react';
import Subject from './Subject.jsx';

class Subjects extends Component {
  render() {
    const predmeti = this.props.predmeti.map(predmet => {
      return <Subject ime={predmet} />;
    });

    return <div>{predmeti}</div>;
  }
}

export default Subjects;
