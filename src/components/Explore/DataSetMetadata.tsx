import React from 'react';
import { dataset } from '../../utils/datasets';
import LoadingIndicator from '../LoadingIndicator';
import Sample from './Sample';
import { getDsMetadata } from "../../backendCalls/metadata";


const DataSetMetadata = (props: {dsId: string}) => {
    // captures which (or whether) a database is focused:
    const [metadata, setMetadata] = React.useState<dataset|null>(null);

    // on mount:
    React.useEffect( () => setMetadata(getDsMetadata(props.dsId)), []);

    return metadata == null ? (
        <div className="w3-panel">
            <LoadingIndicator 
                size="large"
                message="Simulated loading of dataset metadata..."
            />
        </div>
    ) : (
        <div className="w3-panel">
            <span className="w3-text-green w3-center"><b>Samples:</b></span>
            {metadata.samples.map( (samp) => (
                <div key={samp.id}>
                    <Sample sample={samp}/>
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default DataSetMetadata;
