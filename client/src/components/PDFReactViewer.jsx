import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import samplePDF from '../pdfs/demo.pdf';
import { pdfjs } from 'react-pdf';

import 'react-pdf/dist/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class PDFReactViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  // removes styling from the TextLayer
  removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent'
    );
    textLayers.forEach(layer => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  }

  // removes default padding of the canvas
  removePDFOffset() {
    // trying to grab canvas element and remove the margin/center it
    var y = document.getElementsByClassName('react-pdf__Document');
    var aNode = y[0];

    const documentLayers = document.querySelectorAll('.react-pdf__Document');
    documentLayers.forEach(layer => {
      const { style } = layer;
      style.display = 'flex';
      style.justifyContent = 'center';
    });
  }

  onDocumentLoadSuccess = document => {
    const { numPages } = document;

    this.setState({
      numPages,
      pageNumber: 1
    });
  };

  onLoadSuccess = () => {
    this.removePDFOffset();
  };

  changePage = offset =>
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + offset
    }));

  previousPage = () => this.changePage(-1);

  nextPage = () => this.changePage(1);

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
          <div class="container d-flex justify-content-between">
            <a
              className="btn btn-primary text-white  d-flex align-items-center"
              disabled={pageNumber <= 1}
              onClick={this.previousPage}
            >
              Previous
            </a>

            <p className="text-white">
              Page {pageNumber} of {numPages}
            </p>

            <a
              className="btn btn-primary text-white"
              disabled={pageNumber >= numPages}
              onClick={this.nextPage}
            >
              Next
            </a>
          </div>
        </div>
        <Document file={samplePDF} onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} onLoadSuccess={this.onLoadSuccess()} />
        </Document>
      </div>
    );
  }
}

export default PDFReactViewer;
