import { useState } from "react";
import { products } from "./data.js";
import Header from "./components/Header.jsx";
import FilterBar from "./components/FilterBar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import CartPanel from "./components/CartPanel.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ທັງໝົດ");

  function addToCart(product, qty = 1) {
    const existing = cart.find((i) => i.id === product.id);
    if (existing) {
      setCart(
        cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      );
    } else {
      setCart([...cart, { ...product, qty: qty }]);
    }
  }

  function increase(id) {
      setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));
    }

    function decrease(id) {
      setCart(
        cart.map((i) => (i.id === id ? { ...i, qty: i.qty - 1 } : i)).filter((i) => i.qty > 0)
      );
    }

function removeFromCart(item) {
    setCart(cart.filter((i) => i.id !== item.id));
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  const filteredProducts = selectedCategory === "ທັງໝົດ"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="wrap">
      <Header shopName="ຮ້ານ Lao Handmade" itemCount={itemCount} />
      <div className="layout">
        <div>
          <FilterBar 
            selected={selectedCategory} 
            onSelect={setSelectedCategory} 
          />
          <ProductGrid products={filteredProducts} onAdd={addToCart} />
        </div>
        <CartPanel
          cart={cart}
          total={total}
          onIncrease={increase}
          onDecrease={decrease}
          onRemove={removeFromCart}
        />
      </div>
    </div>
  );
}

export default App;