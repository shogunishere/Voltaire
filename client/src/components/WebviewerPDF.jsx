import React from 'react';

export default class WebviewerPDF extends React.Component {
  constructor(props) {
    super(props);
    // references the PDF viewer ?
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  componentDidMount() {
    // references the pdf
    const { src } = this.props;

    // references the node
    const element = this.viewerRef.current;

    this.backend.init(src, element);
  }

  onHighlight = () => {
    this.backend.onHighlight();
  };

  render() {
    return (
      <div
        ref={this.viewerRef}
        id="viewer"
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}
