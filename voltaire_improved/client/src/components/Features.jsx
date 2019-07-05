import React, { Component } from 'react';
import Feature from './Feature.jsx';

class Features extends Component {
  render() {
    const features = this.props.features.map(feature => {
      return (
        <Feature
          ime={feature.ime}
          ikona={feature.ikona}
          link={feature.link}
          opis={feature.opis}
        />
      );
    });

    return (
      <div style={{ width: '88%', margin: '6% auto 0 auto' }}>{features}</div>
    );
  }
}

export default Features;
