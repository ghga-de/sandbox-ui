import React from "react";
import { postNewRequest } from "../../backendCalls/requests";
import { getCurrentUser } from "../../utils/funcUtils";
import Button from "../Button";

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
            <Button 
                className="w3-right"
                color="green"
                icon="fas fa-key"
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
                                    dataset_id: props.datasetId,
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
                Send Request
            </Button>
        </div>
    );
};

export default CreateRequestForm;
