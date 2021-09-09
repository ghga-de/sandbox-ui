export interface AccessUrl {
    url: string;
}; 


export interface AccessMethod {
    type: string;
    access_url: AccessUrl,
}; 


export interface drsObjectModel {
    id: string;
    name: string,
    self_uri: number,
    size: number,
    access_methods: AccessMethod[],
}; 
