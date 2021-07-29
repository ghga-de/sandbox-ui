import Button from "../Button";

const controlButtonStyle = {margin: "8px"};

const RequestControl = (props: { datasetId: string }) => (
    <div className="w3-panel">
        <span className="w3-text-green w3-large">Request Control:</span>
        <p>
            Approve or decline the request.
        </p>
        <div className="w3-panel w3-bar">
            <Button
                style={controlButtonStyle}
                icon="fas fa-check"
                color="green"
            >
                approve
            </Button>
            <Button
                style={controlButtonStyle}
                icon="fas fa-times"
                color="red"
            >
                decline
            </Button>
        </div>
    </div>
);

export default RequestControl;
