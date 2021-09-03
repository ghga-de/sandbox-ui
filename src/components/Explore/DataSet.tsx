import '../components.css';
import React from 'react';
import { dataset } from '../../dataModels/metadata';
import DataSetHeader from './DataSetHeader';
// import DataSetMetadata from './DataSetMetadata';
import RequestAccess from './RequestAccess';

interface dataSetProps {
    dataset: dataset;
    hasFocus: boolean;
};

const DataSet = (props: dataSetProps) => {

    // whether dataset has focus or not:
    const [hasFocus, setHasFocus] = React.useState<boolean>(false);

    return (
        <div 
            className="w3-panel w3-round-xlarge interactive-item"
        >
            <div onClick={() => setHasFocus(!hasFocus)}>
                <DataSetHeader dataset={props.dataset}/>
            </div>
            {hasFocus && (
                <div>
                    {/* <DataSetMetadata dataset={props.dataset} /> */}
                    <RequestAccess datasetId={props.dataset.id} />
                </div>
            )}
        </div>
    )
};

export default DataSet;
