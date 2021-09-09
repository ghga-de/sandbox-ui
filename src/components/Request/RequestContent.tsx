import React from "react";
import { requestModel } from "../../dataModels/requests";
import RequestInfo from "./RequestInfo";
import LoadingIndicator from "../LoadingIndicator";
import FileAccess from "./FileAccess";
import { getCurrentUser } from "../../utils/funcUtils";
import RequestControl from "./RequestControl";
// import FileAccessList from "./FileAccessList";

interface requestContentProps {
    request: requestModel
};

const RequestContent = (props: requestContentProps) => {
    const currentUser = getCurrentUser();

    return (
        <div className="w3-panel">
            
            <div>
                <h3 className="w3-center">
                    <span className="w3-text-green">Request:</span>&nbsp;
                    {props.request.id}
                </h3>
                {props.request == null ? (
                        <LoadingIndicator 
                            size="large"
                            message="Simulated loading of request metadata..."
                        />
                    ) : (
                        <div className="w3-center">
                            <RequestInfo request={props.request} />
                            {(currentUser && currentUser.isDataSteward) ? (
                                <div>
                                    <hr/>
                                    <RequestControl 
                                        requestId={props.request.id}
                                        requestStatus={props.request.status}
                                    />
                                </div>
                            ) : (
                                props.request.status === "approved" && (
                                    <div>
                                        <hr/>
                                        {/* <FileAccessList datasetId={request.datasetId} /> */}
                                    </div>
                            ))}
                        </div>
                )}
                
            </div>
        </div>
    );
};

export default RequestContent;
