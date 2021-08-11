import React from 'react';
import CreateRequestForm from './CreateRequestForm';
import { Link } from 'react-router-dom';

const RequestAccess = (props: {datasetId: string}) => {
    const [wasExpanded, setWasExpanded] = React.useState<boolean>(false)

    // is set once a request was created:
    const [reqId, setReqId] = React.useState<string|null>(null)

    return (
        <div>
            {wasExpanded ? (
                    reqId ? (
                            <div 
                                className="w3-panel w3-round-xlarge w3-center w3-green w3-text-black"
                                style={{margin: "16px"}}
                            >
                                <p>
                                    A new request with ID "{reqId}" was created.
                                </p>
                                <p>
                                    <Link to={`/request/${reqId}`}>
                                        <button
                                            className="w3-button w3-round-xlarge w3-black"
                                        >
                                            <i className="fas fa-chevron-right" />&nbsp;
                                            Check Request Status
                                        </button>
                                    </Link>
                                </p>
                            </div>
                        ) : (
                            <CreateRequestForm 
                                datasetId={props.datasetId}
                                setReqId={setReqId}
                            />
                    )
                ) : (
                    <button 
                        className="w3-button w3-right w3-round-xlarge w3-green"
                        style={{margin: "16px"}}
                        onClick={() => setWasExpanded(true)}
                    >
                        <i className="fas fa-key"/>&nbsp;Request Access
                    </button>
            )}
        </div>
    );
};

export default RequestAccess;
