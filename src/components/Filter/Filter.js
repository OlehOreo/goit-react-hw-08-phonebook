import { useDispatch, useSelector } from 'react-redux';
import { Search } from './Filter.styled';
import { getSearchResults, onSearchContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getSearchResults);

  const searchContact = evt => {
    dispatch(onSearchContact(evt.target.value));
  };
  return (
    <>
      <Search
        type="text"
        value={filter}
        onChange={searchContact}
        placeholder="Search contact"
      />
    </>
  );
};
