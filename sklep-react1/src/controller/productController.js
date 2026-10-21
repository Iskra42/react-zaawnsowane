import { produkty } from '../model/productModel'

export function pobierzProdukty () {
  return produkty
}

export const pobierzKategorie = () => {
  const kategorieSet = new Set(produkty.map(p => p.kategoria))
  return ['wszystkie', ...kategorieSet]
}

export function znajdzProdukt  (id) {
  return produkty.find(produkt => produkt.id === id)
}

export function filtrujProdukty(kategoria) {
  if ( kategoria === 'wszystkie') {
    return produkty;
  }
  return produkty.filter(produkt => produkt.kategoria === kategoria);
}

export function szukajProduktow(lista, fraza) {
  return lista.filter(produkt => produkt.nazwa.toLowerCase().includes(fraza.toLowerCase()));
}

export function sortujProdukty(lista, sposob) {
 const kopia = [...lista];

 if (sposob === 'rosnaco') {
   return kopia.sort((a, b) => a.cena - b.cena);
 }

 if (sposob === 'malejaco') {
   return kopia.sort((a, b) => b.cena - a.cena);
 }

 if (sposob === 'nazwa-asc') {   
    return kopia.sort((a, b) => a.nazwa.localeCompare(b.nazwa, 'pl', { sensitivity: 'base' }));
 }

 if (sposob === 'nazwa-desc') {
    return kopia.sort((a, b) => b.nazwa.localeCompare(a.nazwa, 'pl', { sensitivity: 'base' }));
 }
 return kopia;

}

export function wyczyscFiltry(setSzukaj, setWybranaKategoria, setSortowanie) {
  setSzukaj('');
  setWybranaKategoria('wszystkie');
  setSortowanie('domyślne');
}