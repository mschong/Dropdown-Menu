import { DropdownMenu, Option } from "./Dropdown";

function App() {
  return (
    <DropdownMenu labelText="Label">
      <Option selected value="Click to see options" text="Click to see options" disabled/>
      <Option value="one" text="One"/>
      <Option value="two" text="Two"/>
    </DropdownMenu>
  )
}

export default App;
