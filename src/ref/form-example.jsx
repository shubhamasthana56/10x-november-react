import { useRef } from "react";
import FormElement from "./form-elements";

const FormExample = ()=> {
    const formRef = useRef(null);
    // const emailRef = useRef(null);
    // const passwordRef = useRef(null);
    
    return (
        <>
            <FormElement ref={formRef}/>
        </>
    )
}
export default FormExample;