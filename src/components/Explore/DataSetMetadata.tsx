import React from 'react';
import { datasets } from '../../data/datasets';
import { dataset } from '../../utils/datasets';
import { sleep } from '../../utils/funcUtils';
import LoadingIndicator from '../LoadingIndicator';
import Sample from './Sample';

const getDsMetadata: (dsId: string) => dataset = (dsId) => {
    // currently, looks up in the hardcoded datasets object;
    // later, will get the info from a backend API
    
    sleep(2);
    let metadata: dataset;
    for (const ds of datasets) {
        if (ds.id === dsId) {
            metadata = ds;
        }
    };

    // @ts-ignore
    return metadata;
};


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