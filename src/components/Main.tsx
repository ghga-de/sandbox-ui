import React from 'react';
import TopBar from './TopBar';
import './components.css';
import { moduleIds, moduleComponents } from '../utils/modules';

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
