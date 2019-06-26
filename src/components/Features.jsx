import React, { Component } from 'react';
import Feature from './Feature.jsx';

class Features extends Component {
  render() {
    const features = this.props.features.map(feature => {
      return <Feature ime={feature.ime} ikona={feature.ikona} />;
    });

    return <div className="mt-3">{features}</div>;
  }
}

export default Features;
