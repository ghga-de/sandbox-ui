import { file } from "../../dataModels/datasets";
import { bytesToGB } from "../../utils/funcUtils";
import KeyValueField from "../KeyValueField";

const FileAccess = (props: {file: file}) => (
    <div 
        className="w3-bar w3-round-xlarge w3-hover-light-grey interactive-item-header"
        style={{width: "100%"}}
    >
        <div className="w3-bar-item">
            <KeyValueField
                key_="ID"
                value={props.file.id}
            />
        </div>
        <div className="w3-bar-item">
            <KeyValueField
                key_="Name"
                value={props.file.name}
            />
        </div>
        <div className="w3-bar-item">
            <KeyValueField
                key_="Size [GB]"
                value={bytesToGB(props.file.size)}
            />
        </div>
        <button 
            className="w3-bar-item w3-button w3-right w3-green"
            onClick={() => alert("No implemented yet because of missing backend.")}    
        >
            <i className="fa fa-download"/>&nbsp;
            download
        </button>
    </div>
)

export default FileAccess;
