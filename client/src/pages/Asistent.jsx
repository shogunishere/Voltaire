import React, { Component } from 'react';
import axios from 'axios';

class Asistent extends Component {
  ask = () => {
    // clear previous answer
    document.querySelector('#voltaire').value = '';

    // get input question
    let question = document.querySelector('#vi').value;
    this.props.getAnswer(question);
  };

  // speech recognition
  speak = () => {
    window.SpeechRecognition =
      window.webkitSpeechRecognition || window.SpeechRecognition;

    if ('SpeechRecognition' in window) {
      // speech recognition API supported
    } else {
      // speech recognition API not supported
    }

    const recognition = new window.SpeechRecognition();

    // log recognition
    console.log(recognition);

    // set language
    recognition.lang = 'en-US';

    // set to streaming
    recognition.interimResults = true;

    recognition.onresult = event => {
      const speechToText = event.results[0][0].transcript;
      console.log(speechToText);

      // set input to text
      document.querySelector('#vi').value = speechToText;
    };
    recognition.start();
  };

  render() {
    return (
      <div
        style={{ marginTop: '20%', marginBottom: '70%' }}
        className="container text-center"
      >
        <h3 style={{ marginTop: '6%' }}>Glasovni asistent Voltaire:</h3>
        <div style={{ marginTop: '10%' }} className="input-grop mb-3">
          <a
            style={{ cursor: 'pointer', fontSize: '2.5em' }}
            onClick={this.speak}
          >
            <i class="fa fa-microphone" />
          </a>
          <div class="form-group">
            <select id="voice-select" class="form-control form-control-lg">
              <option data-lang="sl-SI" value="sl-SI">
                Slovenščina
              </option>
              <option data-lang="en-US" value="en-US">
                English
              </option>
            </select>
          </div>
          <div className="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">
              Vi:
            </span>
            <input
              id="vi"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <a
              style={{ cursor: 'pointer', color: 'white' }}
              onClick={this.ask}
              className="btn btn-primary"
            >
              Ask
            </a>
          </div>
        </div>
        {/* Text area */}
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Voltaire</span>
          </div>
          <textarea
            id="voltaire"
            class="form-control"
            aria-label="With textarea"
          />
        </div>
      </div>
    );
  }
}

export default Asistent;

{
  /* Vi: krog */
}
{
  /* <svg style={{ marginTop: '8%' }} width="100%" height="350">
<circle
  cx="50%"
  cy="50%"
  r="135"
  stroke="black"
  strokeWidth=".5"
  fill="#ffffff"
/>
<text
  fontSize="1.3em"
  textAnchor="middle"
  x="50%"
  y="20%"
  fontWeight="bold"
  fill="black"
  dy=".3em"
>
  Vi:
</text>
{/* Input */
}
// </svg>
// {/* Voltaire pravokotnik */}
// <svg style={{ marginTop: '5%' }} width="100%" height="300">
// <rect
//   width="60%"
//   height="250"
//   x="20%"
//   stroke="black"
//   strokeWidth=".5"
//   fill="#ffffff"
// />
// <text
//   fontSize="1.3em"
//   textAnchor="middle"
//   x="50%"
//   y="10%"
//   fontWeight="bold"
//   fill="black"
//   dy=".3em"
// >
//   Voltaire:
// </text>
// </svg> */}
