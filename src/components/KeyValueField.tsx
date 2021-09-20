export interface keyValueFieldProps {
    key_: string;
    value: string;
};

const KeyValueField = (props: keyValueFieldProps) => (
    <div style={{whiteSpace: "nowrap"}}>
        <span className="w3-text-green" style={{ padding: "8px"}}>{props.key_}:</span>
        {props.value}
    </div>
);

export default KeyValueField;
