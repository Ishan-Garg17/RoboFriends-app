import React from "react";

const SearchBox = ({searchChange})=>{
    return(
            <input className="tc"
            type="search" 
            placeholder="Search Robots"
            onChange = {searchChange} 
            />
    ) 
}

export default SearchBox