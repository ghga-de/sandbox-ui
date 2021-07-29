const RequireAuth =  () => (
    <div className="w3-panel w3-bar w3-round-xlarge w3-orange">
        <div className="w3-bar-item" style={{ fontSize:"50px" }}>
            <i className="fas fa-wrench"/>
        </div>
        <div className="w3-bar-item w3-panel">
            The page you requested requires authentication.
            Please log in first.
        </div>
    </div>
);

export default RequireAuth;
