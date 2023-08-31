import React from 'react';
import {
  StyledSearchBar,
  StyledForm,
  StyledBtn,
  StyledInput,
} from './SearchBar.styled';
export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = React.useState('');
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert('Please enter a search query');
      return;
    }
    onSubmit(query);
  };
  return (
    <StyledSearchBar>
      <StyledForm onSubmit={handleSubmit}>
        <StyledBtn type="submit" name="query">
          <span class="button-label">Search</span>
        </StyledBtn>

        <StyledInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </StyledForm>
    </StyledSearchBar>
  );
};
