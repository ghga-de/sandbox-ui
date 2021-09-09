import React from "react";
import { datasetEmbeddedModel } from "../../dataModels/metadata";
import { getOneDataset } from "../../backendCalls/metadata";
import LoadingIndicator from "../LoadingIndicator";
import FileAccess from "./FileAccess";

const FileAccessList = (props: {datasetId: string}) => {
    const [dataset, setDataset] = React.useState<datasetEmbeddedModel|null>(null);

    // on mount:
    React.useEffect( () => getOneDataset(props.datasetId, setDataset), []);

    return (
        <div className="w3-panel">
            <span className="w3-text-green w3-large">File Access:</span>
            <p>
                Your access request has been approved. Please select files for download below.
            </p>
            {dataset === null ? (
                    <LoadingIndicator
                        size="large"
                        message="Simulated loading of file information..."
                    />
                ) : (
                    dataset.files.length === 0 ? (
                        <p>
                            This dataset has no files.
                        </p>
                    ) : (
                        <div style={{width: "100%"}}>
                            {dataset.files.map( (file) =>
                                <FileAccess key={file.id} file={file}/>
                            )}
                        </div>
                    )
            )}
        </div>
    )
}

export default FileAccessList;
export {};
