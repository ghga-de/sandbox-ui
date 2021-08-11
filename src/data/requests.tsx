// This module contains hardcoded metadata on requests
// Later this will be served by the backend

import { request } from "../dataModels/requests";

const requests: request[] = [
    {
        id: "GHGAR-122832234",
        requesterId: "GHGAU-812092343",
        datasetId: "GHGAD-2300234",
        status: "pending",
        purpose: (
            "I am working on MSC-derived cancers and would benefit for training" + 
            " a classifier to distinguish different cell lineages of origin."
        ),
        history: [
            {
                eventType: "created",
                datetime: new Date(2021, 7, 26, 14, 24)
            }
        ]
    },
    
    {
        id: "GHGAR-213499234",
        requesterId: "GHGAU-812092343",
        datasetId: "GHGAD-4349923",
        status: "approved",
        purpose: (
            "I am working on ALL mouse models and would like to validate some findings" + 
            " from the animal models using patient data."
        ),
        history: [
            {
                eventType: "created",
                datetime: new Date(2021, 7, 20, 13, 23)
            },
            {
                eventType: "approved",
                datetime: new Date(2021, 7, 30, 15, 25)
            }
        ]
    }
];


export default requests;
