import React, { Component } from 'react'
import {Typography} from 'antd';
const { Text } = Typography;

export default class CountUp extends Component{
    constructor(props) {
        super();
        this.state = {
            min:"",
            sec:""
        }
    }
    
    tick() {
        let now = new Date()
        let upd = Date.parse(this.props.updatedAt)
        // Count minutes and second passed
        let min = (now - upd) / 60000
        this.setState({ min: parseInt(min) })
        let sec = ((now - upd) - this.state.min * 60000) / 1000
        this.setState({ sec: parseInt(sec) })
    }
    // updates this DOM every second
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
    }
    // Remove the timer and let the interval start again
    componentWillUnmount(){
        clearInterval(this.timerID); 
    }
    render() {
        return(
            <div>
                <Text strong={true}>{this.state.min + " mins " + this.state.sec + " secs "}</Text>
            </div>
        )
    }
}


