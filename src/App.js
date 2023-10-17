import { useState } from "react";
import { DropdownMenu } from "./Dropdown";

const options = [
  {label: "One", value: "one"},
  {label: "Two", value: "two"},
  {label: "Three", value: "3"},
  {label: "Four", value: "4"},
  {label: "Five", value: "5"},
  {label: "Six", value: "6"},
]
function App() {
  const [displayedValue, setDisplayedValue] = useState("");
  const setValue = (value) => {
    setDisplayedValue(value);
  }
  return (
    <DropdownMenu labelText={displayedValue} options={options} onChange={setValue} >
    </DropdownMenu>
  )
}

export default App;
