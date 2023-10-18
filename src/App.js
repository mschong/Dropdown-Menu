import { DropdownMenu } from "./Dropdown";

const options = [
  {label: "One", value: "one"},
  {label: "Two", value: "two"},
  {label: "Three", value: "3"},
  {label: "Four", value: "4"},
  {label: "Five", value: "5"},
  {label: "Six", value: "6"}
]
function App() {

  return (
    <DropdownMenu options={options} isSingleSelect={false} defaultValue={"Hello"} />
  )
}

export default App;
