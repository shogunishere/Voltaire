export default class PDFTron {
  init = (source, element) => {
    this.viewer = new window.PDFTron.WebViewer(
      {
        path: '/WebViewer/lib',
        initialDoc: 'myPDF.pdf'
      },
      document.querySelector('#viewer')
    );

    console.log(this.viewer);
  };

  onDocumentLoaded = function(instance) {
    // Executed when the document is loaded
    // NOTE: Document is not rendered yet
    console.log(instance.getPageCount());
  };

  // accessing Tools allows you to code custom behavior when user highlights text, so I have to locate them

  // I have to find the context to manipulate highlight popover UI and from there its behavior
  // Turns out that this.viewer references WebViewer, the ultimate object(top of the hierarchy)
  // accessing Tools allows you to code custom behavior when user highlights text, so I have to locate them
  // GOAL:
  // Hitconcept- on highlight display your own menu:
  // hardcode pdf & viewer --> then() --> hitconcept DOESN'T WORK- NOT IN A CLASS
}

// found React PDFTron sample -- go to App.jsx
