import React from 'react';
import LoadingIndicator from '../LoadingIndicator';
import { requestOutline } from "../../utils/requests";
import { getRequestList } from '../../backendCalls/metadata';
import RequestSideBar from './RequestSideBar';
import NotImplementedYet from '../NotImplementedYet';

const Request = () => {
    // list of all requests, null if not loaded yet:
    const [reqList, setReqList] = React.useState<requestOutline[]|null>(null);

    // id of request that has focus, null if no focus set:
    const [reqFocus, setReqFocus] = React.useState<string|null>(null);

    // on mount:
    React.useEffect( () => setReqList(getRequestList()), []);

    return (
        <div>
            {reqList == null ? (
                    <LoadingIndicator 
                        size="large"
                        message="Simulated loading of a list of all requests..."
                    />
                ) : (
                    
                    reqList.length === 0 ? (
                        <div className="w3-panel">
                            <h3>It's empty here.</h3>
                            Please explore our datasets
                            ("Explore" in the top bar) and
                            create your first request.
                        </div>
                    ) : (
                        <div>
                            <RequestSideBar 
                                reqList={reqList} 
                                reqFocus={reqFocus}
                            />
                            <div className="w3-panel w3-cell">
                                {reqFocus == null ? (
                                        <div className="w3-panel">
                                            <h3>Nothing selected.</h3>
                                            Please select a request from the left.
                                        </div>
                                    ) : (
                                        <NotImplementedYet />
                                )}
                            </div>
                        </div>
                    )
            )}
        </div>
    );
};

export default Request;
