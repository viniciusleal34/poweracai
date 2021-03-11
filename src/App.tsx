import Global from './styles/global';
import Dashboard from './views/layouts/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { PrivateRoute, routes } from './routes/routes';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <Global />
      <AuthProvider>
        <Router>
          <Switch>
            {routes.public.map((route: any, index: number) => (
              <Route
                key={index}
                path={route.path}
                exact
                component={() => <route.component />}
              />
            ))}
            <PrivateRoute to="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
};

export { App };
