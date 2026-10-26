function Cart({ koszyk, usunZKoszyka , zmienIlosc }) {
  const suma = koszyk.reduce(
    (wynik, produkt) =>
      wynik + produkt.cena * produkt.ilosc,
    0
  );

  return (
    <div className="cart">
      <h2>Twój koszyk</h2>

      {koszyk.length === 0 ? (
        <p>Koszyk jest pusty.</p>
      ) : (
        koszyk.map(produkt => (
          <div key={produkt.id} className="cart-item">
            <span>
              {produkt.nazwa}
            </span>
            <div className="cart-controls">
              <button onClick={() => zmienIlosc(produkt.id, -1)}>-</button>
              <span>{produkt.ilosc} szt.</span>
              <button onClick={() => zmienIlosc(produkt.id, 1)}>+</button>
            </div>
            <span>
              {(produkt.cena * produkt.ilosc).toFixed(2)} zł
            </span>

            <button
              onClick={() => usunZKoszyka(produkt.id)}
            >
              Usuń
            </button>
          </div>
        ))
      )}

      <h3>Razem: {suma.toFixed(2)} zł</h3>
    </div>
  );
}

export default Cart;