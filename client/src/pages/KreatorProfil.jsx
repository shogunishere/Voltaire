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
  // if (localStorage.getItem('kreatorji').includes(this.props.kreatorObj)) {
  //   console.log('Dodano');
  //   this.setState({ gumb1: 'Dodano' });
  // } else {
  //   this.setState({ gumb1: 'Dodaj' });
  // }

  state = {
    gumb1: 'dodaj',
    gumb1Bg: 'rgb(183, 183, 183)'
  };

  componentDidMount() {
    // Retrieve localStorage kreator array
    var kreatorArray = JSON.parse(localStorage.getItem('kreatorji'));

    var imenaKreatorArray = kreatorArray.map(kreator => {
      return kreator.ime;
    });

    // Check if array contains item
    if (imenaKreatorArray.includes(this.props.kreatorObj.ime)) {
      this.setState({
        gumb1: 'dodano',
        gumb1Bg: 'rgb(183, 183, 183)'
      });
    } else {
      this.setState({
        gumb1: 'Dodaj',
        gumb1Bg: 'rgb(35, 39, 43)'
      });
    }
  }

  dodajKreatorja = () => {
    this.props.dodajKreatorja(this.props.kreatorObj);
  };

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

          <span className="og-profil-ime">
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
            <span className="kreator-stats">4.3/5 ocena</span>
          </div>

          <div className="stat">
            <img width="32" height="32" src={dodano} alt="" />
            <span className="kreator-stats">7631 dodan</span>
          </div>
          <div className="stat">
            <img width="32" height="32" src={inštrukcije} alt="" />

            <span className="kreator-stats">5 €/h tutorstvo</span>
          </div>
        </div>

        <div style={{ marginTop: '70px' }}>
          <a
            style={{
              width: '150px',
              display: 'block',
              marginBottom: '20px',
              fontSize: '1.15em',
              backgroundColor: this.state.gumb1Bg,
              border: this.state.gumb1Bg
            }}
            onClick={this.dodajKreatorja}
            className="dodaj-gumb "
            href=""
          >
            {this.state.gumb1}
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
