import Welcome from '../components/Welcome';
import NotImplementedYet from '../components/NotImplementedYet';
import Explore from '../components/Explore/Explore';

export type moduleIds = (
    "welcome" |
    "browse" |
    "request" |
    "access" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;

export const moduleComponents = {
    welcome: <Welcome />,
    browse: <Explore />,
    request: <NotImplementedYet />,
    access: <NotImplementedYet />,
    login: <NotImplementedYet />,
}
