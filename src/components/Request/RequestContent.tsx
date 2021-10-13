import React from "react";
import { requestModel } from "../../dataModels/requests";
import RequestInfo from "./RequestInfo";
import LoadingIndicator from "../LoadingIndicator";
import { getCurrentUser } from "../../utils/funcUtils";
import RequestControl from "./RequestControl";
import FileAccessList from "./FileAccessList";

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
                                <div>
                                    <hr/>
                                    {props.request.status === "pending" ? (
                                        <p>
                                            This request is pending.
                                            Please wait for a data steward to review it.
                                        </p>
                                    ) : (
                                        props.request.status === "approved" ? (
                                            <FileAccessList 
                                                key={props.request.dataset_id}
                                                datasetId={props.request.dataset_id} 
                                            />
                                        ) : (
                                            <p>
                                                This request has been rejected by the data steward.
                                            </p>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                )}
                
            </div>
        </div>
    );
};

export default RequestContent;
