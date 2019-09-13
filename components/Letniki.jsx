import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

class Letniki extends Component {
  render() {
    const letniki = this.props.letniki.map(letnik => {
      return (
        <div
          style={{
            lineHeight: '150px',
            fontSize: '1.5em',
            width: '100%',
            height: '150px',
            marginBottom: '5%'
          }}
          className="text-center bg-dark text-white"
        >
          <a style={{ color: 'white' }} href={letnik.href}>
            {letnik.ime}
          </a>
        </div>
      );
    });

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div style={{ width: '88%', margin: '6% auto 0 auto' }}>
              {letniki}
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Letniki;
