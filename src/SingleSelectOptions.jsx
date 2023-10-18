/**
 * A list of options where only a single option can be selected
 * @param {*} props Component props
 * @param {object} props.options Object containing options to be displayed
 * @param {object} props.values Object containing selected values
 * @param {event} props.handleClick Event to handle data from child component to parent component
 * @param {bool} props.isOpen Flag to determine if menu is open
 */
export function SingleSelectOptions(props) {
    const { options, values, handleClick, isOpen } = props;

    function isSelected(option) {
        return values.includes(option);
    }

    function handleClickOnOption(option) {
        handleClick({ option: option, open: !isOpen })
    }

    return (
        <>
            {
                options.map(option => (
                    <li key={option.value} className={`${"options-item"} ${isSelected(option) ? "selected" : ""}`}
                        onClick={e => handleClickOnOption(option)}
                    >
                        {option.label}
                    </li>
                ))
            }
        </>
    );
}