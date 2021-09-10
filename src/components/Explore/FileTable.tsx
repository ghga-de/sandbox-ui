import { fileModel } from "../../dataModels/metadata";
import { bytesToGB } from '../../utils/funcUtils';


const TH = (props: {children: any}) => (
    <th
        className="w3-text-green" 
        style={{padding: "8px"}}
    >
        {props.children}
    </th>
);


const TD = (props: {children: any}) => (
    <td
        style={{padding: "8px"}}
    >
        {props.children}
    </td>
);


const FileTable = (props: {files: fileModel[]}) => (
    <table className="w3-table">
        <thead>
            <tr>
                <TH>ID</TH>
                <TH>Name</TH>
                <TH>Format</TH>
                <TH>Category</TH>
                <TH>Size [GB]</TH>
            </tr>
        </thead>
        <tbody>
            {props.files.map( (file) =>(
                <tr key={file.id}>
                    <TD>{file.id}</TD>
                    <TD>{file.name}</TD>
                    <TD>{file.format}</TD>
                    <TD>{file.category}</TD>
                    <TD>{bytesToGB(file.size)}</TD>
                </tr>
            ))}    
        </tbody>
    </table>
);

export default FileTable;
