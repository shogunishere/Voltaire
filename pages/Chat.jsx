import React, { Component } from 'react';

// MessageBox component
import { MessageBox } from 'react-chat-elements-pretty';

class Chat extends Component {
  render() {
    return (
      <div className="text-center container">
        <MessageBox
          position={'left'}
          type={'photo'}
          text={'react.svg'}
          data={{
            uri: 'https://facebook.github.io/react/img/logo.svg',
            status: {
              click: false,
              loading: 0
            }
          }}
        />
      </div>
    );
  }
}

export default Chat;
