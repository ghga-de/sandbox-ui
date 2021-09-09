import { fileModel } from "../../dataModels/metadata";
import { bytesToGB } from "../../utils/funcUtils";
import KeyValueField from "../KeyValueField";
import Button from "../Button";

const FileAccess = (props: {file: fileModel}) => (
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
        <Button
            className="w3-right"
            color="green"
            icon="fas fa-download"
            onClick={() => alert("No implemented yet because of missing backend.")}
        >
            download
        </Button>
    </div>
)

export default FileAccess;
export {};
