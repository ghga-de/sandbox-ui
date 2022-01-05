import { requestModel } from "../../dataModels/requests";
import RequestSideBar from './RequestSideBar';
import RequestContent from './RequestContent';
import { getCurrentUser } from "../../utils/funcUtils";

interface requestProps {
    reqList: requestModel[];
    reqFocus?: string;
};

const Request = (props: requestProps) => {
    const currentUser = getCurrentUser();
    
    // if currentUser is not a data steward,
    // only show the requests of that user:
    const reqList = (currentUser && !currentUser.isDataSteward) ? (
        props.reqList.filter( (req) => req.user_id === currentUser.id)
    ) : (
        props.reqList
    )
    
    // find request that is focussed:
    const focussedRequest = reqList.filter( req => req.id === props.reqFocus )[0]
    if (props.reqFocus != null && focussedRequest === undefined) {
        focusRequestNotFound();
            
    }
    
    return (
        <div>
            {reqList.length === 0 ? (
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
                        reqFocus={props.reqFocus}
                    />
                    <div className="w3-panel w3-cell">
                        {props.reqFocus == null ? (
                                <div className="w3-panel">
                                    <h3>Nothing selected.</h3>
                                    Please select a request from the left.
                                </div>
                            ) : (
                                <RequestContent
                                    request={focussedRequest}
                                />
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    function focusRequestNotFound() {
        var requestNotFound= `Request with id "${props.reqFocus}" was not found.`;
        throw requestNotFound;
    }
};

export default Request;
