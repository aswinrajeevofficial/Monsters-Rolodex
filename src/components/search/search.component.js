import React from 'react';
import "../search/search.styles.css";

export const Search = ( {placeHolder, handleChange} ) => (
    <input 
    type = 'search'
    className = 'search'
    placeholder = {placeHolder}
    onChange = {handleChange}/>
)