import './components.css';
import React from 'react';
import logo from '../logo.png';
import { moduleIds} from '../utils/modules';
import { Link } from "react-router-dom";

interface barItemProps {
    children: any;
    moduleId: moduleIds;
    moduleFocus: moduleIds;
    className?: string;
};

interface topBarProps {
    moduleFocus: moduleIds;
}

const BarItem = (props: barItemProps) => (
    <Link 
        to={`/${props.moduleId}`}
    >
        <button
            className={
                "w3-container w3-button w3-round-xlarge" +
                (props.className ? (
                        " " + props.className
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

const TopBar = (props: topBarProps) => (
    <div 
        className="w3-bar w3-center w3-round-xlarge background"
    >
        <BarItem 
            moduleId="welcome"
            className="w3-green"
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
            <span><i style={{paddingRight: "8px"}} className="fas fa-user"/>Login</span>
        </BarItem>
    </div>
);

export default TopBar;
