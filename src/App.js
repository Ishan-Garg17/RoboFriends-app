import React from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }
    onSearchChange= (event)=>{
        this.setState({ searchField: `${event.target.value}` })
    }
    render(){
        let filteredRobots  = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })
        return(
          <React.Fragment>
            <div className="tc">
            <h1>RoboFriends App</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
          </React.Fragment>
        )
    }
} 

export default App