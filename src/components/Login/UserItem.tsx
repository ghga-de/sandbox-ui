import { user } from '../../dataModels/users';
import { loginUser } from '../../utils/funcUtils';
import KeyValueField from '../KeyValueField';

interface userItemProps {
    user: user;
    hasFocus: boolean;
}

const UserItem = (props: userItemProps) => (
    <button
        className={
            "w3-bar-item w3-button w3-round-xlarge w3-black" +
            (props.hasFocus ? " w3-light-grey": "")
        }
        style={{ margin: "8px", height: "200px"}}
        onClick={() => loginUser(props.user.id)}
    >
        <div className="w3-jumbo">
            <i className={props.user.icon}/>
        </div>
        <KeyValueField key_= "ID" value={props.user.id} />
        <KeyValueField 
            key_= "Name" 
            value={`${props.user.firstName} ${props.user.lastName}`} 
        />
        {props.user.isDataSteward && (
            <div
                className="w3-badge w3-round-xxlarge w3-yellow"
                style={{margin: "8px", padding: "2px 8px" }}
            >
                <i className="fas fa-crown" />&nbsp;
                data steward
            </div>
        )}
    </button>
);

export default UserItem;
