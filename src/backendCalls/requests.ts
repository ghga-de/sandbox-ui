import { requestInitModel, requestModel } from '../dataModels/requests'

export type setRequestCallbackType = (request: requestModel[]) => void


export const getAllRequests = (callbackFunc : setRequestCallbackType) => {
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


type updateRequestStatusInterface = (
    requestId: string,
    newStatus: string,
) => void;

export const updateRequestStatus: updateRequestStatusInterface = (requestId, newStatus) => {


    const updateRequest = {
        "status": newStatus
    }

    fetch(
        `${process.env.REACT_APP_SVC_REQUEST_URL}/requests/${requestId}`, 
        {
            method: 'PATCH',
            body: JSON.stringify(updateRequest),
            headers: new Headers({'Content-Type': 'application/json'})
        }
    )
    .then( response => response.json())
    .then(
        (data) => {
            window.location.reload();
        },
        (error) => {
            alert("An error occured while fetching the data.");
        }
    );
};


interface newRequestModel {
    datasetId: string;
    purpose: string;
    userId: string;
};

type postNewRequestType = (
    newRequest: newRequestModel,
    callbackFunc: (requestId: string) => void    
) => void

export const postNewRequest: postNewRequestType = (newRequest, callbackFunc) => {
    
    const requestObj: requestInitModel = {
        dataset_id: newRequest.datasetId,
        user_id: newRequest.userId,
        purpose: newRequest.purpose
    }

    fetch(
        `${process.env.REACT_APP_SVC_REQUEST_URL}/requests`, 
        {
            method: 'POST',
            body: JSON.stringify(requestObj),
            headers: new Headers({'Content-Type': 'application/json'})
        }
    )
    .then( response => response.json())
    .then(
        (data) => {
            callbackFunc(data.id)
        },
        (error) => {
            alert("An error occured while fetching the data.");
        }
    );
}
