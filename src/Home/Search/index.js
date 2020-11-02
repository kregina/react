import { useState } from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Label, PrimaryButton, SearchContainer, Sort } from './styles';

const iconSort = <FontAwesomeIcon icon={faSort} />;

const Search = (props) => (
    <SearchContainer>
      <Input onChange={(e) => props.onSearch(e.target.value)} autoFocus type="text" placeholder="Search by description" />
      <Sort>
        <Label>Sort By:</Label>
        <PrimaryButton className={`${props.sortByDate ? 'active' : ''}`} onClick={props.onSortByDate}>Date {iconSort}</PrimaryButton>
      </Sort>
    </SearchContainer>
  );

export default Search;
