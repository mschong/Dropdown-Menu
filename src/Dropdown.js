export function DropdownMenu(props){
    const {labelText, isSingleSelect} = props;
    return(
        <div className="wrapper">
            <label htmlFor="selectList">{labelText}</label>
            <select className="select-menu" name="selectList" id="selectList">
                {props.children}
            </select>
        </div>
    );
}

export function Option(props) {
    const {selected, value, text, disabled} = props;
    return (
        <option selected={selected} value={value} disabled={disabled}>{text}</option>
    )
}