import React from "react";

const SearchBox = ({searchChange})=>{
    return(
            <input className="pa3 tc ba b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots"
            onChange = {searchChange} 
            />
    ) 
}

export default SearchBox