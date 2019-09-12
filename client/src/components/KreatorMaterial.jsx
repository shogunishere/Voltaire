import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

// components
import Content from './Content';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';

class KreatorMaterial extends Component {
  state = {
    material: this.props.content.map(content => {
      // Retrieve localStorage content array
      var materialArrray = JSON.parse(localStorage.getItem('material'));

      var imenaMaterialArray = materialArrray.map(content => {
        return content.ime;
      });

      if (imenaMaterialArray.includes(content.ime)) {
        return (
          <Content
            dodajVsebino={this.props.dodajMaterial}
            gumb1="dodano"
            gumb1Background="#b7b7b7"
            gumb1Border="#b7b7b7"
            gumb2="odpri"
            contentObj={content}
            slika={content.slika}
            ime={content.ime}
            ocena={content.ocena}
          />
        );
      } else {
        return (
          <Content
            dodajVsebino={this.props.dodajMaterial}
            gumb1="dodaj"
            gumb1Background="#23272b"
            gumb2="odpri"
            contentObj={content}
            slika={content.slika}
            ime={content.ime}
            ocena={content.ocena}
          />
        );
      }
    })
  };

  render() {
    return (
      <div
        style={{ display: 'grid', justifyContent: 'center' }}
        className="text-center"
      >
        <div
          style={{ margin: '100px 0' }}
          className="kreator-pages text-center"
        >
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href={this.props.material}
          >
            Material
          </a>
          <a className="kreator-options" href={this.props.komentarji}>
            Komentarji
          </a>
          <a className="kreator-options" href={this.props.omeni}>
            O meni
          </a>
        </div>
        <div style={{ marginBottom: '7%' }} className="kreator-material-type">
          <a href="">
            <img src={video} alt="" />
          </a>
          <a href="">
            <img src={zapiski} alt="" />
          </a>
          <a href="">
            <img src={kurikulum} alt="" />
          </a>
          <a href="">
            <img src={vaje} alt="" />
          </a>
        </div>
        <div id="kreator-material-mreza">{this.state.material}</div>
      </div>
    );
  }
}

export default KreatorMaterial;
