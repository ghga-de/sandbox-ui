import logoFull from '../logo_full.png';
import Message from './Message';
import { datasetModel } from '../dataModels/metadata';
import DataSetList from './Explore/DatasetList';
import { getAllDatasets } from "../backendCalls/metadata";
import React from 'react';


const DashboardModule = () =>{
    const [dsList, setDsList] = React.useState<datasetModel[]|null>(null);
    React.useEffect( () => getAllDatasets(setDsList), []);
    var num_ds= dsList?.length;
    
    return (

    <div className="w3-panel w3-center">
        <div  className="dash_panels">
            <img src= {logoFull} alt="" width= "200px" height="auto"/>
            <h2 style={{color: "black"}}>GHGA Sandbox</h2>

            <p style={{color: "black", fontSize: "10px"}}>
                Explore. Exract. Experiment. Enjoy.
            </p>
        </div>
      <div className="dash_panels">
            <h1 style={{color: "black"}} >
            &#129516;
               Total Datasets {num_ds}

            </h1>
            
      </div>
      <div className="dash_panels">
     
      </div>
      <div className="dash_panels">
      
      </div>
      <div className="dash_panels">
      
      </div>
      <div className="dash_panels">
      
      </div>
      <div className="dash_panels">
      
      </div>
      <div className="dash_panels">
      
      </div>
      {process.env.REACT_APP_WELCOME_INFO && (
            <div style={{ marginTop: "50px", clear: "both" }}>
                <Message type="info">
                    <h3>Please note test:</h3>
                    <p>{process.env.REACT_APP_WELCOME_INFO}</p>
                </Message>
            </div>
        )}

    </div>
);
      };
export default DashboardModule;
