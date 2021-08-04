import React from "react";
import { postNewRequest } from "../../backendCalls/requests";
import { getCurrentUser } from "../../utils/funcUtils";

interface createRequestFormProps {
    datasetId: string,
    setReqId: (reqId: string) => void;
}

const CreateRequestForm = (props: createRequestFormProps) => {
    const currentUser = getCurrentUser();
    const [purpose, setPurpose] = React.useState<string>("");
    
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
                    if (currentUser) {
                        if (currentUser.isDataSteward) {
                            alert(
                                "Your are a Data Steward.\n" + 
                                "Data Steward cannot request access to a dataset.\n\n" +
                                "Please log in with another account."
                            )
                        } else {
                            const reqId = postNewRequest(
                                {
                                    datasetId: props.datasetId,
                                    purpose: purpose,
                                    requesterId: currentUser.id
                                }
                            );
                            props.setReqId(reqId);
                        }
                    } else {
                        alert(
                            "You are not authenticated.\n\n" +
                            "Please log in first."
                        );
                    }
                }}
            >
                <i className="fas fa-key"/>&nbsp;Send Request
            </button>
        </div>
    );
};

export default CreateRequestForm;
