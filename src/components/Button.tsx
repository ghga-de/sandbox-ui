interface buttonProps {
    icon: string; 
    children: any;
    color?: "green" | "red" | "black";
    style?: object;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
};

const Button = (props: buttonProps) => {

    const color = props.disabled ? "grey" : (props.color ? props.color : "black");
    const style = props.style ? props.style : {};

    return (
        <button 
            className={
                `w3-bar-item w3-button w3-round-xlarge w3-${color}` +
                (props.className ? ` ${props.className}` : "")
            }
            style={style}
            onClick={props.onClick}
            disabled={props.disabled ? true : false }
        >
            <i className={props.icon} /> &nbsp;
            {props.children}
        </button>
    );
};

export default Button;
