import '../components.css';
import { Link } from 'react-router-dom';
import { requestModel } from "../../dataModels/requests";
import KeyValueField from "../KeyValueField";


interface requestSideBarProps {
    reqList: requestModel[];
    reqFocus?: string;
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
                <Link 
                    key={req.id}
                    to={`/request/${req.id}`}
                    style={{textDecoration: "none"}}
                >
                    <button
                        className={
                            "w3-bar-item w3-button w3-round-xlarge w3-black" +
                            (req.id === props.reqFocus ? " w3-light-grey": "")
                        }
                        style={{marginBottom: "8px"}}
                    >
                        <KeyValueField key_="ID" value={req.id}/>
                        <KeyValueField key_="Dataset" value={req.dataset_id}/>
                        <KeyValueField key_="Status" value={req.status}/>
                    </button>
                </Link>
            ))

        }
    </div>

);

export default RequestSideBar;
