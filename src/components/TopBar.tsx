import './components.css'
import { moduleIds, changeModuleFunction } from '../utils/modules';

interface barItemProps {
    children: string;
    moduleId: moduleIds;
    onClick: changeModuleFunction;
    className?: string;
}

const BarItem = (props: barItemProps) => (
    <button 
        className={
            "w3-bar-item w3-button w3-round-xlarge" +
            (props.className ? " " + props.className : "")
        }
        style={{marginRight: "10px"}}
        onClick={() => props.onClick(props.moduleId)}
    >
        {props.children}
    </button>
)

const TopBar = (props: {onModuleChange: changeModuleFunction}) => (
    <div 
        className="w3-bar w3-round-xlarge background"
    >
        <BarItem moduleId="welcome" onClick={props.onModuleChange} className="w3-green">
            GHGA Data Portal
        </BarItem>
        <BarItem moduleId="browse" onClick={props.onModuleChange}>
            Browse
        </BarItem>
        <BarItem moduleId="myRequests" onClick={props.onModuleChange}>
            My Requests
        </BarItem>
        <BarItem moduleId="myDatasets" onClick={props.onModuleChange}>
            My Datasets
        </BarItem>
    </div>
);

export default TopBar;