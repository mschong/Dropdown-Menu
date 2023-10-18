import { useState } from "react";

export function DropdownMenu(props) {
    const { options, isSingleSelect, defaultValue } = props;
    const [displayedValues, setDisplayedValues] = useState(defaultValue);
    const [values, setValues] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [checkBox, setCheckBox] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    function setValue(value) {
        if (isSingleSelect) {
            setDisplayedValues(value.label);
        } else {
            const newValues = values.slice();
            if (newValues.includes(value)) {
                newValues.splice(newValues.indexOf(value), 1);
            } else {
                newValues.push(value);
            }
            setValues(newValues);
            const labels = newValues.map(value => value.label);
            setDisplayedValues(labels.join(", "));
        }
    }

    function handleSelectAll() {
        setIsCheckAll(!isCheckAll);
        if(isCheckAll) {
            setCheckBox([])
            setDisplayedValues("");
        } else {
            setCheckBox(options.map(option => option.value));
            const allOptions = options.map(option => option.label);
            setValues(options);
            setDisplayedValues(allOptions.join(", "));
        }
    }

   function handleCheck(e){
        const { id, checked } = e.target;
        if(checked){
            setCheckBox([...checkBox, id]);
        } else {
            setCheckBox(checkBox.filter(item => item !== id))
        }
    }

    return (
        <div tabIndex={0} className="container">
            <span className="value" onClick={() => setIsOpen(!isOpen)}>{displayedValues}</span>
            <div className="arrow-container" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <i className="arrow up"></i>
                ) : (
                    <i className="arrow down"></i>
                )}
            </div>
            <ul className={`${"options"} ${isOpen ? "open" : ""}`}>
                {isSingleSelect ? (
                    <></>
                ) : (
                    <li key="selectAll" className="options-item">
                        <Checkbox id="selectAll" name="selectAll" isChecked={isCheckAll} handleClick={handleSelectAll} />
                        <label>Select All</label>
                    </li>
                )}
                {options.map(option => (
                    isSingleSelect ? (
                        <li key={option.value} className="options-item"
                            onClick={e => {
                                setValue(option)
                                setIsOpen(!isOpen)
                            }}
                        >
                            {option.label}
                        </li>
                    ) : (
                        <li key={option.value} className="options-item">
                            <Checkbox
                                id={option.value}
                                name={option.label}
                                value={option.value}
                                isChecked={checkBox.includes(option.value)}
                                handleClick={e => {
                                    setValue(option)
                                    handleCheck(e)
                                }}
                            />
                            {option.label}
                        </li>
                    )
                ))}
            </ul>
        </div>
    )
}

function Checkbox(props) {
    const { id, name, isChecked, handleClick } = props;
    return (
        <input id={id} type="checkbox" name={name} checked={isChecked} onChange={handleClick} />
    )
}