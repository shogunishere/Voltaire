import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import Knjiga from '../components/Knjiga';

// components
import MyContent from '../components/MyContent';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';
import več from '../icons/več.png';

class Knjige extends Component {
  state = {
    material: this.props.content.map(content => {
      return (
        <MyContent
          odstraniMaterial={this.props.odstraniMaterial}
          linkPrvegaGumba="/webviewer"
          contentObj={content}
          ime={content.ime}
          index={this.props.content.indexOf(content)}
        />
      );
    }),
    filter: ''
  };

  componentDidMount() {
    console.log(this.props.content);
  }

  filter = () => {
    var filter = document.getElementById('filter').value;

    this.setState({ filter: filter });
  };

  render() {
    // if (this.props.content.length == 0) {
    //   // save 'Ni dodane vsebine' in state.material
    //   this.state.material == 'Ni dodane vsebine';
    // } else {
    //   // filter content and store markup in state.material
    // }

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

          {/* <a
            class=" btn btn-dark"
            href=""
            style={{
              margin: '20px 0',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
            onClick={this.search}
          >
            išči
          </a> */}
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

          {/* should return state.material */}
        </div>

        {/* see more ikona */}
        {/* <a style={{ color: 'black' }} href="">
                <img src={več} alt="" />
              </a> */}
      </div>
    );
  }
}

export default Knjige;
