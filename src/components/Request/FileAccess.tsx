import React from "react";
import { fileModel } from "../../dataModels/metadata";
import { AccessUrl, drsObjectModel } from "../../dataModels/storage";
import { getOneDrsObject } from "../../backendCalls/storage";
import { bytesToGB } from "../../utils/funcUtils";
import KeyValueField from "../KeyValueField";
import LinkButton from "../LinkButton";
import { LoadingIndicatorInline } from "../LoadingIndicator";


const s3AccessUrlFromDrsObject: (drs_object: drsObjectModel ) => AccessUrl = (drs_object) => {
    const s3_methods = drs_object.access_methods.filter( 
        (access_method) => access_method.type === "s3"
    );

    if (s3_methods.length !== 1 ) {
        const error_message = (
            `DRS object ${drs_object.id} did contain ${s3_methods.length} access methods of ` +
            "type s3 but exactly 1 was expected."
        );
        alert(error_message);
        throw error_message;
    };

    return s3_methods[0].access_url;
};


const FileAccess = (props: {file: fileModel}) => {

    const [drsObject, setDrsObject] = React.useState<drsObjectModel|null>(null);

    // on mount:
    React.useEffect( () => getOneDrsObject(props.file.id, setDrsObject), [props.file.id]);

    return(
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
            {drsObject === null ? (
                <LinkButton
                    className="w3-right"
                    icon="fas fa-download"
                    disabled={true}
                >
                    <LoadingIndicatorInline size="tiny" />
                </LinkButton>
            ) : (
                <LinkButton
                    className="w3-right"
                    color="green"
                    icon="fas fa-download"
                    href={s3AccessUrlFromDrsObject(drsObject).url}
                    downloadName={drsObject.name}
                >
                    download
                </LinkButton>
            )}
        </div>
    );
};

export default FileAccess;
