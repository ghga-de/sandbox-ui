import { requestModel } from '../dataModels/requests'

type getAllRequestsType = (
    callbackFunc: (request: requestModel[]) => void
) => void;

export const getAllRequests: getAllRequestsType = (callbackFunc) => {
    fetch(
        `${process.env.REACT_APP_SVC_REQUEST_URL}/requests`, 
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



interface newRequestModel {
    datasetId: string;
    purpose: string;
    requesterId: string;
};

export const postNewRequest: (newRequest: newRequestModel) => string = (newRequest) => {
    
    const reqObj: requestModel = {
        id: "GHGAR-" + Math.round(Math.random()*1000000000).toString(),
        datasetId: newRequest.datasetId,
        status: "pending",
        requesterId: newRequest.requesterId,
        purpose: newRequest.purpose
    }

    // requests.push(reqObj);

    return reqObj.id
}
