import { users } from "../../data/users";
import { getCurrentUser, logout } from "../../utils/funcUtils";
import UserItem from "./UserItem";
import Button from "../Button";

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
                <Button
                    color="green"
                    icon="fas fa-sign-out-alt"
                    style={{marginLeft: "24px"}}
                    onClick={logout}
                >
                    log out
                </Button>
            )}
        </div>
    );
};

export default Login;
