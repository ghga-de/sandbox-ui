import { sleep } from '../utils/funcUtils';
import { dataset } from '../dataModels/metadata';

type getAllDatasetsType = (
    callbackFunc: (dataset: dataset[]) => void
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
