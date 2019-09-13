import React, { Component } from 'react';

// ikone
import rating from '../icons/majhenRating.png';

class MyContent extends Component {
  odstraniMaterial = () => {
    this.props.odstraniMaterial(this.props.index);
  };

  render() {
    return (
      <div style={{ margin: '6% 0' }}>
        <div
          style={{
            width: '211px',
            height: '282px',
            backgroundImage: `url(${this.props.contentObj.slika})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className="container text-center"
        />
        <div
          style={{
            margin: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <p className="content-details">{this.props.contentObj.ime}</p>
          <p className="content-details">
            {this.props.contentObj.ocena}/5{' '}
            <img className="rating-image" src={rating} alt="" />
          </p>
          <p className="content-details">{this.props.contentObj.kreator}</p>
          <a
            className=" btn btn-dark"
            href={this.props.linkPrvegaGumba}
            style={{
              marginBottom: '20px',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            odpri
          </a>
          <a onClick={this.odstraniMaterial} class="odpri-material " href="">
            odstrani
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

export default MyContent;
