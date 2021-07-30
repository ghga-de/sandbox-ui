import '../components.css';
import { requestOutline } from "../../dataModels/requests";
import KeyValueField from "../KeyValueField";


interface requestSideBarProps {
    reqList: requestOutline[];
    reqFocus: null | string;
    changeRequestFocus: (newFocus: string) => void;
}

const RequestSideBar = (props: requestSideBarProps) =>  (
    <div
        className="w3-bar-block w3-panel w3-cell w3-round-xlarge side-bar"
        style={{
            width: "25%", 
            height: "100%"
        }}
    >
        <h2 className="w3-bar-item w3-round-xlarge">Requests:</h2>
        {
            props.reqList.map( (req) => (
                <button
                    key={req.id}
                    className={
                        "w3-bar-item w3-button w3-round-xlarge w3-black" +
                        (req.id === props.reqFocus ? " w3-grey": "")
                    }
                    style={{marginBottom: "8px"}}
                    onClick={() => props.changeRequestFocus(req.id)}
                >
                    <KeyValueField key_="ID" value={req.id}/>
                    <KeyValueField key_="Dataset" value={req.datasetId}/>
                    <KeyValueField key_="Status" value={req.status}/>
                </button>
            ))

        }
    </div>

);

export default RequestSideBar;
