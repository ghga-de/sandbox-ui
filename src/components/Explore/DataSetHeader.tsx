import { datasetOutline } from '../../utils/datasets';
import '../components.css';

const DataSetHeader = (props: {dataset: datasetOutline}) => (
    <div 
        className="w3-bar w3-round-xlarge w3-hover-grey interactive-item-header"
    >   
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td className="w3-text-green">
                        ID:
                    </td>
                    <td>{props.dataset.id}</td>
                </tr>
                <tr>
                    <td className="w3-text-green">
                        Study ID:
                    </td>
                    <td>{props.dataset.studyId}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td className="w3-text-green">
                        Title:
                    </td>
                    <td>{props.dataset.studyTitle}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item w3-right">
            <i className="fas fa-chevron-down" />
        </div>
    </div>

);

export default DataSetHeader;