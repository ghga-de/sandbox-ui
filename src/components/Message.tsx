interface messageProps {
    type: "info" | "warning" | "error" | "hint";
    children: any;
    icon?: string;
};

const messageColors = {
    info: "blue",
    warning: "orange",
    error: "red",
    hint: "yellow"
}

const Message =  (props: messageProps) => (
    <div 
        className={`w3-panel w3-round-xlarge w3-center w3-${messageColors[props.type]}`}
    >
        {props.icon && (
            <div className="w3-panel w3-jumbo">
                <i className={props.icon}/>
            </div>
        )}
        <div className="w3-panel">
            {props.children}
        </div>
    </div>
);

export default Message;
