import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

PublicRoutes.propTypes = {};

function PublicRoutes({ component: Component, layout: Layout, ...rest }) {
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

export default PublicRoutes;
