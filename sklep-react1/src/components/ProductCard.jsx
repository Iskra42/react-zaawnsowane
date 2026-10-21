import { useState } from 'react'

function ProductCard({ nazwa = 'Produkt', cena = 0, staraCena, zdjecie, kategoria = 'Ogólna' }) {
  const [dodano, setDodano] = useState(false)
  const [polubione, setPolubione] = useState(false)
  const [licznik, setLicznik] = useState(0)

  function kliknijSerce() {
    if (polubione) {
      setPolubione(false)
      setLicznik(prev => prev - 1)
    } else {
      setPolubione(true)
      setLicznik(prev => prev + 1)
    }
  }

  const cenaLiczba = Number(cena) || 0
  const staraCenaLiczba = staraCena != null ? Number(staraCena) : null

  const obrazek = zdjecie && zdjecie.trim() !== '' 
    ? zdjecie 
    : 'https://via.assets.so/img.jpg?w=200&h=200&tc=gray&bg=cecece&t=Brak+zdjęcia'

  return (
    <div className="product-card">
      <img src={obrazek} alt={nazwa} />
      <h1>{nazwa}</h1>
      <p>Cena: {cenaLiczba.toFixed(2)} zł</p>
      {staraCenaLiczba !== null && Number.isFinite(staraCenaLiczba) && (
        <p className="stara-cena">Cena sprzed 30 dni: {staraCenaLiczba.toFixed(2)} zł</p>
      )}
  

      <p>Kategoria: {kategoria}</p>

      {!dodano ? (
        <button className="add-btn" onClick={() => setDodano(true)}>
          Dodaj do koszyka
        </button>
      ) : (
        <button className="remove-btn" onClick={() => setDodano(false)}>
          Usuń z koszyka
        </button>
      )}

      <button className="heart-button" onClick={kliknijSerce}>
        {polubione ? '♥' : '♡'} {licznik}
      </button>
    </div>
  )
}

export default ProductCard