import { sleep } from '../utils/funcUtils';
import datasets from '../data/datasets';
import requests from '../data/requests';
import { dataset, datasetOutline } from '../utils/datasets';
import { request, requestOutline } from '../utils/requests'

export const getDsMetadata: (dsId: string) => dataset = (dsId) => {
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


export const getAllDatasets: () => datasetOutline[] = () => {
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
};


export const getRequestList: () => requestOutline[] = () => {
    // currently, looks up in the hardcoded requests object;
    // later, will get the info from a backend API
    sleep(2)
    return requests.map( (req) => (
            {    
                id: req.id,
                datasetId: req.datasetId,
                status: req.status
            }
        )
    );
}
