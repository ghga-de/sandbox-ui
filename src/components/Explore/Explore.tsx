import React from 'react';
import { datasets } from '../../data/datasets';
import LoadingIndicator from '../LoadingIndicator';
import { sleep } from '../../utils/funcUtils';
import { datasetOutline } from '../../utils/datasets';
import DataSetList from './DatasetList';

const getAllDatasets: () => datasetOutline[] = () => {
    // currently, looks up in the hardcoded datasets object;
    // later, will get the info from a backend API
    sleep(2)
    return datasets.map( (ds) => (
            {    
                id: ds.id,
                studyId: ds.study.id,
                studyTitle: ds.study.title
            }
        )
    );
}

const Explore = () => {
    // list of all datasets, null if not loaded yet
    const [dsList, setDsList] = React.useState<datasetOutline[]|null>(null);

    // on mount:
    React.useEffect( () => setDsList(getAllDatasets()), [])

    return (
        <div>
            <div className="w3-panel w3-center">
                <h1>
                    <i className="fas fa-search"/> &nbsp;
                    Explore Our Catalog of Datasets
                </h1>
            </div>
            {dsList == null ? (
                    <LoadingIndicator 
                        size="large"
                        message="Simulated loading of a list of all datasets..."
                    />
                ) : (
                    dsList.length === 0 ? (
                        <span>No datasets found.</span>
                    ) : (
                        <DataSetList datasets={dsList} />
                    )
            )}
        </div>
    );
}

export default Explore;