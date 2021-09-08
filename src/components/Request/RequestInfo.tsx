import { requestModel } from "../../dataModels/requests";
import Badge from "../Badge";

const RequestInfo = (props: { request: requestModel}) => (
    <div>
        <div>
            <Badge key_="dataset" value={props.request.datasetId}/>
            <Badge key_="status" value={props.request.status}/>
            <Badge key_="Requestor" value={props.request.requesterId}/>
        </div>
        <div className="w3-panel">
            <span className="w3-text-green w3-large">Purpose:</span>
            <br/>
            {props.request.purpose}
        </div>
    </div>
);

export default RequestInfo;
