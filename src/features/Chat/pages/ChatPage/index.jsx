import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
ChatPage.propTypes = {};

function ChatPage(props) {
  const ENDPOINT = 'http://localhost:8080';
  useEffect(() => {
    const socket = io(ENDPOINT);
  }, []);
  return (
    <div>
      <p>asd</p>
    </div>
  );
}

export default ChatPage;
