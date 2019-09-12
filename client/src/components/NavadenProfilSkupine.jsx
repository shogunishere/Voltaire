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
  // state = {
  //   skupine: this.props.skupine.map(skupina => {
  //     return (
  //       <Skupina
  //         odstraniSkupino={this.props.odstraniSkupino}
  //         index={this.props.skupine.indexOf(skupina)}
  //         gumb1="obišči"
  //         gumb2Display=""
  //         ime={skupina.ime}
  //         profilna={skupina.profilna}
  //       />
  //     );
  //   })
  // };

  render() {
    let skupine = this.props.skupine;
    let value;

    if (skupine.length === 0) {
      console.log('Nobenih skupin');
      value = (
        <div className="text-center" style={{ margin: '0 auto', width: '40%' }}>
          <p style={{ fontSize: '1.3em' }}>Ni dodanih skupin.</p>
        </div>
      );
    } else {
      value = skupine.map(skupina => {
        console.log(skupina);

        return (
          <Skupina
            odstraniSkupino={this.props.odstraniSkupino}
            index={this.props.skupine.indexOf(skupina)}
            gumb1="obišči"
            gumb2Display=""
            ime={skupina.ime}
            profilna={skupina.profilna}
          />
        );
      });
    }

    return (
      <div style={{ marginTop: '100px' }} className="">
        <div style={{ margin: '100px auto' }} className="profil-options-parent">
          <a className="profil-options " href="/home">
            Kreatorji
          </a>
          <a
            style={{ color: 'red' }}
            className="profil-options"
            href="/home/skupine"
          >
            Skupine
          </a>
          <a className="profil-options" href="/home/profil">
            Profil
          </a>
        </div>
        {/* <div style={{ margin: '100px auto' }} className="profil-options-parent">
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
        </div> */}
        {value}
      </div>
    );
  }
}

export default NavadenProfilSkupine;
