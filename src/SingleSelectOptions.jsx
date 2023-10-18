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