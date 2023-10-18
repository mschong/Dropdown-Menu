import { useState } from "react";

export function DropdownMenu(props) {
    const { options, isSingleSelect, defaultValue } = props;
    const [displayedValues, setDisplayedValues] = useState(defaultValue);
    const [values, setValues] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    function setValue(value) {
        if (isSingleSelect) {
            setDisplayedValues(value.label);
        } else {
            const newValues = values.slice();
            if(newValues.includes(value)){
                newValues.splice(newValues.indexOf(value), 1);
            } else {
                newValues.push(value);
            }
            setValues(newValues);
            const labels = newValues.map(value => value.label);
            setDisplayedValues(labels.join(", "));
        }
    }

    return (
        <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} className="container">
            <span className="value">{displayedValues}</span>
            {isOpen ? (
                <div className="arrow-container"><i className="arrow up"></i></div>
            ) : (
                <div className="arrow-container"><i className="arrow down"></i></div>
            )}
            {isSingleSelect ? (
                <ul className={`${"options"} ${isOpen ? "open" : ""}`}>
                    {options.map(option => (
                        <li key={option.value} className="options-item"
                            onClick={e => {
                                setValue(option)
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            ) : (
                <ul className={`${"options"} ${isOpen ? "open" : ""}`}>
                    {options.map(option => (
                        <li key={option.value} className="options-item">
                            <input
                                type="checkbox"
                                value={option.value}
                                onChange={e => { setValue(option) }}
                            />
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}