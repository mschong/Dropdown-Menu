import { useEffect, useState } from "react";

export function DropdownMenu(props) {
    const { options, isSingleSelect, defaultValue } = props;
    const [displayedValues, setDisplayedValues] = useState(defaultValue);
    const [values, setValues] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [checkBox, setCheckBox] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    function setValue(value) {
        if (isSingleSelect) {
            setValues(values => [value])
            setDisplayedValues(value.label);
        } else {
            const newValues = values.slice();
            if (newValues.includes(value)) {
                newValues.splice(newValues.indexOf(value), 1);
            } else {
                newValues.push(value);
            }
            setValues(newValues);
        }
    }

    function handleSelectAll() {
        setIsCheckAll(!isCheckAll);
        if (isCheckAll) {
            setCheckBox([])
            setValues([]);
        } else {
            setCheckBox(options.map(option => option.value));
            setValues(options);
        }
    }

    function handleCheck(option) {
        console.log("clicked")
        console.log(checkBox);
        const checked = checkBox.includes(option.value);
        if (checked) {
            setCheckBox(checkBox.filter(item => item !== option.value))
        } else {
            setCheckBox([...checkBox, option.value]);
        }
    }

    function isSelected(option) {
        return values.includes(option);
    }

    useEffect(() => {
        const labels = values.map(value => value.label);
        setDisplayedValues(labels.join(", "));
    }, [values])


    return (
        <div tabIndex={0} className="container" >
            <span className="value" onClick={() => setIsOpen(!isOpen)} >{displayedValues}</span>
            <div className="arrow-container" onClick={() => setIsOpen(!isOpen)} >
                <i className={`arrow ${isOpen ? "up" : "down"}`}></i>
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
                        <li key={option.value} className={`${"options-item"} ${isSelected(option) ? "selected" : ""}`}
                            onClick={e => {
                                setValue(option)
                                setIsOpen(!isOpen)
                            }}
                        >
                            {option.label}
                        </li>
                    ) : (
                        <li
                            key={option.value}
                            className={`${"options-item"} ${isSelected(option) ? "selected" : ""}`}
                            onClick={e => {
                                setValue(option)
                                handleCheck(option)
                            }}>
                            <Checkbox
                                id={option.value}
                                name={option.label}
                                value={option.value}
                                isChecked={checkBox.includes(option.value)}
                                handleClick={e => {
                                    setValue(option)
                                    handleCheck(option)
                                }}
                            />
                            {option.label}
                        </li>
                    )
                ))}
            </ul>
        </div >
    )
}

function Checkbox(props) {
    const { id, name, isChecked, handleClick } = props;
    return (
        <input id={id} type="checkbox" name={name} checked={isChecked} onChange={handleClick} />
    )
}