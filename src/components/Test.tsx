import React from "react";

const get_datasets = (setDsIds: (ids: string[]) => void) => {
    fetch(
        `${process.env.REACT_APP_SVC_METADATA_URL}/datasets`, {
        method: 'get'
    })
    .then( response => response.json())
    .then(
        (data) =>{
        console.log(data);
    });
}

const Test = () => {
    const [dsIds, setDsIds] = React.useState<string[]>([]);

    return (
        <div>
            <button
                onClick={() => get_datasets(setDsIds)}
            >
                Load Datasets
            </button>
            {dsIds && dsIds.map( (id) => <p>{id}</p>)}
        </div>
    )
}

export default Test;
