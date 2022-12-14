import { forwardRef } from "react";
const FormElement = (props, ref)=> {
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(ref);
    }
    return (
        <>
                <form ref={ref}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email"/>
                <label htmlFor="password">password:</label>
                <input type="password" id="password"/>
                <button type="onSubmit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}
export default forwardRef(FormElement)