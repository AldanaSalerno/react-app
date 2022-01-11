import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore'


export const ItemDetailContainer = () => {
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'productos', id)
    getDoc(queryDb)
    .then(resp => setProd( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(()=>setLoading(false))

  }, [id]);
  console.log(prod)

  return (
    <div>
      <div>
        <h2>Esto es ItemDetailContainer</h2>
        {loading ? (
          <h3>En espera de ItemDetail...</h3>
        ) : (
          <ItemDetail prod={prod} />
        )}
      </div>
    </div>
  );
        }