import { datasetModel } from '../dataModels/metadata';

type getAllDatasetsType = (
    callbackFunc: (dataset: datasetModel[]) => void
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
