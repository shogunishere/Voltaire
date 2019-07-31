import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Knjiga from '../components/Knjiga';

class Knjige extends Component {
  state = {
    knjige: this.props.knjige.map(knjiga => {
      return <Knjiga ime={knjiga.ime} href={knjiga.href} />;
    })
  };

  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div class="container text-center">
              <h3 className="m-4">Knjige:</h3>
              <div class="row">{this.state.knjige}</div>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default Knjige;
