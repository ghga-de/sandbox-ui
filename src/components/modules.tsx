import Dashboard from './Dashboard';
import Login from './Login/Login';
import Explore from '../components/Explore/Explore';
import RequestRouter from './Request/RequestRouter';

const modules = {
    dashboard: {
        authRequired: false,
        component: <Dashboard />
    },
    explore: {
        authRequired: false,
        component: <Explore />
    },
    request: {
        authRequired: true,
        component: <RequestRouter />
    },
    login: {
        authRequired: false,
        component: <Login />
    },
};

export default modules;
