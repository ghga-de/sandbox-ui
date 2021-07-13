import Welcome from '../components/Welcome';
import NotImplementedYet from '../components/NotImplementedYet';

export type moduleIds = "welcome" | "browse" | "myRequests" | "myDatasets"

export type changeModuleFunction = (newModule: moduleIds) => void;

export const moduleComponents = {
    welcome: <Welcome />,
    browse: <NotImplementedYet />,
    myRequests: <NotImplementedYet />,
    myDatasets: <NotImplementedYet />,
}
