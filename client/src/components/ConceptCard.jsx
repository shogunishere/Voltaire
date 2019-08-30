import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Draggable, { DraggableCore } from 'react-draggable';

class ConceptCard extends Component {
  render() {
    return (
      // <Draggable
      //   handle="strong"
      //   allowAnyClick={false}
      //   cancel={null}
      //   disabled={false}
      //   enableUserSelectHack={true}
      //   offsetParent={null}
      //   grid={null}
      //   transform={null}
      //   axis="both"
      //   bounds={false}
      //   defaultClassName="react-draggable"
      //   defaultClassNameDragging="react-draggable-dragging"
      //   defaultClassNameDragged="react-draggable-dragged"
      //   position={null}
      //   // style={{
      //   //   top: '50%',
      //   //   left: '50%',
      //   //   transform: 'translate(-50%, -50%)'
      //   // }}
      // >
      //   <DraggableCore
      //     handle="strong"
      //     allowAnyClick={false}
      //     cancel={null}
      //     disabled={false}
      //     enableUserSelectHack={true}
      //     offsetParent={null}
      //     grid={null}
      //     transform={null}
      //     axis="both"
      //     bounds={false}
      //     defaultClassName="react-draggable"
      //     defaultClassNameDragging="react-draggable-dragging"
      //     defaultClassNameDragged="react-draggable-dragged"
      //     position={null}
      //   >
      //     <div
      //       className="box no-cursor react-draggable react-draggable react-draggable-dragged"
      //       transform={null}
      //     >
      //       <strong className="cursor">
      //         <div>{this.props.title}</div>
      //       </strong>
      //       <div>You must click my handle to drag me</div>

      <Draggable transform bounds="body" handle=".handle">
        <div
          style={{
            width: '35%',
            position: 'absolute',
            top: '50%',
            right: '32.5%'
          }}
          id="concept-card"
          className="react-draggable-dragged card cursor"
        >
          <div
            id="title"
            class="handle cursor card-header"
            style={{
              cursor: 'move'
            }}
          >
            {this.props.title}
            <span
              className="close"
              style={{ float: 'right', cursor: 'pointer' }}
              onClick={this.props.onClose}
            >
              &times;
            </span>
          </div>

          <div class="card-body">
            <p id="info" class="card-text">
              {this.props.content}
            </p>
            <a
              style={{ color: 'white', cursor: 'pointer' }}
              href={this.props.fullArticleLink}
              target="_blank"
              class="btn btn-primary"
            >
              Link to full article
            </a>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default ConceptCard;
