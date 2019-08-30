import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Knjiga from '../components/Knjiga';

// components
import Content from '../components/Content';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';
import več from '../icons/več.png';

class Vsebina extends Component {
  state = {
    material: this.props.content.map(content => {
      return (
        <Content
          dodajVsebino={this.props.dodajMaterial}
          gumb1="dodaj"
          gumb2="odpri"
          contentObj={content}
          slika={content.slika}
          ime={content.ime}
          ocena={content.ocena}
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
        <h3 className="m-4">{this.props.page}</h3>
        <div style={{ marginTop: '40px' }} class="išči-vsebino">
          {/* <input
                  style={{ width: '342px' }}
                  type="text"
                  class="form-control"
                  placeholder="Iščite vsebino"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                /> */}
          <input
            type="text"
            class="search-input"
            placeholder="Iščite vsebino"
          />

          <a
            class=" btn btn-dark"
            href=""
            style={{
              margin: '20px 0',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            išči
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

        {/* see more ikona */}
        {/* <a style={{ color: 'black' }} href="">
                <img src={več} alt="" />
              </a> */}
      </div>
    );
  }
}

export default Vsebina;
