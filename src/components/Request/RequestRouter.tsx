import React from "react";
import { Route} from "react-router-dom";
import { requestOutline } from "../../dataModels/requests";
import LoadingIndicator from "../LoadingIndicator";
import { getRequestList } from '../../backendCalls/requests';

import Request from "./Request";

const RequestRouter = () => {
    
    const [reqList, setReqList] = React.useState<requestOutline[]|null>(null);

    // on mount:
    React.useEffect( () => setReqList(getRequestList()), []);

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
