import React, { Component } from 'react';

// slike
import skupina from '../images/alley-black-and-white-black-and-white-2216725.png';

class Skupina extends Component {
  dodajSkupino = () => {
    this.props.dodajSkupino(this.props.skupinaObj);
  };

  odstraniSkupino = () => {
    this.props.odstraniSkupino(this.props.index);
  };

  render() {
    return (
      <div className="center dodan-kreator">
        <div className="profile-photo-and-name">
          <img
            className="profile-image-kreators"
            src={this.props.profilna}
            alt=""
          />

          {/* <p className="ime-kreatorja">{this.props.ime}</p> */}
          <span style={{ marginLeft: '10px' }} className="profil-ime">
            {this.props.ime}
          </span>
        </div>

        <div className="kreator-gumba" style={{ display: 'inline-block' }}>
          <a
            style={{
              backgroundColor: this.props.gumb1Background,
              border: this.props.gumb1Border
            }}
            className="kreator-mini-gumb btn btn-dark text-white mb-3"
            onClick={this.dodajSkupino}
            href=""
          >
            {this.props.gumb1}
          </a>
          <br />
          <a
            style={{ display: this.props.gumb2Display, cursor: 'pointer' }}
            className="kreator-mini-gumb btn btn-white text-dark border border-black"
            onClick={this.odstraniSkupino}
            href=""
          >
            odstrani
          </a>
        </div>
      </div>
    );
  }
}

export default Skupina;
