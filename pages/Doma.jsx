import React, { Component } from 'react';
import {Spring} from 'react-spring/renderprops'


// Ikone
import User_icon from '../icons/User_icon.svg';
import Organizacija_krog from '../icons/Organizacija_krog.png';
import Voltaire_krog from '../icons/Voltaire_krog.png';
import Nastavitve_krog from '../icons/Nastavitve_krog.png';

class Doma extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => 
        <div style={props}>
          <div className="container-fluid text-center">
        <img
          style={{ marginTop: '100px' }}
          width="150px"
          height="150px"
          src={User_icon}
          alt=""
        />
        <h3 className="mt-4">Peter Klepec</h3>
        <div style={{ marginTop: '200px', marginBottom: '200px' }}>
          <a href="">
            <img
              className="m-4"
              width="100px"
              height="100px"
              src={Organizacija_krog}
              alt=""
            />
          </a>
          <a href="">
            <img
              className="m-4"
              width="100px"
              height="100px"
              src={Voltaire_krog}
              alt=""
            />
          </a>
          <a href="">
            <img
              className="m-4"
              width="100px"
              height="100px"
              src={Nastavitve_krog}
              alt=""
            />
          </a>
        </div>
      </div>
        </div>}
      </Spring>
      
    );
  }
}

export default Doma;
