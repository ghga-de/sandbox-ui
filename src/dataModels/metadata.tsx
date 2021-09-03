export interface dataset {
    id: string;
    title: string,
    description: string,
    type: string,
    files: string[],
    has_study: string,
    has_data_access_policy: string,
}; 

export interface file {
    id: string;
    name: string,
    size: number
}; 
