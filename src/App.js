import React from "react";
import CardList from "./CardList";
import { robots } from './robots';
import SearchBox from './SearchBox'
import ScrollBar from "./ScrollBar";

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
            <ScrollBar>
                <CardList robots={filteredRobots}/>
            </ScrollBar>
            </div>
          </React.Fragment>
        )
    }
} 

export default App