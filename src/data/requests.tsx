// This module contains hardcoded metadata on requests
// Later this will be served by the backend

import { request } from "../utils/requests";

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
    }
];


export default requests;
