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

export interface requestEvent {
    eventType: requestEventType;
    datetime: Date;
}

export interface requestOutline {
    id: string;
    datasetId: string;
    status: requestStatusType;
    requesterId: string;
}

export interface request extends requestOutline{
    purpose: string;
    history: requestEvent[];
}
