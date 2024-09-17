import { UseCallBackDemo, UseStateDemo,UsePropsDemo } from "./reactHooks";
import Enum from "./typescript/enum"
function App() {


    return (
        <>
            <UseCallBackDemo />
            {/* <UseContextDemo /> */}
            <Enum/>
            <UseStateDemo/>
            <UsePropsDemo/>
        </>
    )
}

export default App;
