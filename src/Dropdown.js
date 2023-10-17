import { useState } from "react";

export function DropdownMenu(props) {
    const { options, labelText, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);

    function setOption(option) {
        onChange(option)
    }
    return (
        <div tabIndex={0} onClick={() => setIsOpen(!isOpen)} className="container">
            <span className="value">{labelText.label}</span>
            {isOpen ? (
                <div><i class="arrow up"></i></div>
            ) : (
                <div><i class="arrow down"></i></div>
            )}
            <ul className={`${"options"} ${isOpen ? "open" : ""}`}>
                {options.map(option => (
                    <li key={option.value} className="options-item"
                        onClick={e => {
                            setOption(option)
                        }}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}