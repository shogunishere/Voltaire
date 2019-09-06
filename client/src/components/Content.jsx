import React, { Component } from 'react';

// ikone
import rating from '../icons/majhenRating.png';

class Content extends Component {
  dodajVsebino = () => {
    this.props.dodajVsebino(this.props.contentObj);
  };

  render() {
    return (
      <div style={{ margin: '6% 0' }}>
        <div
          style={{
            width: '211px',
            height: '282px',

            backgroundImage: `url(${this.props.slika})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className=" container text-center"
        />
        <div
          style={{
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <p className="content-details">{this.props.ime}</p>
          <p className="content-details">
            {this.props.ocena}/5{' '}
            <img className="rating-image" src={rating} alt="" />
          </p>
          <p className="content-details">{this.props.kreator}</p>
          <a
            id="content-button-1"
            onClick={this.dodajVsebino}
            className=" btn btn-dark text-white"
            style={{
              backgroundColor: this.props.gumb1Background,
              border: this.props.gumb1Border,
              marginBottom: '20px',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            {this.props.gumb1}
          </a>
          <a class="odpri-material " href="/webviewer">
            {this.props.gumb2}
          </a>
          {/* <span className="content-descr">{this.props.ime}</span>

          <br />
          <span className="content-descr">
            {this.props.ocena}{' '}
            <img style={{ marginBottom: '6px' }} src={rating} alt="" />
          </span>

          <br />
          <span className="content-descr">{this.props.kreator}</span>
          <br />
          <a
            class="btn btn-dark"
            href=""
            style={{
              marginBottom: '20px',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            dodaj
          </a>
          <br />
          <a
            class=" btn btn-white border border-dark"
            href=""
            style={{
              marginBottom: '20px',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            odpri
          </a> */}
        </div>
      </div>
    );
  }
}

export default Content;
