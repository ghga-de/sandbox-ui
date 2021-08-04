import { users } from "../../data/users";
import { getCurrentUser, logout } from "../../utils/funcUtils";
import UserItem from "./UserItem";

const Login = () => {
    const currentUser = getCurrentUser();

    return (
        <div className="w3-panel">
            <h1>
                <i className="fas fa-users"/> &nbsp;
                Select the user you would like to be.
            </h1>
            <p>
                Please note this is a fake login for demonstration purposes.
                You can pretend to be a normal user (data requester role)
                or a data steward by selecting one of the users listed below.
            </p>
            <div className="w3-panel w3-bar">
                {users.map( (user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                        hasFocus={currentUser != null && user.id === currentUser.id}
                    />
                ))}
            </div>
            {currentUser && (
                <button 
                    className="w3-button w3-green w3-round-xlarge"
                    style={{marginLeft: "24px"}}
                    onClick={logout}
                >
                    <i className="fas fa-sign-out-alt"/>&nbsp;
                    log out
                </button>
            )}
        </div>
    );
};

export default Login;
