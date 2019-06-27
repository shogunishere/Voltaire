import React, { Component } from 'react';

class Asistent extends Component {
  render() {
    return (
      <div className="text-center">
        <h3 className="m-4">Glasovni asistent Voltaire:</h3>
        {/* Vi: krog */}
        <svg style={{ marginTop: '8%' }} width="100%" height="350">
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
        </svg>
        {/* Voltaire pravokotnik */}
        <svg style={{ marginTop: '5%' }} width="100%" height="300">
          <rect
            width="60%"
            height="250"
            x="20%"
            stroke="black"
            strokeWidth=".5"
            fill="#ffffff"
          />
          <text
            fontSize="1.3em"
            textAnchor="middle"
            x="50%"
            y="10%"
            fontWeight="bold"
            fill="black"
            dy=".3em"
          >
            Voltaire:
          </text>
        </svg>
      </div>
    );
  }
}

export default Asistent;
