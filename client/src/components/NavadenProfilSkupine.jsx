import React, { Component } from 'react';

// components
import Skupina from './Skupina';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class NavadenProfilSkupine extends Component {
  state = {
    skupine: this.props.skupine.map(skupina => {
      return (
        <Skupina
          gumb1="obišči"
          gumb2Display="none"
          ime={skupina.ime}
          profilna={skupina.profilna}
        />
      );
    })
  };

  render() {
    return (
      <div style={{ marginTop: '100px' }} className="">
        <div style={{ margin: '100px auto' }} className="profil-options-parent">
          <div className="stat">
            <img width="32" height="32" src={kreatorSimbol} alt="" />
            <a className="profil-options " href="/home">
              <span className="kreator-stats ">Kreatorji</span>
            </a>
          </div>

          <div href="/home/skupine" className="stat">
            <img src={groups} alt="" />
            <a className="profil-options" href="/home/skupine">
              <span className="kreator-stats izbran">Skupine</span>
            </a>
          </div>

          <div href="/home/profil" className="stat">
            <img src={editProfil} alt="" />
            <a className="profil-options" href="/home/profil">
              <span className="kreator-stats">Profil</span>
            </a>
          </div>
        </div>
        {this.state.skupine}
      </div>
    );
  }
}

export default NavadenProfilSkupine;
