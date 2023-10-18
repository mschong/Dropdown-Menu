import { useEffect, useState } from "react";
import { SingleSelectOptions } from "./SingleSelectOptions";
import { CheckboxOptions } from "./CheckboxOptions";

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
        const checked = checkBox.includes(option.value);
        if (checked) {
            setCheckBox(checkBox.filter(item => item !== option.value))
        } else {
            setCheckBox([...checkBox, option.value]);
        }
    }

    function handleSingleSelectData(data) {
        setValue(data.option);
        setIsOpen(data.open);
    }

    function handleCheckboxData(data) {
        setValue(data.option)
        handleCheck(data.option)
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
                {isSingleSelect ?
                    <SingleSelectOptions options={options} values={values} isOpen={isOpen} handleClick={handleSingleSelectData} />
                    :
                    <CheckboxOptions options={options} values={values} checkBox={checkBox} isCheckAll={isCheckAll} handleClick={handleCheckboxData} handleSelectAll={handleSelectAll} />
                }
            </ul>
        </div>
    )
}





