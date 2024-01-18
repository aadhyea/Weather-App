import React from 'react';
import 'D:/Weather app/weather/src/index.css';
import '../App.css'

export default function search({query,setQuery,search}){
    return(
    
        <div className="search-bar">
            <input type="text" 
                 className='search' 
                 placeholder='Search...'
                 onChange={e => setQuery(e.target.value)}
                 value={query}
                 onKeyDown={search}>
            </input>
        </div>
    
    );
}