export interface file {
    id: string;
    name: string;
    size: number;
};

export interface sample {
    id: string;
    condition: string;
    sex: string;
    protocol: string;
    files: file[]
};

export interface study {
    id: string;
    title: string;
};

export interface dataset {
    id: string;
    study: study;
    samples: sample[];
};

export interface datasetOutline {
    id: string;
    studyId: string;
    studyTitle: string;
};
