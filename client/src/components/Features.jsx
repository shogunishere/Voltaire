import React, { Component } from 'react';
import Feature from './Feature.jsx';
import {Spring} from 'react-spring/renderprops'


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
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}>
      {props => 
        <div style={props}>
          <div style={{ width: '88%', margin: '6% auto 0 auto' }}>{features}</div>
        </div>}
      </Spring>
      
    );
  }
}

export default Features;
