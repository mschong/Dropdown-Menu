import { Checkbox } from "./Checkbox";

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
                        name={option.label}
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