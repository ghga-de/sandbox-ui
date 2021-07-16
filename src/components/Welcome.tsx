import logoFull from '../logo_full.png'

const WelcomeModule = () => (
    <div className="w3-center">
        <img src={logoFull} alt='' width="350px"/>
        <h1>
            The GHGA Sandbox Data Portal 
        </h1>
        <h4 className="w3-text-green">
            Explore. Extract. Experiment.
        </h4>   
    </div>
);

export default WelcomeModule