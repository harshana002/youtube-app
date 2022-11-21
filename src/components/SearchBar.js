import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);

        //TODO : Make sure we call callback from parent component
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="feild">
                    <label>Search For A Video</label>
                    <input type="text" value={term} onChange={onInputChange} />
                </div>
            </form>
        </div>
    );
} 

export default SearchBar;