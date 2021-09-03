import logoFull from '../logo_full.png';
import Message from './Message';
import Test from './Test';

const WelcomeModule = () => (
    <div className="w3-panel w3-center">
        <img src={logoFull} alt='' width="350px"/>
        <h1>
            The GHGA Sandbox Data Portal 
        </h1>
        <h4 className="w3-text-green">
            Explore. Extract. Experiment.
        </h4>

        {process.env.REACT_APP_WELCOME_INFO && (
            // the above env var can be used to insert
            // a custom message to the welcome page:
            <div style={{ marginTop: "50px" }}>
                <Message type="info">
                    <h3>Please note:</h3>
                    <p>{process.env.REACT_APP_WELCOME_INFO}</p>
                </Message>
            </div>
        )}
        <Test/>

    </div>
);

export default WelcomeModule;
