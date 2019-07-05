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

  render() {
    return (
      <div
        style={{ marginTop: '20%', marginBottom: '70%' }}
        className="container text-center"
      >
        <h3 style={{ marginTop: '6%' }}>Glasovni asistent Voltaire:</h3>
        <div style={{ marginTop: '10%' }} className="input-grop mb-3">
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
            <a onClick={this.ask} className="btn btn-primary">
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
