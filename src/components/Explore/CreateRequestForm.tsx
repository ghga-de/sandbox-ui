import React from "react";
import { postNewRequest } from "../../backendCalls/requests";
import { hardCodedUserId } from "../../data/users";

interface createRequestFormProps {
    datasetId: string,
    onSend: () => void;
}

const CreateRequestForm = (props: createRequestFormProps) => {
    const [purpose, setPurpose] = React.useState<string>("")
    
    return (
        <div className="w3-panel">
            <div className="w3-text-green">
                Please explain your interest:
            </div>
            <textarea className="w3-input w3-border"
                rows={2}
                placeholder={
                    "Please explain why you would like get access to this dataset " + 
                    "and specify how you will use this data."
                }
                value={purpose}
                onChange={(event) => setPurpose(event.currentTarget.value)}
            />
            <button 
                className="w3-button w3-right w3-round-xlarge w3-green"
                style={{margin: "16px"}}
                onClick={() => {
                    postNewRequest(
                        {
                            datasetId: props.datasetId,
                            purpose: purpose,
                            requesterId: hardCodedUserId
                        }
                    );
                    props.onSend()
                }}
            >
                <i className="fas fa-key"/>&nbsp;Send Request
            </button>
        </div>
    );
};

export default CreateRequestForm;
