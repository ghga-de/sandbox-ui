import logoFull from '../logo_full.png'

const WelcomeModule = () => (
    <div className="w3-center">
        <p>
            Welcome to
        </p>
        <img src={logoFull} alt='' height="350px" width="350px"/>
        <p>
            The GHGA Sandbox Data Portal 
        </p>    
    </div>
);

export default WelcomeModule