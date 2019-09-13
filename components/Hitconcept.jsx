import React, { Component, Fragment } from 'react';
import HighlightPop from 'react-highlight-pop';
import ConceptCard from './ConceptCard';
import PDFReactViewer from './PDFReactViewer';
import WebviewerPDF from './WebviewerPDF';
import PDFJSBackend from '../backends/pdfjs';
import WebviewerBackend from '../backends/webviewer';

// axios
import axios from 'axios';

class Hitconcept extends Component {
  state = {
    displayConcept: false,
    title: '',
    content: '',
    fullArticleLink: '',
    highlightedText: ''
  };

  closeAlertBox = () => {
    this.setState({ displayConcept: false });
  };

  getSummaryAxios = () => {
    axios
      .get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/` +
          this.state.highlightedText
      )
      .then(res => {
        console.log(res.data);

        const articleTitle = res.data.title;

        const result = res.data.extract;

        const fullArticleLink = res.data.content_urls.desktop.page;

        console.log(fullArticleLink);

        // set title
        this.setState({ title: articleTitle });

        // set content
        this.setState({ content: result });

        // set display alert to true
        this.setState({ displayConcept: true });

        // set full article
        this.setState({ fullArticleLink: fullArticleLink });
      })
      .catch(err => console.log(err));
  };

  popoverItems = () => (
    <Fragment>
      <a
        onClick={() => this.getSummaryAxios()}
        style={{ color: 'white', cursor: 'pointer' }}
      >
        Hitconcept &nbsp;|
      </a>
      <a
        href="/asistent"
        target="_blank"
        style={{ color: 'white', cursor: 'pointer', textDecoration: 'none' }}
      >
        &nbsp; Asistent
      </a>
    </Fragment>
  );

  getSelectionText = () => {
    var text = '';
    if (window.getSelection) {
      text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
      text = document.selection.createRange().text;
    }
    this.setState({ highlightedText: text });
    console.log(text);
  };

  // make the div movable
  render() {
    let alertBox = null;

    if (this.state.displayConcept) {
      alertBox = (
        <ConceptCard
          id="concept-card"
          style={{ zIndex: '2' }}
          display={this.state.display}
          onClose={this.closeAlertBox}
          fullArticleLink={this.state.fullArticleLink}
          title={this.state.title}
          content={this.state.content}
        />
      );
    }

    return (
      <HighlightPop
        onHighlightPop={this.getSelectionText}
        popoverItems={this.popoverItems}
      >
        <PDFReactViewer />

        {alertBox}
      </HighlightPop>
    );
  }
}

export default Hitconcept;
