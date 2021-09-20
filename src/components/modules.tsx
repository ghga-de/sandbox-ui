import Welcome from '../components/Welcome';
import Login from './Login/Login';
import Explore from '../components/Explore/Explore';
import RequestRouter from './Request/RequestRouter';

const modules = {
    welcome: {
        authRequired: false,
        component: <Welcome />
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
