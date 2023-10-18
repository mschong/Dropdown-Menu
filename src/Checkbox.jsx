export function Checkbox(props) {
    const { id, name, isChecked, handleClick } = props;
    return (
        <input id={id} type="checkbox" name={name} checked={isChecked} onChange={handleClick} />
    )
}