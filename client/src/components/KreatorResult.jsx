import React, { Component } from 'react';

// slike

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class KreatorResult extends Component {
  dodajKreatorja = () => {
    this.props.dodajKreatorja(this.props.kreatorObj);
  };

  render() {
    return (
      <div className="center dodan-kreator">
        <div className="profile-photo-and-name">
          <img
            className="profile-image-kreators"
            src={this.props.kreatorObj.profilna}
            alt=""
          />

          {/* <p className="ime-kreatorja">{this.props.ime}</p> */}
          <span style={{ marginLeft: '10px' }} className="profil-ime">
            {this.props.kreatorObj.ime}{' '}
            <img
              style={{ marginLeft: '8px', marginBottom: '4px' }}
              width="23"
              height="23"
              src={kreatorSimbol}
              alt=""
            />
          </span>
        </div>

        <div className="kreator-gumba" style={{ display: 'inline-block' }}>
          <a
            style={{
              backgroundColor: this.props.gumb1Background,
              border: this.props.gumb1Border
            }}
            onClick={this.dodajKreatorja}
            className="kreator-mini-gumb btn btn-dark text-white mb-3"
            href=""
          >
            {this.props.gumb1}
          </a>
          <br />
          <a
            className="kreator-mini-gumb btn btn-white text-dark border border-black"
            href={this.props.link}
          >
            profil
          </a>
        </div>
      </div>

      // <div className="dodan-kreator-rectangle ">
      //   <img
      //     style={{ marginLeft: '5%' }}
      //     width="93"
      //     height="93"
      //     src={this.props.slika}
      //     alt=""
      //   />
      //   <div className="">
      //     <strong className="kreator-ime">
      //       {this.props.ime}
      //       <img
      //         style={{ marginLeft: '8px', marginBottom: '2px' }}
      //         width="25"
      //         height="26"
      //         src={kreatorSimbol}
      //         alt=""
      //       />
      //     </strong>
      //   </div>
      //   <div className="">
      //     <a className="kreator-mini-gumb btn btn-dark" href="">
      //       Odstrani
      //     </a>
      //     <br />
      //     <a
      //       className="kreator-mini-gumb btn btn-white border border-black"
      //       href=""
      //     >
      //       Profil
      //     </a>
      //   </div>
      // </div>
    );
  }
}

export default KreatorResult;
