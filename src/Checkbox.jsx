/**
 * @param {*} props 
 * @param {*} props.id ID to identify checkbox
 * @param {bool} props.isChecked Flag to determine if a checkbox is checked
 * @param {event} props.handleClick Event to handle data from child component to parent component
 */
export function Checkbox(props) {
    const { id, isChecked, handleClick } = props;
    return (
        <input id={id} type="checkbox" checked={isChecked} onChange={handleClick} />
    )
}