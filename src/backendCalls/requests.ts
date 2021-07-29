import { sleep } from '../utils/funcUtils';
import requests from '../data/requests';
import { request, requestOutline} from '../dataModels/requests'

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


export const getReqMetadata: (reqId: string) => request = (reqId) => {
    // currently, looks up in the hardcoded datasets object;
    // later, will get the info from a backend API
    
    sleep(2);
    for (const req of requests) {
        if (req.id === reqId) {
            return req;
        }
    };

    throw new Error("Request with id " + reqId + " does not exist.");
};


interface newRequestModel {
    datasetId: string;
    purpose: string;
    requesterId: string;
};

export const postNewRequest: (newRequest: newRequestModel) => void = (newRequest) => {
    
    const reqObj: request= {
        id: "GHGAR-" + Math.round(Math.random()*1000000000).toString(),
        datasetId: newRequest.datasetId,
        status: "pending",
        requesterId: newRequest.requesterId,
        purpose: newRequest.purpose,
        history: [
            {
                eventType: "created",
                datetime: new Date()
            }
        ]
    }

    requests.push(reqObj);
}
