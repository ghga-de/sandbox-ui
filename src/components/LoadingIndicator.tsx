import './components.css';

interface loadingIndicatorProps {
    size: "tiny" | "small" | "large";
    message?: string;
};

export const LoadingIndicatorInline = (props: loadingIndicatorProps) => (
    <div 
        style={ {display: "inline-block" } }
        className={`${props.size}-loader`}
    >
    </div>
)

const LoadingIndicator = (props: loadingIndicatorProps) => (
    <div className="w3-container w3-center">
            <div className={`${props.size}-loader`}></div>
            {props.message ? (
                <div className="w3-center-align w3-panel">{props.message}</div>
                ):( null )
            }
    </div>
)

export default LoadingIndicator;
