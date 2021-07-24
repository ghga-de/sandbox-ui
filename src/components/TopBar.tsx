import './components.css';
import logo from '../logo.png';
import { moduleIds, changeModuleFunction } from '../utils/modules';

interface barItemProps {
    children: any;
    moduleId: moduleIds;
    onClick: changeModuleFunction;
    className?: string;
}
;
const BarItem = (props: barItemProps) => (
    <button 
        className={
            "w3-container w3-button w3-round-xlarge" +
            (props.className ? " " + props.className : "")
        }
        style={{height: "50px", marginRight: "10px"}}
        onClick={() => props.onClick(props.moduleId)}
    >
        {props.children}
    </button>
);

const TopBar = (props: {onModuleChange: changeModuleFunction}) => (
    <div 
        className="w3-bar w3-center w3-round-xlarge background"
    >
        <BarItem 
            moduleId="welcome" 
            onClick={props.onModuleChange} 
            className="w3-green"
        >
            <span>
                <img src={logo} height="40px" alt=""/>
                Data Portal
            </span>
        </BarItem>
        <BarItem moduleId="browse" onClick={props.onModuleChange}>
            Explore
        </BarItem>
        <BarItem moduleId="request" onClick={props.onModuleChange}>
            Request
        </BarItem>
        <BarItem 
            moduleId="login" 
            onClick={props.onModuleChange}
            className="w3-right"
        >
            <span><i style={{paddingRight: "8px"}} className="fas fa-user"/>Login</span>
        </BarItem>
    </div>
);

export default TopBar;
