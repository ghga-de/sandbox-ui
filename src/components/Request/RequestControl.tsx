import Button from "../Button";
import { updateRequestStatus } from "../../backendCalls/requests";
import { requestStatusType } from "../../dataModels/requests";

const controlButtonStyle = {margin: "8px"};

interface requestControlProps {
    requestId: string;
    requestStatus: requestStatusType;
};


const RequestControl = (props: requestControlProps) => (
    <div className="w3-panel">
        <span className="w3-text-green w3-large">Request Control:</span>
        { props.requestStatus === "pending" ? (
            <div>
                <p>
                    Approve or reject the request.
                </p>
                <div className="w3-panel w3-bar">
                    <Button
                        style={controlButtonStyle}
                        icon="fas fa-check"
                        color="green"
                        onClick={() => updateRequestStatus(props.requestId, "approved")}
                    >
                        approve
                    </Button>
                    <Button
                        style={controlButtonStyle}
                        icon="fas fa-times"
                        color="red"
                        onClick={() => updateRequestStatus(props.requestId, "rejected")}
                    >
                        reject
                    </Button>
                </div>
            </div>
        ) : (
            props.requestStatus === "approved" ? (
                <div>
                    <p>
                        The request has been approved.
                        You may withdraw it.
                    </p>
                    <div className="w3-panel w3-bar">
                        <Button
                            style={controlButtonStyle}
                            icon="fas fa-times"
                            color="red"
                            onClick={() => updateRequestStatus(props.requestId, "rejected")}
                        >
                            withdraw
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                    <p>
                        The request has been declined.
                        It cannot be re-opened.
                    </p>
                </div>
            )
        )}
    </div>
);

export default RequestControl;
