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
}

export interface request extends requestOutline{
    requesterId: string;
    purpose: string;
    history: requestEvent[];
}
