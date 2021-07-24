interface KeyValueFieldProps {
    key_: string;
    value: string;
};

const KeyValueField = (props: KeyValueFieldProps) => (
    <div style={{whiteSpace: "nowrap"}}>
        <span className="w3-text-green" style={{ padding: "8px"}}>{props.key_}:</span>
        {props.value}
    </div>
);

export default KeyValueField;
