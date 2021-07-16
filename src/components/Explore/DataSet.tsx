import '../components.css';
import React from 'react';
import { datasetOutline } from '../../utils/datasets';
import DataSetHeader from './DataSetHeader';
import DataSetMetadata from './DataSetMetadata';

interface dataSetProps {
    dataset: datasetOutline;
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
                    <DataSetMetadata dsId={props.dataset.id} />
                    <button 
                        className="w3-button w3-right w3-round-xlarge w3-green"
                        style={{margin: "16px"}}
                    >
                        <i className="fas fa-key"/>&nbsp;Request Access
                    </button>
                </div>
            )}
        </div>
    )
};

export default DataSet;
