import { Checkbox } from "./Checkbox";

/**
 * A list of checkbox items where multiple options can be selected
 * @param {*} props Component props
 * @param {object} props.options Object containing options to be displayed
 * @param {object} props.values Object containing selected values
 * @param {object} props.checkBox Object containing checked boxes values
 * @param {event} props.handleClick Event to handle data from child component to parent component
 * @param {bool} props.isCheckAll Flag to determine if Select All is checked
 * @param {event} props.handleSelectAll Event to handle when Select All option is selected
 */
export function CheckboxOptions(props) {
    const { options, values, checkBox, handleClick, isCheckAll, handleSelectAll } = props;

    function isSelected(option) {
        return values.includes(option);
    }

    function handleClickOnOption(option) {
        handleClick({ option: option })
    }

    function handleSelectAllClick() {
        handleSelectAll();
    }

    return (
        <>
            <li key="selectAll" className="options-item" onClick={handleSelectAllClick}>
                <Checkbox id="selectAll" name="selectAll" isChecked={isCheckAll} handleClick={handleSelectAllClick} />
                <label>Select All</label>
            </li>
            {options.map(option => (
                <li
                    key={option.value}
                    className={`${"options-item"} ${isSelected(option) ? "selected" : ""}`}
                    onClick={e => {
                        handleClickOnOption(option)
                    }}>
                    <Checkbox
                        id={option.value}
                        value={option.value}
                        isChecked={checkBox.includes(option.value)}
                        handleClick={e => {
                            handleClickOnOption(option)
                        }}
                    />
                    {option.label}
                </li>
            ))
            }
        </>
    );
}