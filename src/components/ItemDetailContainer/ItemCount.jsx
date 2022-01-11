import React, { useState } from 'react';

export const ItemCount = ({ inicial, stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const clickMas = () => {
    count < stock
      ? setCount(count + 1)
      : console.log('soloo hay 5 unidades en stock');
  };
  const clickMenos = () => {
    count > 1
      ? setCount(count - 1)
      : console.log('no puede seleccionar menos que un producto');
  };
  const Agregar = () => {
    console.log(`Ha agregado al carrito ${count} unidades`);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={clickMas}>Click +</button>
      <button onClick={clickMenos}>Click -</button>
      <button onClick={Agregar}>Agregar al carrito</button>
    </div>
  );
};