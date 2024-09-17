import { UseCallBackDemo, UseContextDemo, UseMemo, UseRef, UseImperativeHandle } from "./reactHooks";

function App() {
    return (
        <>
            <UseCallBackDemo />
            <UseContextDemo/>
            <UseMemo/>
            <UseRef/>
            <UseImperativeHandle/>
            {/* <UseContextDemo /> */}
        </>
    );
}

export default App;
