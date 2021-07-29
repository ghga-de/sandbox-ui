const RequireAuth =  () => (
    <div className="w3-panel w3-round-xlarge w3-orange w3-center">
        <div className="w3-panel w3-jumbo">
            <i className="fas fa-lock"/>
        </div>
        <div className="w3-panel">
            The page you requested requires authentication.
            Please log in first.
        </div>
    </div>
);

export default RequireAuth;
