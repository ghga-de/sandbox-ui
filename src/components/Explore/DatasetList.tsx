import { datasetModel } from '../../dataModels/metadata';
import DataSet from './DataSet';

interface dataSetListProps {
    datasets: datasetModel[];
};

const DataSetList = (props: dataSetListProps) => (
    <div style={ {overflow:"auto"} }>
            {
                props.datasets.map( (ds) => (
                            <DataSet 
                                key={ds.id} 
                                dataset={ds}
                                hasFocus={false}
                            />
                    )
                )
            }
    </div>
);


export default DataSetList;
