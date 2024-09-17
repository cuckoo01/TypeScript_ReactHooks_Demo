
import { UseCallBackDemo, UseContextDemo, UseMemo } from "./reactHooks";
import UseReducerDemo from "./reactHooks/useReducer/DemoLayout";



function App() {

    return (

        <>
            <UseCallBackDemo />
            <UseContextDemo/>
            <UseMemo/>
            <UseReducerDemo/>
            {/* <UseContextDemo /> */}
            <Enum/>
            <UseStateDemo/>
            <UsePropsDemo/>

        </>
    )
}

export default App;
