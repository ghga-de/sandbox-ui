import React from "react";
import { getReqMetadata } from "../../backendCalls/requests";
import { request } from "../../dataModels/requests";
import RequestInfo from "./RequestInfo";
import LoadingIndicator from "../LoadingIndicator";
import FileAccessList from "./FileAccessList";
import RequestHistory from "./RequestHistory";

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
                            <RequestInfo reqMetadata={reqMetadata} />
                            <RequestHistory reqMetadata={reqMetadata} />
                            {reqMetadata.status === "approved" && (
                                <div>
                                    <hr/>
                                    <FileAccessList datasetId={reqMetadata.datasetId} />
                                </div>
                            )}
                        </div>
                )}
                
            </div>
        </div>
    );
};

export default RequestContent;
