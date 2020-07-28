import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

ErrorRoutes.propTypes = {};

function ErrorRoutes({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default ErrorRoutes;
