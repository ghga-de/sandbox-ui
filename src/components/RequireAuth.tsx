import Message from "./Message";

const RequireAuth =  () => (
    <Message
        type="warning"
        icon="fas fa-lock"
    >
        The page you requested requires authentication.
        Please log in first.
    </Message>
);

export default RequireAuth;
