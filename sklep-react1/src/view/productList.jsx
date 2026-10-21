import React from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductList({ produkty = [] }) {
  if (!produkty || produkty.length === 0) {
    return <p>Brak produktów w tej kategorii.</p>
  }

  return (
    <div className="products-grid">
      {produkty.map(produkt => (
        <ProductCard 
          key={produkt.id} 
          {...produkt}
        />
      ))}
    </div>
  )
}