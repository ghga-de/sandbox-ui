import KeyValueField from "./KeyValueField";
import { keyValueFieldProps } from "./KeyValueField";

const Badge = (props: keyValueFieldProps) => (
    <div 
        className="w3-badge w3-round-xxlarge w3-black"
        style={{margin: "8px", padding: "2px 8px" }}
    >
        <KeyValueField 
            key_={props.key_}
            value={props.value}
        />
    </div>
);

export default Badge;
