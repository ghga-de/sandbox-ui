import { drsObjectModel } from '../dataModels/storage';

type getOneDrsObjectType = (
    drsId: string,
    callbackFunc: (drsObject: drsObjectModel) => void
) => void;

export const getOneDrsObject: getOneDrsObjectType = (drsId, callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_STORAGE_URL}/ga4gh/drs/v1/objects/${drsId}`, 
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
