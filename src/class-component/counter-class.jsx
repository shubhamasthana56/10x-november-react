import React from "react";
export class CounterClass extends React.PureComponent {
    constructor() {
        super()
        console.log("Inside Constructor")
        ///explicit binding
        //this.handleIncrement = this.handleIncrement.bind(this);
        this.incrementNode = null
        this.state = {
            counter: 0,
            value: ""
        }
       
    }
    handleIncrement = ()=> {
        // this.setState({...this.state, counter: this.state.counter+1});
        // this.setState({...this.state, counter: this.state.counter+1});
        this.setState((prev)=> {
            return {...this.state, counter: prev.counter + 1} 
        })
        this.setState((prev)=> {
            return {...this.state, counter: prev.counter + 1} 
        })
    }
    handleDecrement = function() {

    }
    componentDidMount() {
        console.log("Inside Compomponent Did mount")
    }

    componentDidUpdate() {
        console.log( "Inside component did update")
    }

    componentWillUnmount() {
        console.log("Inside component will unmount")
    }
    // shouldComponentUpdate() {

    // }
    render() {
        console.log("Inside render method")
        return (
            <>
            <button onClick={this.handleIncrement} ref={this.incrementNode}>+</button>
            <button onClick={this.handleDecrement}>-</button>
            <div>{this.state.counter}</div>
            <CounterClassChild data={[]} name="Shubham"/>
            </>
        )
    }
}
export class CounterClassChild extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props, "from parent")
        return (
            <>I am a child Component</>
        )
    }
}
//export default CounterClass;