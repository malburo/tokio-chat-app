import Error401Page from 'components/Errors/Error401Page';
import Error404Page from 'components/Errors/Error404Page';
import Error500Page from 'components/Errors/Error500Page';
import BlankLayout from 'components/Layouts/BlankLayout';
import Loader from 'components/Loader';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import AuthRoutes from './AuthRoutes';
import ErrorRoutes from './ErrorRoutes';
import PublicRoutes from './PublicRoutes';

const Auth = React.lazy(() => import('features/Auth'));
const Chat = React.lazy(() => import('features/Chat'));
function RouterComponent() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <AuthRoutes path="/auth" component={Auth} layout={BlankLayout} />
          <PublicRoutes path="/" component={Chat} layout={BlankLayout} />
          <ErrorRoutes exact path="/401" component={Error401Page} />
          <ErrorRoutes exact path="/404" component={Error404Page} />
          <ErrorRoutes exact path="/500" component={Error500Page} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouterComponent;
