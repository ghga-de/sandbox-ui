export type requestStatusType = (
    "pending" |
    "approved" |
    "rejected"
)

export interface requestInitModel {
    dataset_id: string;
    user_id: string;
    purpose: string;
}

export interface requestModel extends requestInitModel{
    id: string;
    status: requestStatusType;
}
