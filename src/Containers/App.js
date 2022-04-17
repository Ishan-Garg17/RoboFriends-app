import React from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox'
import ScrollBar from "../Components/ScrollBar";
import './App.css'
import {Component} from "react"
class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=> response.json()).then(users=> this.setState({robots: users}))
    }
    onSearchChange = (event)=>{
        this.setState({ searchField: event.target.value})
    }
    render(){
        
        let filteredRobots  = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })

        return(
            <div className="tc">
            <h1>RoboFriends App</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <ScrollBar>
                <CardList robots={filteredRobots}/>
            </ScrollBar>
            </div>
        )
    }
}

export default App