import React from 'react';
import TopBar from './TopBar';
import Welcome from '../components/Welcome';
import NotImplementedYet from '../components/NotImplementedYet';
import Explore from '../components/Explore/Explore';
import './components.css';
import { moduleIds } from '../utils/modules';

export const moduleComponents = {
    welcome: <Welcome />,
    browse: <Explore />,
    request: <NotImplementedYet />,
    access: <NotImplementedYet />,
    login: <NotImplementedYet />,
}

const Main = () => {
    const [moduleFocus, setModuleFocus] = React.useState<moduleIds>("welcome");

    return (
        <div style={{height: "100%", margin: "10px 16px"}}>
            <TopBar onModuleChange={setModuleFocus}></TopBar>
            <div 
                className="w3-panel w3-round-xlarge foreground"
                style={{height: "calc(100% - 70px)", padding: "16px"}}
            >
                {moduleComponents[moduleFocus]}
            </div>

        </div>
    );
};

export default Main;
