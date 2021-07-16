import Welcome from '../components/Welcome';
import NotImplementedYet from '../components/NotImplementedYet';
import Explore from '../components/Explore/Explore';

export type moduleIds = (
    "welcome" |
    "browse" |
    "myRequests" |
    "myDatasets" |
    "login"
)

export type changeModuleFunction = (newModule: moduleIds) => void;

export const moduleComponents = {
    welcome: <Welcome />,
    browse: <Explore />,
    myRequests: <NotImplementedYet />,
    myDatasets: <NotImplementedYet />,
    login: <NotImplementedYet />,
}
