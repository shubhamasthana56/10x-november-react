import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./content/content";
import CounterReducer from "./Reducer/counter-with-reducer";
import FormExample from "./ref/form-example";
import RefExample from "./ref/ref-example";
import SlowComponent from "./slow-component/slow-component";
import ToDo from "./todo-assignment/todo";
const App = ()=> {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Content/>}/>
                    <Route path="/counter-new" element={<CounterReducer/>}/>
                    <Route path="/todo" element={<ToDo/>}/>
                    <Route path="/ref" element={<RefExample/>}/>
                    <Route path="/form" element={<FormExample/>}/>
                    <Route path="/slow" element={<SlowComponent/>}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;