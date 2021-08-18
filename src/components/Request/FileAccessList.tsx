// import React from "react";
// import { file } from "../../dataModels/metadata";
// import { getFileListByDsId } from "../../backendCalls/metadata";
// import LoadingIndicator from "../LoadingIndicator";
// import FileAccess from "./FileAccess";

// const FileAccessList = (props: {datasetId: string}) => {
//     const [fileList, setFileList] = React.useState<file[]|null>(null);

//     // on mount:
//     React.useEffect( () => setFileList(getFileListByDsId(props.datasetId)), []);

//     return (
//         <div className="w3-panel">
//             <span className="w3-text-green w3-large">File Access:</span>
//             <p>
//                 Your access request has been approved. Please select files for download below.
//             </p>
//             {fileList == null ? (
//                     <LoadingIndicator
//                         size="large"
//                         message="Simulated loading of file information..."
//                     />
//                 ) : (
//                     <div style={{width: "100%"}}>
//                         {fileList.map( (fileItem) =>
//                             <FileAccess key={fileItem.id} file={fileItem}/>
//                         )}
//                     </div>
//             )}
//         </div>
//     )
// }

// export default FileAccessList;
export {};
