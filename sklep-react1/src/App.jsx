import { useState } from 'react'
import './App.css'
import ProductList from './view/productList'
import { filtrujProdukty, sortujProdukty, szukajProduktow, wyczyscFiltry } from './controller/productController'

function App() {
  const [sortowanie, setSortowanie] = useState('domyślne');
  const [szukaj, setSzukaj] = useState('');
  const [wybranaKategoria, setWybranaKategoria] = useState('wszystkie');

  const przefiltrowaneProdukty = filtrujProdukty(wybranaKategoria);
  const znalezioneProdukty = szukajProduktow(przefiltrowaneProdukty, szukaj);
  const produktyDoWyswietlenia = sortujProdukty(znalezioneProdukty, sortowanie);

  return (
    <div className="app-container">
      <h1>Sklep konkurencyjny</h1>
      <input type="text" placeholder="Szukaj produktu..." value={szukaj} onChange={(e) => setSzukaj(e.target.value)} />
      <div>
        <label htmlFor="filtr">Wybierz kategorię:</label>
        <p>Liczba znalezionych produktów: {produktyDoWyswietlenia.length}</p>
       <select id="filtr" value={wybranaKategoria} onChange={(e) => setWybranaKategoria(e.target.value)}>
         <option value="wszystkie">Wszytkie</option>
          <option value="eco">Eco</option>
          <option value="elektronika">Elektronika</option>
          <option value="pojazdy">Pojazdy</option>
          <option value="dom">Dom</option>
          <option value="sport">Sport</option>
       </select>
      </div>
       
      
      <label htmlFor="sortowanie">Sortuj według:</label>
      <select id="sortowanie" value={sortowanie} onChange={(e) => setSortowanie(e.target.value)}>
        <option value="domyślne">Domyślne</option>
        <option value="rosnaco">Rosnąco</option>
        <option value="malejaco">Malejąco</option>
        <option value="nazwa-asc">Nazwa: A – Z</option>
        <option value="nazwa-desc">Nazwa: Z – A</option>
      </select>
       <button onClick={() => wyczyscFiltry(setSzukaj, setWybranaKategoria, setSortowanie)}>Wyczyść filtry</button>
      

      <ProductList 
        produkty={produktyDoWyswietlenia} 
      />
    </div>
  )
}

export default App