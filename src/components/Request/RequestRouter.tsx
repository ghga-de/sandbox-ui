import React from "react";
import { Route} from "react-router-dom";
import { requestModel } from "../../dataModels/requests";
import LoadingIndicator from "../LoadingIndicator";
import { getAllRequests } from '../../backendCalls/requests';

import Request from "./Request";

const RequestRouter = () => {
    const [reqList, setReqList] = React.useState<requestModel[]|null>(null);

    // on mount:
    React.useEffect( () => getAllRequests(setReqList), []);

    return reqList == null ? (
        <LoadingIndicator 
            size="large"
            message="Simulated loading of a list of all requests..."
        />
    ) : (
        <Route path="/request/:requestId?" render={({ match }) => (
            <Request 
                reqList={reqList} 
                reqFocus={match.params.requestId}
            />
        )}/>
    );
};

export default RequestRouter;
