import React from 'react';
import TopBar from './TopBar';
import Welcome from '../components/Welcome';
import NotImplementedYet from '../components/NotImplementedYet';
import Explore from '../components/Explore/Explore';
import RequestRouter from './Request/RequestRouter';
import './components.css';
import { moduleIds } from '../utils/modules';

export const moduleComponents = {
    welcome: <Welcome />,
    explore: <Explore />,
    request: <RequestRouter />,
    login: <NotImplementedYet />,
}


const Main = (props: {moduleFocus: moduleIds}) => {
    return (
        <div style={{height: "100%", margin: "10px 16px"}}>
            <TopBar 
                moduleFocus={props.moduleFocus}
            />
            <div 
                className="w3-panel w3-round-xlarge foreground"
                style={{height: "calc(100% - 70px)", padding: "0px"}}
            >
                {moduleComponents[props.moduleFocus]}
            </div>

        </div>
    );
};

export default Main;
