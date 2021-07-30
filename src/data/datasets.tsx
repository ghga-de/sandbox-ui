// This module contains hardcoded metadata on datasets
// Later this will be served by the backend

import { dataset } from "../dataModels/datasets";

const datasets: dataset[] = [
    {
        id: "GHGAD-2300234",
        study: {
            id: "GHGAS-2334558",
            title: "Single-Cell Transcriptomics of GCTB Patients"
        },
        samples: [
            {
                id: "GHGAS-5822342",
                condition: "GCTB",
                sex: "female",
                protocol: "10x",
                files: [
                    {
                        id: "GHGAF-9823854",
                        name: "GHGAS_5822342_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-9923854",
                        name: "GHGAS_5822342_R2.fastq",
                        size: 143353244325
                    }
                ]
            },
            {
                id: "GHGAS-5823352",
                condition: "GCTB",
                sex: "male",
                protocol: "10x",
                files: [
                    {
                        id: "GHGAF-92445852",
                        name: "GHGAS_5823352_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-9233854",
                        name: "GHGAS_5823352_R2.fastq",
                        size: 143353244325
                    }
                ]
            }
        ]
    },

    
    {
        id: "GHGAD-4349923",
        study: {
            id: "GHGAS-92323443",
            title: "Single-Cell Transcriptomics of ALL Patients"
        },
        samples: [
            {
                id: "GHGAS-24534342",
                condition: "ALL",
                sex: "female",
                protocol: "10x",
                files: [
                    {
                        id: "GHGAF-922333854",
                        name: "GHGAS_24534342_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-992323854",
                        name: "GHGAS_24534342_R2.fastq",
                        size: 143353244325
                    }
                ]
            },
            {
                id: "GHGAS-58244352",
                condition: "ALL",
                sex: "male",
                protocol: "10x",
                files: [
                    {
                        id: "GHGAF-9232445852",
                        name: "GHGAS_58244352_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-9233854",
                        name: "GHGAS_58244352_R2.fastq",
                        size: 143353244325
                    }
                ]
            }
        ]
    },

    
    {
        id: "GHGAD-256032",
        study: {
            id: "GHGAS-222560",
            title: "ATACseq of AML Patients"
        },
        samples: [
            {
                id: "GHGAS-7823478",
                condition: "AML",
                sex: "female",
                protocol: "ATAC",
                files: [
                    {
                        id: "GHGAF-0098234",
                        name: "GHGAS_7823478_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-8239404",
                        name: "GHGAS_7823478_R2.fastq",
                        size: 143353244325
                    }
                ]
            },
            {
                id: "GHGAS-23453478",
                condition: "AML",
                sex: "female",
                protocol: "ATAC",
                files: [
                    {
                        id: "GHGAF-2398232",
                        name: "GHGAS_23453478_R1.fastq",
                        size: 15633234325
                    },
                    {
                        id: "GHGAF-4425112",
                        name: "GHGAS_23453478_R2.fastq",
                        size: 163353244324
                    }
                ]
            },
            {
                id: "GHGAS-50089223",
                condition: "AML",
                sex: "male",
                protocol: "ATAC",
                files: [
                    {
                        id: "GHGAF-78788923",
                        name: "GHGAS_50089223_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAF-1298432",
                        name: "GHGAS_50089223_R2.fastq",
                        size: 143353244325
                    }
                ]
            }
        ]
    }

];


export default datasets;
