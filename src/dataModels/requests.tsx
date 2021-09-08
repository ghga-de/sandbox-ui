export type requestEventType = (
    "created" |
    "approved" |
    "declined" |
    "withdrawn"
)

export type requestStatusType = (
    "pending" |
    "approved" |
    "closed"
)

export interface requestModel {
    id: string;
    datasetId: string;
    status: requestStatusType;
    requesterId: string;
    purpose: string;
}
