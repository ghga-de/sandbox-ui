import React from "react";
import { getReqMetadata } from "../../backendCalls/requests";
import { request } from "../../dataModels/requests";
import Badge from "../Badge";
import LoadingIndicator from "../LoadingIndicator";

interface requestContentProps {
    requestId: string;
};

const RequestContent = (props: requestContentProps) => {
    const [reqMetadata, setReqMetadata] = React.useState<request|null>(null);

    // on mount:
    React.useEffect( () => setReqMetadata(getReqMetadata(props.requestId)), []);

    return (
        <div className="w3-panel">
            
            <div>
                <h3 className="w3-center">
                    <span className="w3-text-green">Request:</span>&nbsp;
                    {props.requestId}
                </h3>
                {reqMetadata == null ? (
                        <LoadingIndicator 
                            size="large"
                            message="Simulated loading of request metadata..."
                        />
                    ) : (
                        <div className="w3-center">
                            <div>
                                <Badge key_="dataset" value={reqMetadata.datasetId}/>
                                <Badge key_="status" value={reqMetadata.status}/>
                                <Badge key_="Requestor" value={reqMetadata.requesterId}/>
                            </div>
                            <div className="w3-panel">
                                <span className="w3-text-green w3-large">Purpose:</span>
                                <br/>
                                {reqMetadata.purpose}
                            </div>
                            <div className="w3-panel">
                                <hr/>
                                <span className="w3-text-green w3-large">History:</span>
                                <br/>
                                {reqMetadata.history
                                    .sort((a,b) => (a.datetime > b.datetime) ? 1 : -1)
                                    .map( (event) => (
                                        <div 
                                            className="w3-panel"
                                            key={event.datetime.toUTCString()}
                                        >
                                            <span className="w3-text-green w3-small">
                                                {event.datetime.getHours()}:
                                                {event.datetime.getMinutes()}&nbsp;-&nbsp;
                                                {event.datetime.getDay()}.
                                                {event.datetime.getMonth()}.
                                                {event.datetime.getFullYear()}
                                            </span><br/>
                                            <span>request {event.eventType}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                )}
                
            </div>
        </div>
    );
};

export default RequestContent;
