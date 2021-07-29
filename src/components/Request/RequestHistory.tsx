import { request } from "../../dataModels/requests";

const RequestHistory = (props: { reqMetadata: request }) => (
    
    <div className="w3-panel">
        <hr/>
        <span className="w3-text-green w3-large">History:</span>
        <br/>
        {props.reqMetadata.history
            .sort((a,b) => (a.datetime > b.datetime) ? 1 : -1)
            .map( (event) => (
                <div 
                    className="w3-panel"
                    key={event.datetime.toUTCString()}
                >
                    <span className="w3-text-green w3-small">
                        {event.datetime.toLocaleTimeString("de")}&nbsp;-&nbsp;
                        {event.datetime.toLocaleDateString("de")}
                    </span><br/>
                    <span>request {event.eventType}</span>
                </div>
            ))
        }
    </div>
);

export default RequestHistory;
