import {
  CombinedEffects,
  Counter,
  UseCallBackDemo,
  UseContextDemo,
  UseMemo,
} from "./reactHooks";

function App() {
  return (
    <>
      <UseCallBackDemo />
      <UseContextDemo />
      <UseMemo />
      <Counter />
      <CombinedEffects />
      {/* <UseContextDemo /> */}
    </>
  );
}

export default App;
