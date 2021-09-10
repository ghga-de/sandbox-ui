import React from 'react';
import { datasetEmbeddedModel } from "../../dataModels/metadata";
import { getOneDataset } from "../../backendCalls/metadata";
import KeyValueField from '../KeyValueField';
import LoadingIndicator from '../LoadingIndicator';
import FileTable from './FileTable';


const DataSetDetails = (props: {datasetId: string}) => {
    const [dataset, setDataset] = React.useState<datasetEmbeddedModel|null>(null);

    // on mount:
    React.useEffect( () => getOneDataset(props.datasetId, setDataset), []);

    return dataset === null ? (
        <LoadingIndicator
            size="large"
            message="Loading dataset details. Please wait ..."
        />
    ) : (
        <div style={{ padding: "0px 32px"}}>
    	    <div className="w3-container">
                <h3>Associated Study:</h3>
                <KeyValueField key_="ID" value={dataset.has_study.id}/>
                <KeyValueField key_="Title" value={dataset.has_study.title}/>
                <div>
                    <span className="w3-text-green" style={{ padding: "8px"}}>
                        Abstract:
                    </span>
                    <div className="w3-container">
                        {dataset.has_study.abstract}
                    </div>
                </div>
            </div>
            <hr/>
            <div className="w3-container">
                <h3>Files:</h3>
                <FileTable files={dataset.files} />
            </div>
            <hr/>
        </div>
    );

};

export default DataSetDetails;
