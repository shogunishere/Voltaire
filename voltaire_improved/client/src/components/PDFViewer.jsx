import React, { Component } from 'react';

class PDFViewer extends Component {
  render() {
    // Propsi
    const slika = this.props.slika;
    const ime = this.props.ime;

    return (
      <div id="pdf-container">
        <div id="top-bar">
          <a className="btn btn-dark text-white">
            <i className="fa fa-arrow-circle-left" />
            Prev page
          </a>
          <a className="btn btn-dark text-white">
            Next page <i className="fa fa-arrow-circle-right" />
          </a>
          <span className="page-info">
            Page <span id="page-num" /> of <span id="page-count" />
          </span>
        </div>
        <canvas id="pdf-render" />
      </div>
    );
  }
}

export default PDFViewer;
