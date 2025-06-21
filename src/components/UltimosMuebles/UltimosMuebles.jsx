import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../Firebase/config";
import ProductCard from '../ProductCard/ProductCard.jsx';
import './UltimosMuebles.scss'

export const UltimosMuebles = () => {
  const [muebles, setMuebles] = useState([]);

  useEffect(() => {
    const obtenerUltimos = async () => {
      try {
        const mueblesRef = collection(db, "Muebles");
        const q = query(mueblesRef, orderBy("creado", "desc"), limit(3));
        const resp = await getDocs(q);

        const docs = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setMuebles(docs);
      } catch (error) {
        console.error("Error al obtener últimos muebles:", error);
      }
    };

    obtenerUltimos();
  }, []);

  return (
      <div className="ultimosMuebles_container">
        {muebles.map(mueble => (
          <ProductCard key={mueble.id} item={mueble} />
        ))}
      </div>
  );
};

export default UltimosMuebles;
