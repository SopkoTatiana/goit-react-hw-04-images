import { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleInput = ({ target: { value } }) => {
    setValue(value);
  };
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(value.trim());
    setValue('');
  };

  return (
    <header className={css.Header}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <AiOutlineSearch className={css.SearchFormButtonIcon} />
        </button>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          value={value}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
