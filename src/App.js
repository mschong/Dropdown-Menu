import { DropdownMenu } from "./Dropdown";

const options = [
  { label: "One", value: "1" },
  { label: "Two", value: "2" },
  { label: "Three", value: "3" },
  { label: "Four", value: "4" },
  { label: "Five", value: "5" },
  { label: "Six", value: "6" }
]
function App() {

  return (
    <div style={{ display: 'flex'}}>
      <DropdownMenu options={options} label="Multiple Selection Menu"/>
      <DropdownMenu options={options} isSingleSelect defaultValue={"Choose an option..."}  label="Single Selection Menu"/>
    </div>
  )
}

export default App;
