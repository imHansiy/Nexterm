import "./styles.sass";
import Icon from "@mdi/react";

export const IconInput = ({ type, id, name, required, icon, placeholder,
                              autoComplete, value, setValue }) => {
    return (
        <div className="input-container">
            <Icon path={icon} className="input-icon" />
            <input type={type} id={id} name={name} required={required} className="input"
                     placeholder={placeholder} autoComplete={autoComplete}
                        value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
    );
};