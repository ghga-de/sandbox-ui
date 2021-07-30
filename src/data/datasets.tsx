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
                        id: "GHGAD-9823854",
                        name: "GHGAS_5822342_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAD-9923854",
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
                        id: "GHGAD-92445852",
                        name: "GHGAS_5823352_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAD-9233854",
                        name: "GHGAS_5823352_R2.fastq",
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
                        id: "GHGAD-0098234",
                        name: "GHGAS_7823478_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAD-8239404",
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
                        id: "GHGAD-2398232",
                        name: "GHGAS_23453478_R1.fastq",
                        size: 15633234325
                    },
                    {
                        id: "GHGAD-4425112",
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
                        id: "GHGAD-78788923",
                        name: "GHGAS_50089223_R1.fastq",
                        size: 133353234325
                    },
                    {
                        id: "GHGAD-1298432",
                        name: "GHGAS_50089223_R2.fastq",
                        size: 143353244325
                    }
                ]
            }
        ]
    }

];


export default datasets;
