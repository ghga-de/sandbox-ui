import './components.css';
import React from 'react';
import logo from '../logo.png';
import { moduleIds} from '../utils/modules';
import { Link } from "react-router-dom";
import { getCurrentUser } from '../utils/funcUtils';
import modules from './modules';

interface barItemProps {
    children: any;
    moduleId: moduleIds;
    moduleFocus: moduleIds;
    isHome?: boolean;
    className?: string;
};

interface topBarProps {
    moduleFocus: moduleIds;
}

const BarItem = (props: barItemProps) => {
    // if authentication is required for the
    // corresponding module,
    // only render the BarItem if user is logged in
    const currentUser = getCurrentUser();
    
    return (modules[props.moduleId].authRequired && !currentUser) ? (
        <span></span>
    ) : (
        <Link 
            to={`/${props.moduleId}`}
        >
            <button
                className={
                    "w3-container w3-button w3-round-xlarge" +
                    (props.className ? ` ${props.className}` : "") +
                    (props.isHome ? (
                            " w3-green"
                        ) : (
                            (props.moduleFocus === props.moduleId ? " w3-light-grey" : "")
                    )) 
                }
                style={{height: "50px", marginRight: "10px"}}
            >
                {props.children}
            </button>
        </Link>
    );
};

const TopBar = (props: topBarProps) => {
    const currentUser = getCurrentUser()
    return (
        <div 
            className="w3-bar w3-center w3-round-xlarge background"
        >
            <BarItem 
                moduleId="dashboard"
                isHome={true}
                moduleFocus={props.moduleFocus}
            >
                <span>
                    <img src={logo} height="40px" alt=""/>
                    Data Portal
                </span>
            </BarItem>
            <BarItem 
                moduleId="explore"
                moduleFocus={props.moduleFocus}
            >
                Explore
            </BarItem>
            <BarItem 
                moduleId="request"
                moduleFocus={props.moduleFocus}    
            >
                Request
            </BarItem>
            <BarItem 
                moduleId="login"
                className="w3-right"
                moduleFocus={props.moduleFocus}
            >
                {currentUser ? (
                        <span>
                            <i className={currentUser.icon} /> &nbsp;
                            {currentUser.firstName}
                            {currentUser.isDataSteward && (
                                <span className="w3-text-yellow">
                                    &nbsp;
                                    <i className="fas fa-crown" />
                                </span>
                            )}
                        </span>
                    ) : (
                        <span>
                            <i className="fas fa-user" /> &nbsp;
                            Login
                        </span>
                )}
            </BarItem>
        </div>
    );
};

export default TopBar;
