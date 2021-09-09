import { datasetModel, datasetEmbeddedModel } from '../dataModels/metadata';

type getAllDatasetsType = (
    callbackFunc: (datasets: datasetModel[]) => void
) => void;

export const getAllDatasets: getAllDatasetsType = (callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_METADATA_URL}/datasets`, 
        {
            method: 'get'
        }
    )
    .then( response => response.json())
    .then(
        (data) => {
            callbackFunc(data);
        },
        (error) => {
            alert("An error occured while fetching the data.");
        }
    );
};


type getOneDatasetsType = (
    datasetId: string,
    callbackFunc: (dataset: datasetEmbeddedModel) => void
) => void;

export const getOneDatasets: getOneDatasetsType = (datasetId, callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_METADATA_URL}/datasets/${datasetId}?embedded=true`, 
        {
            method: 'get'
        }
    )
    .then( response => response.json())
    .then(
        (data) => {
            callbackFunc(data);
        },
        (error) => {
            alert("An error occured while fetching the data.");
        }
    );
};
