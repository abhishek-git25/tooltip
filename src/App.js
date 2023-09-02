import Tooltip from "./Component/tooltip/tooltip";

function App() {
  return (
    <div>
    {/* passing props in the tooltip Component */}
      <Tooltip position="bottom" text="Hover this tooltip" />
    </div>
  );
}

export default App;
