import { requestOutline } from "../../dataModels/requests";
import RequestSideBar from './RequestSideBar';
import RequestContent from './RequestContent';
import { getCurrentUser } from "../../utils/funcUtils";

interface requestProps {
    reqList: requestOutline[];
    reqFocus?: string;
};

const Request = (props: requestProps) => {
    const currentUser = getCurrentUser();
    
    // if currentUser is not a data steward,
    // only show the requests of that user:
    const reqList = (currentUser && !currentUser.isDataSteward) ? (
        props.reqList.filter( (req) => req.requesterId === currentUser.id)
    ) : (
        props.reqList
    )

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
                                <RequestContent key={"reqContent-" + props.reqFocus} requestId={props.reqFocus}/>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Request;
