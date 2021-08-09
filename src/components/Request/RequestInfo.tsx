import { request } from "../../dataModels/requests";
import Badge from "../Badge";

const RequestInfo = (props: { reqMetadata: request}) => (
    <div>
        <div>
            <Badge key_="dataset" value={props.reqMetadata.datasetId}/>
            <Badge key_="status" value={props.reqMetadata.status}/>
            <Badge key_="Requestor" value={props.reqMetadata.requesterId}/>
        </div>
        <div className="w3-panel">
            <span className="w3-text-green w3-large">Purpose:</span>
            <br/>
            {props.reqMetadata.purpose}
        </div>
    </div>
);

export default RequestInfo;
