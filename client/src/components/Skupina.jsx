import React, { Component } from 'react';

// slike
import skupina from '../images/alley-black-and-white-black-and-white-2216725.png';

class Skupina extends Component {
  render() {
    return (
      <div className="center dodan-kreator">
        <div className="profile-photo-and-name">
          <img className="profile-image-kreators" src={skupina} alt="" />

          {/* <p className="ime-kreatorja">{this.props.ime}</p> */}
          <span style={{ marginLeft: '10px' }} className="profil-ime">
            1A
          </span>
        </div>

        <div className="kreator-gumba" style={{ display: 'inline-block' }}>
          <a className="kreator-mini-gumb btn btn-dark text-white mb-3" href="">
            odstrani
          </a>
          <br />
          <a
            className="kreator-mini-gumb btn btn-white text-dark border border-black"
            href=""
          >
            profil
          </a>
        </div>
      </div>
    );
  }
}

export default Skupina;
