// pages/index.js
import { useState } from 'react';
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredPokemons = searchQuery
    ? pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery) || 
        pokemon.id.toString().includes(searchQuery)
      )
    : pokemons;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image 
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
