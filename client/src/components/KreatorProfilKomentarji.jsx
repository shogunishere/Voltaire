import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

// components
import Content from './Content';
import Komentar from './Komentar';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';

class KreatorProfilKomentarji extends Component {

  

  state = {
    komentarji: this.props.komentarjiArray.map(komentar => {
      return <Komentar komentar={ komentar } komentator="Peter Klepec" />
    })
  }

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
          <a className="kreator-options" href={this.props.material}>
            Material
          </a>
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href={this.props.komentarji}
          >
            Komentarji
          </a>
          <a className="kreator-options" href={this.props.omeni}>
            O meni
          </a>
        </div>

        {/* <div style={{ marginBottom: '20%' }} id="kreator-material-mreza">

          {
            this.state.komentarji
          }
        </div> */}

        <div style={{ marginBottom: '100px' }} id="kreator-material-mreza">

          {
            this.state.komentarji
          }
        </div>
      </div>
    );
  }
}

export default KreatorProfilKomentarji;
