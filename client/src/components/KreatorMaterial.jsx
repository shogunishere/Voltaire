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
      return (
        <Content
          gumb1="odpri"
          gumb2="dodaj"
          slika={content.slika}
          ime={content.ime}
          ocena={content.ocena}
          kreator={content.kreator}
        />
      );
    })
  };

  render() {
    return (
      <div
        style={{ display: 'grid', justifyContent: 'center' }}
        className="text-center"
      >
        <div
          style={{ marginTop: '70px', marginBottom: '30px', fontSize: '1.5em' }}
          className="kreator-pages text-center"
        >
          <a style={{ color: 'red' }} className="kreator-options" href="">
            Material
          </a>
          <a className="kreator-options" href="">
            Komentarji
          </a>
          <a className="kreator-options" href="">
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
