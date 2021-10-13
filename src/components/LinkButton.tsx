interface buttonProps {
    icon: string; 
    children: any;
    color?: "green" | "red" | "black";
    href?: string;
    style?: object;
    className?: string;
    disabled?: boolean;
    downloadName?: string;
};

const LinkButton = (props: buttonProps) => {

    const color = props.disabled ? "grey" : (props.color ? props.color : "black");
    const userDefinedStyle = props.style ? props.style : {};
    const style = props.disabled ? (
        { ...{ pointerEvents: "none" }, ...userDefinedStyle}
    ) : ( userDefinedStyle );
    const href = props.href ? (props.disabled ? "#" : props.href) : "#";
    const downloadName = props.downloadName ? props.downloadName : undefined;

    return (
        <a 
            className={
                `w3-bar-item w3-button w3-round-xlarge w3-${color}` +
                (props.className ? ` ${props.className}` : "")
            }
            style={style}
            href={href}
            download={downloadName}
        >
            <i className={props.icon} /> &nbsp;
            {props.children}
        </a>
    );
};

export default LinkButton;
