import { useEffect, useState } from "react";
import { SingleSelectOptions } from "./SingleSelectOptions";
import { CheckboxOptions } from "./CheckboxOptions";

/**
 * Dropdown menu - supports a single selected option or multiple selected options 
 * @param {*} props Component props
 * @param {object} props.options Object containing the options to be displayed in menu should be in formar {label, value}
 * @param {bool} props.isSingleSelect Flag to determine if it's a single selection menu
 * @param {string} props.defaultValue String with the default value to be shown in menu before selecting an option
 * @returns 
 */
export function DropdownMenu(props) {
    const { options, isSingleSelect, defaultValue, label } = props;
    const [displayedValues, setDisplayedValues] = useState();
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
        if(values.length === 0){
            setDisplayedValues(defaultValue);
        } else {
            const labels = values.map(value => value.label);
            setDisplayedValues(labels.join(", "));
        }
    }, [values])


    return (
        <div className="container">
            <div className="label-container">
                <label className="label-text">{label}</label>
            </div>
            <div tabIndex={0} className="menu-container" >
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
        </div>
    )
}





