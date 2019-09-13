import React, { Component } from 'react';

// slike
import profilnaSlika from '../images/adult-back-view-backpack-974266.png';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class NavadenProfil extends Component {
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
            src={profilnaSlika}
            alt=""
          />
          <span className="og-profil-ime">Blaž Vodopivec</span>
        </div>

        <br />
        <br />

        {/* <div className="profil-options-parent">
          <div className="stat">
            <img width="32" height="32" src={kreatorSimbol} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">Kreatorji</span>
            </a>
          </div>

          <div className="stat">
            <img src={groups} alt="" />
            <a className="profil-options" href="/home/skupine">
              <span className="kreator-stats">Skupine</span>
            </a>
          </div>
          <div className="stat">
            <img src={editProfil} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">Profil</span>
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default NavadenProfil;
