import { formatKip } from "../data.js";

function CartPanel({ cart, total, onIncrease, onDecrease, onRemove }) {
  return (
    <aside className="cart">
      <div className="cart-title">ກະຕ່າສິນຄ້າ · Cart</div>
      {cart.length === 0 ? (
        <div className="empty">ກະຕ່າວ່າງ · your cart is empty</div>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              <span className="emoji">{item.emoji}</span>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="line">{formatKip(item.price * item.qty)}</div>
              </div>
              <div className="qty">
                <button onClick={() => onDecrease(item.id)}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => onIncrease(item.id)}>＋</button>
              </div>
              <button className="del" onClick={() => onRemove(item)}>✕</button>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <span>ລວມ · Total</span>
        <b data-testid="total">{formatKip(total)}</b>
      </div>
    </aside>
  );
}

export default CartPanel;
