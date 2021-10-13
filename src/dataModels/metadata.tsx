export interface datasetModel {
    id: string;
    title: string,
    description: string,
    type: string,
    files: string[],
    has_study: string,
    creation_date: string,
}; 


export interface fileModel {
    id: string;
    name: string,
    size: number,
    format: string,
    category: string,
    checksum: string,
    creation_date: string,
}; 


export interface studyModel {
    id: string;
    title: string,
    abstract: string,
}; 


export interface datasetEmbeddedModel {
    id: string;
    title: string,
    description: string,
    type: string,
    files: fileModel[],
    has_study: studyModel,
    creation_date: string,
}
