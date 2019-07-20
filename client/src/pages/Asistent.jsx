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

    // set language
    recognition.lang = 'en-US';

    // set to streaming
    recognition.interimResults = true;

    recognition.onresult = event => {
      console.log(recognition);
      const speechToText = event.results[0][0].transcript;
      console.log(speechToText);

      // set input to text
      document.querySelector('#vi').value = speechToText;
    };
    recognition.start();
  };

  // speech syntesizer
  // syntesize = () => {
  //   var synth = window.speechSynthesis;
  //   var inputForm = document.querySelector('form');
  //   var inputTxt = document.querySelector('.txt');
  //   var voiceSelect = document.querySelector('select');
  //   var pitch = document.querySelector('#pitch');
  //   var pitchValue = document.querySelector('.pitch-value');
  //   var rate = document.querySelector('#rate');
  //   var rateValue = document.querySelector('.rate-value');
  //   var voices = [];

  //   function populateVoiceList() {
  //     voices = synth.getVoices();

  //     for(i = 0; i < voices.length ; i++) {
  //       var option = document.createElement('option');
  //       option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

  //       if(voices[i].default) {
  //         option.textContent += ' -- DEFAULT';
  //       }

  //       option.setAttribute('data-lang', voices[i].lang);
  //       option.setAttribute('data-name', voices[i].name);
  //       voiceSelect.appendChild(option);
  //     }

  //     populateVoiceList();
  //     if (speechSynthesis.onvoiceschanged !== undefined) {
  //       speechSynthesis.onvoiceschanged = populateVoiceList;
  //     }
  //   }
  // }

  // onFormSubmit = () => {
  //   event.preventDefault();

  //   var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  //   var selectedOption = voiceSelect.selectedOptions[0].getAttribute(
  //     'data-name'
  //   );

  //   for (i = 0; i < voices.length; i++) {
  //     if (voices[i].name === selectedOption) {
  //       utterThis.voice = voices[i];
  //     }
  //   }

  //   utterThis.pitch = pitch.value;
  //   utterThis.rate = rate.value;
  //   synth.speak(utterThis);

  //   utterThis.onpause = function(event) {
  //     var char = event.utterance.text.charAt(event.charIndex);
  //     console.log(
  //       'Speech paused at character ' +
  //         event.charIndex +
  //         ' of "' +
  //         event.utterance.text +
  //         '", which is "' +
  //         char +
  //         '".'
  //     );
  //   };
  // };

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
        <form>
          <input type="text" class="txt" />
          <div>
            <label for="rate">Rate</label>
            <input
              type="range"
              min="0.5"
              max="2"
              value="1"
              step="0.1"
              id="rate"
            />
            <div class="rate-value">1</div>
            <div class="clearfix" />
          </div>
          <div>
            <label for="pitch">Pitch</label>
            <input
              type="range"
              min="0"
              max="2"
              value="1"
              step="0.1"
              id="pitch"
            />
            <div class="pitch-value">1</div>
            <div class="clearfix" />
          </div>
          <select />
        </form>
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
