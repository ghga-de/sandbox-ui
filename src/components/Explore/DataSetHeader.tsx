import { dataset } from '../../dataModels/metadata';
import '../components.css';

const DataSetHeader = (props: {dataset: dataset}) => (
    <div 
        className="w3-bar w3-round-xlarge w3-hover-light-grey interactive-item-header"
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
                    <td>{props.dataset.has_study}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td className="w3-text-green">
                        Title:
                    </td>
                    <td>{props.dataset.title}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item">
            <table><tbody>
                <tr>
                    <td className="w3-text-green">
                        Description:
                    </td>
                    <td>{props.dataset.description}</td>
                </tr>
            </tbody></table>
        </div>
        <div className="w3-bar-item w3-right">
            <i className="fas fa-chevron-down" />
        </div>
    </div>

);

export default DataSetHeader;
