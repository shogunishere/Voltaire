import React, { Component } from 'react';
import Feature from './Feature.jsx';
import { Spring, Trail } from 'react-spring/renderprops';

class Features extends Component {
  render() {
    const features = this.props.features;

    return (
      <Trail
        items={features}
        keys={feature => feature.ime}
        from={{
          marginLeft: -20,
          opacity: 0,
          transform: 'translate3d(0,-150px,0)'
        }}
        to={{ marginLeft: 20, opacity: 1, transform: 'translate3d(0,0px,0)' }}
      >
        {feature => props => (
          <div
            style={{
              marginBottom: 0,
              props,
              backgroundImage: `url(${feature.background})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            class="text-white jumbotron text-center"
          >
            <a href={feature.link}>
              <img src={feature.ikona} alt="" />
            </a>

            <p style={{ fontSize: '1.6em' }} className="mt-2 lead">
              <h2>{feature.ime}</h2>
            </p>
            <p style={{ fontSize: '1.2em' }} className="font-weight-light">
              {feature.opis}
            </p>
            <a style={{ fontSize: '4em', color: 'white' }} href={feature.link}>
              <i id="feature-icon" className={feature.btnImage} />
            </a>
          </div>
          // <Feature
          //   style={props}
          //   ime={feature.ime}
          //   ikona={feature.ikona}
          //   link={feature.link}
          //   opis={feature.opis}
          // />
        )}
      </Trail>
      // <div>
      //   <div style={{ width: '88%', margin: '6% auto 0 auto' }}>{features}</div>
      // </div>
    );
  }
}

export default Features;
