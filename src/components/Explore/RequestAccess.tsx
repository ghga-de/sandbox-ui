import React from 'react';
import CreateRequestForm from './CreateRequestForm';

const RequestAccess = (props: {datasetId: string}) => {
    const [wasExpanded, setWasExpanded] = React.useState<boolean>(false)
    const [wasSend, setWasSend] = React.useState<boolean>(false)

    return (
        <div>
            {wasExpanded ? (
                    wasSend ? (
                            <div 
                                className="w3-panel w3-round-xlarge w3-center w3-green w3-text-black"
                                style={{margin: "16px"}}
                            >
                                Request was sent. 
                                Please check the status by clicking
                                on the "Request" item in the top bar.
                            </div>
                        ) : (
                            <CreateRequestForm 
                                datasetId={props.datasetId}
                                onSend={() => setWasSend(true)}
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
