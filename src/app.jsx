import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./404/404-notfound";
import Registration from "./authentication/signup";
import {CounterClass} from "./class-component/counter-class";
import Content from "./content/content";
import LoadingExample from "./loading-example/loading";
import Login from "./authentication/sign-in";
import Order from "./order/order";
import ProtectedRoutes from "./Protected-routes/protected-routes";
import CounterReducer from "./Reducer/counter-with-reducer";
import FormExample from "./ref/form-example";
import RefExample from "./ref/ref-example";
import SlowComponent from "./slow-component/slow-component";
import ToDo from "./todo-assignment/todo";
import ReduxCounter from "./redux-counter/redux-counter";
const App = ()=> {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<NotFound/>}/>
                    <Route path="/" element={<Content/>}/>
                    <Route path="/counter-new" element={<CounterReducer/>}/>
                    <Route path="/todo" element={<ToDo/>}/>
                    <Route path="/ref" element={<RefExample/>}/>
                    <Route path="/form" element={<FormExample/>}/>
                    <Route path="/slow" element={<SlowComponent/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/loading" element={<LoadingExample/>}/>
                    <Route path="/class" element={<CounterClass/>}/>
                    <Route path="/signup" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/redux-counter" element={<ReduxCounter/>}/>
                    <Route element={<ProtectedRoutes/>}>
                        <Route path="/orders" element={<Order/>}/>
                        <Route path="/accounts" element={<div>Account Component !</div>}/>
                    </Route>
                   
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App;