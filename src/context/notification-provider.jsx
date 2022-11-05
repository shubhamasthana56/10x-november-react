import { NotificationContext } from "./notification-context"

const NotificationProvider = ({children})=> {
    const data = "Some Notification is triggered";
    return (
        <NotificationContext.Provider value={{notification: data}}>
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationProvider;