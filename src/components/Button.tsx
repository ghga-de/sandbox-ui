interface buttonProps {
    color: "green" | "red" | "black";
    icon: string; 
    children: any;
    style?: object;
    className?: string;
    onClick?: () => void;
};

const Button = (props: buttonProps) => (
    <button 
        className={
            `w3-bar-item w3-button w3-round-xlarge w3-${props.color}` +
            (props.className ? ` ${props.className}` : "")
        }
        style={props.style ? props.style : {}}
        onClick={props.onClick}
    >
        <i className={props.icon} /> &nbsp;
        {props.children}
    </button>
);

export default Button;
