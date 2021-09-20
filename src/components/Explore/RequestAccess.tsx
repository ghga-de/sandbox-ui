import React from 'react';
import CreateRequestForm from './CreateRequestForm';
import { Link } from 'react-router-dom';
import Button from '../Button';

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
                                        <Button
                                            color="black"
                                            icon="fas fa-chevron-right"
                                        >
                                            Check Request Status
                                        </Button>
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
                    <Button 
                        className="w3-right"
                        color="green"
                        icon="fas fa-key"
                        style={{margin: "16px"}}
                        onClick={() => setWasExpanded(true)}
                    >
                        Request Access
                    </Button>
            )}
        </div>
    );
};

export default RequestAccess;
