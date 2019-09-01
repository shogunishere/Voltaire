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
    }),

    filter: ''
  };

  filter = () => {
    var filter = document.querySelector('#filter').value;

    this.setState({ filter: filter });
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
            id="filter"
            onKeyUp={this.filter}
            type="text"
            class="search-input"
            placeholder="Filtriraj vsebino"
          />
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
        <div id="kreator-material-mreza">
          {this.state.material.filter(contentComponent => {
            return (
              contentComponent.props.ime
                .toLowerCase()
                .indexOf(this.state.filter) > -1
            );
          })}
        </div>

        {/* see more ikona */}
        {/* <a style={{ color: 'black' }} href="">
                <img src={več} alt="" />
              </a> */}
      </div>
    );
  }
}

export default Vsebina;
