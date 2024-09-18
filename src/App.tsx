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
            <UseContextDemo/>
            <UseMemo/>
            {/* <UseContextDemo /> */}
            <Enum/>
            <UseStateDemo/>
            <UsePropsDemo/>

        </>
    );

}

export default App;
