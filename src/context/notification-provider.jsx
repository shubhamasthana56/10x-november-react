import { useState } from "react";
import { NotificationContext } from "./context"

const NotificationProvider = ({children})=> {
    const [count, setCount] = useState(0);
    const handleCounter = (type)=> {
        switch(type) {
            case "Increment":
                setCount((prev)=> {
                    return prev + 1
                });
                break;
            case "Decrement":
                setCount((prev)=> {
                    return prev - 1
                });
                break;
        }
    }
    const data = `Some Notification is triggered`;
    return (
        <NotificationContext.Provider value={{notification: data, count, handleCounter}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;