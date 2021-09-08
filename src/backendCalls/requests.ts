import { requestModel } from '../dataModels/requests'

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
    console.log(JSON.stringify(updateRequest))

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
    dataset_id: string;
    purpose: string;
    requesterId: string;
};

export const postNewRequest: (newRequest: newRequestModel) => string = (newRequest) => {
    
    const reqObj: requestModel = {
        id: "GHGAR-" + Math.round(Math.random()*1000000000).toString(),
        dataset_id: newRequest.dataset_id,
        status: "pending",
        user_id: newRequest.requesterId,
        purpose: newRequest.purpose
    }

    // requests.push(reqObj);

    return reqObj.id
}
