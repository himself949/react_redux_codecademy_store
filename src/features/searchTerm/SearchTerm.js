import React from 'react';
import { clearSearchTerm, setSerachTerm } from './searchTermSlice';

const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

const SearchTerm = ({ searchTerm, dispatch }) => {

    const onSearchTermChangeHandler = (e) => {
        const userInput = e.target.value
        dispatch(setSerachTerm(userInput))
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm())
    }

    return (
        <div id="search-container">
            <img id="search-icon" alt="" src={searchIconUrl} />
            <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder="Search products"
            />
            {searchTerm.length > 0 && (
                <button
                    onClick={onClearSearchTermHandler}
                    type="button"
                    id="search-clear-button"
                >
                    <img src={clearIconUrl} alt="" />
                </button>
            )}
        </div>
    );
};

export default SearchTerm;