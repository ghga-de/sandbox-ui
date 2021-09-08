export type requestStatusType = (
    "pending" |
    "approved" |
    "rejected"
)

export interface requestModel {
    id: string;
    dataset_id: string;
    status: requestStatusType;
    user_id: string;
    purpose: string;
}
