import React, { Component } from 'react';

// ikona
import rating from '../icons/rating.png';

class ContentResult extends Component {
  render() {
    return (
      <div className="center dodan-kreator">
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className="profile-photo-and-name"
        >
          <img
            width="90"
            height="118"
            style={{ marginLeft: '10px' }}
            src={this.props.contentObj.slika}
            alt=""
          />

          {/* <p className="ime-kreatorja">{this.props.ime}</p> */}
          <div style={{ display: 'inline-block', marginLeft: '18px' }}>
            <p className="content-result-descr">{this.props.contentObj.ime}</p>
            <p className="content-result-descr">
              {this.props.contentObj.ocena}
              {/* <img className="rating-image" src={rating} alt="" /> */}
            </p>
            <p className="content-result-descr">
              {this.props.contentObj.kreator}
            </p>
          </div>
        </div>

        <div className="kreator-gumba" style={{ display: 'inline-block' }}>
          <a className="kreator-mini-gumb btn btn-dark text-white mb-3" href="">
            dodaj
          </a>
          <br />
          <a
            className="kreator-mini-gumb btn btn-white text-dark border border-black"
            href=""
          >
            odpri
          </a>
        </div>
      </div>
    );
  }
}

export default ContentResult;
