// import { sampleModel } from '../../dataModels/metadata';
// import { bytesToGB } from '../../utils/funcUtils';
// import KeyValueField from '../KeyValueField';

// const Sample = (props: {sampleModel: sample}) => (
//     <div key={props.sample.id} className="w3-panel">
//         <div className="w3-bar">
//             <div className="w3-bar-item">
//                 <KeyValueField 
//                     key_="Sample ID"
//                     value={props.sample.id}
//                 />
//                 <KeyValueField 
//                     key_="Condition"
//                     value={props.sample.condition}
//                 />
//                 <KeyValueField 
//                     key_="Sex"
//                     value={props.sample.sex}
//                 />
//                 <KeyValueField 
//                     key_="Protocol"
//                     value={props.sample.protocol}
//                 />
//             </div>
//             <div className="w3-bar-item">
//                 <div className="w3-bar">
//                     <div className="w3-bar-item w3-text-green">Files:</div>
//                     <div className="w3-bar-item">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th style={{padding: "8px"}}>ID</th>
//                                     <th style={{padding: "8px"}}>Name</th>
//                                     <th style={{padding: "8px"}}>Size [GB]</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {props.sample.files.map( (file) =>(
//                                     <tr key={file.id}>
//                                         <td style={{padding: "8px"}}>{file.id}</td>
//                                         <td style={{padding: "8px"}}>{file.name}</td>
//                                         <td style={{padding: "8px"}}>{bytesToGB(file.size)}</td>
//                                     </tr>
//                                 ))}    
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>   
//     </div>
// );

// export default Sample;

export {};
