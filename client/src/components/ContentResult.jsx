import React, { Component } from 'react';

// ikona
import rating from '../icons/rating.png';

class ContentResult extends Component {
  dodajMaterial = () => {
    this.props.dodajMaterial(this.props.contentObj);
  };

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
          <div
            style={{
              display: 'inline-block',
              marginLeft: '18px',
              fontWeight: 'bold'
            }}
          >
            <p className="content-result-descr">{this.props.contentObj.ime}</p>
            <p className="content-result-descr">
              {this.props.contentObj.ocena}{' '}
              <img
                width="15"
                height="15"
                src={rating}
                style={{ marginBottom: '5px' }}
              />
              {/* <img className="rating-image" src={rating} alt="" /> */}
            </p>
            <p className="content-result-descr">
              {this.props.contentObj.kreator}
            </p>
          </div>
        </div>

        <div className="kreator-gumba" style={{ display: 'inline-block' }}>
          <a
            style={{
              backgroundColor: this.props.gumb1Background,
              border: this.props.gumb1Border
            }}
            onClick={this.dodajMaterial}
            className="kreator-mini-gumb btn btn-dark text-white mb-3"
            href=""
          >
            {this.props.gumb1}
          </a>
          <br />
          <a
            className="kreator-mini-gumb btn btn-white text-dark border border-black"
            href="/webviewer"
          >
            odpri
          </a>
        </div>
      </div>
    );
  }
}

export default ContentResult;
