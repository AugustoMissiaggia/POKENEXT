// components/SearchBar.js
import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Chama a função de busca a cada mudança no campo de texto
  };

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Buscar Pokémon por nome ou ID"
          className={styles.input}
        />
      </div>
    </div>
  );
};

export default SearchBar;
