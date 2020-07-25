import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from 'components/NotFound';
import ChatPage from './pages/ChatPage';

Chat.propTypes = {};

function Chat(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ChatPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Chat;
