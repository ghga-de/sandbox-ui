import React, { useState } from 'react';
import logoFull from '../logo_full.png';
import Message from './Message';
import { datasetModel } from '../dataModels/metadata';
import { getAllDatasets } from "../backendCalls/metadata";
import { requestModel } from "../dataModels/requests";
import { getAllRequests } from '../backendCalls/requests';
import { users } from "../data/users";


const DashboardModule = () =>{
    const [dsList, setDsList] = React.useState<datasetModel[]|null>(null);
    React.useEffect( () => getAllDatasets(setDsList), []);
    var num_ds= dsList?.length;

    const [reqList, setReqList] = React.useState<requestModel[]|null>(null);
    React.useEffect( () => getAllRequests(setReqList), []);
    const reqCarryList = (reqList !== null) ? reqList.filter( (req) => req.user_id === "USR:0000001") : [];
    var num_reqs_carry = reqCarryList.length;

    const RequestApprove =  (reqList !== null) ? reqList.filter( (req) => req.status === "approved") : [];
    var num_reqs_approved= RequestApprove.length;
    
    var num_user = users.length;
   
    const [dateState] = useState(new Date());

    var num_Files = 0
    dsList?.forEach(ds => {
      ds.files.forEach(file => {
        num_Files++;
      })
    });
    var num_FileList = num_Files;

    return (

    <div className="w3-panel w3-center">
        <div style= {{width: "auto", height: "600px"}}
        className="dash_panels">
            <br /><br /><br /> <a href="https://ghga.dkfz.de/" target='_blank'> <img src= {logoFull} alt="" width= "200px" height="auto"/></a><br /><br /><br />
            <h3 style={{color: "black", position: "inherit", textAlign: "center"}}>GHGA Sandbox</h3><br /><br /><br />
            <p style={{color: "black", fontSize: "20px",position: "inherit" }}> 
                Explore. <br />Extract.<br />Experiment.<br />Enjoy.
            </p>
        </div>
      <div className="dash_panels">
            <h1 style={{color: "black", fontSize: "20px"}} >
            <span style={{fontSize: "25px"}} >&#129516;</span>
               Total Datasets: 
               <p style= {{ fontSize: "60px", position: "inherit" }}> {num_ds} </p> 

            </h1>
            
      </div>
      
      <div className="dash_panels">
      <h1 style={{color: "black", fontSize: "20px"}} >
        Total Requests by <strong> Carry: </strong>
        <p style= {{ fontSize: "60px", position: "inherit", fontOpticalSizing:"auto" }}> {num_reqs_carry} </p> 
        </h1>
      </div>
      
      <div className="dash_panels">
      <h1 style={{color: "black", fontSize: "20px"}} >
        Total Request Approved:
      <p style= {{ fontSize: "60px", position: "inherit" }}> {num_reqs_approved} </p> 
      </h1>
      </div>

      <div className="dash_panels">
      <h1 style={{color: "black", fontSize: "20px"}} >
        Total Number of User:
        <p style= {{ fontSize: "60px", position: "inherit" }}> {num_user} </p> 
        </h1>
      </div>

      <div className="dash_panels">
      <h1 style={{color: "black", fontSize: "20px"}} >
        Total Number of File:
      <p style= {{ fontSize: "60px", position: "inherit" }}> {num_FileList} </p>
        </h1>
      </div>
      
      <div className="dash_panels">
        <span style={{fontSize: "30px"}} >&#128197;</span>
        <p style={{fontSize: "20px"}}>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            	
        <span style={{fontSize: "30px"}} >&#128337;</span>
        <p style={{fontSize: "20px"}}>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </p>
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
