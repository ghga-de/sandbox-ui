import React from 'react';
import TopBar from './TopBar';
import './components.css';
import { moduleIds } from '../utils/modules';
import { getCurrentUser } from '../utils/funcUtils';
import RequireAuth from './RequireAuth';
import modules from './modules';

const Main = (props: {moduleFocus: moduleIds}) => {
    const currentUser = getCurrentUser();

    return (
        <div style={{height: "100%", margin: "10px 16px"}}>
            <TopBar 
                moduleFocus={props.moduleFocus}
            />
            <div 
                className="w3-panel w3-round-xlarge foreground"
                style={{height: "calc(100% - 70px)", padding: "0px"}}
            >
                {(modules[props.moduleFocus].authRequired && !currentUser) ? (
                    <RequireAuth />
                ) : (
                    modules[props.moduleFocus].component
                )}
            </div>

        </div>
    );
};

export default Main;
