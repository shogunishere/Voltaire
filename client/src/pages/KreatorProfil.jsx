import React, { Component } from 'react';

// slike
import profilnaSlika from '../images/adult-boy-casual-220453.png';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class KreatorProfil extends Component {
  render() {
    return (
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          gridTemplateColumns: '80%',
          justifyItems: 'center'
        }}
        className="text-center"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img
            width="165"
            height="165"
            className="profilna-slika"
            src={this.props.slika}
            alt=""
          />

          <span className="profil-ime">
            {this.props.kreator}
            <img
              style={{ marginLeft: '8px', marginBottom: '4px' }}
              width="23"
              height="23"
              src={kreatorSimbol}
              alt=""
            />
          </span>
        </div>

        <br />
        <br />

        <div className="profil-options-parent">
          <div className="stat">
            <img width="32" height="32" src={rating} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">4.3/5 ocena</span>
            </a>
          </div>

          <div className="stat">
            <img width="32" height="32" src={dodano} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">7631 dodan</span>
            </a>
          </div>
          <div className="stat">
            <img width="32" height="32" src={inštrukcije} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">5 €/h tutorstvo</span>
            </a>
          </div>
        </div>

        <div style={{ marginTop: '70px' }}>
          <a
            style={{
              width: '150px',
              display: 'block',
              marginBottom: '20px',
              fontSize: '1.15em'
            }}
            onClick={this.props.dodajKreatorja}
            className="dodaj-gumb "
            href=""
          >
            dodaj
          </a>
          <a
            style={{
              width: '150px',
              display: 'inline-block',
              fontSize: '1.15em'
            }}
            className="odpri-material "
            href=""
          >
            sporoči
          </a>
          {/* <a
            style={{ fontSize: '1.3em', borderRadius: '20px' }}
            className="kreator-gumbi btn btn-dark"
            href=""
          >
            dodaj
          </a>
          <br />
          <a
            style={{
              fontSize: '1.3em',
              borderRadius: '20px',
              border: 'black 1px solid'
            }}
            className="kreator-gumbi btn btn-white text-dark"
            href=""
          >
            sporoči
          </a> */}
        </div>
      </div>
    );
  }
}

export default KreatorProfil;
