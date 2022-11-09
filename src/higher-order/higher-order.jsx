const HigherOrder = (Component)=> {
    return (props)=> {
        return (
            <>
                <header>Header</header>
                <aside>SiderBar</aside>
                <footer>Footer</footer>
                <Component {...props}/>
            </>
        )
    }
    
}
export default HigherOrder;