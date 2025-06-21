import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail.jsx";
import { getDoc, doc } from "firebase/firestore";
import "./ProductDetail.scss";
import { db } from '../../Firebase/config';
import { CargandoItem } from '../CargandoItem/CargandoItem'

export const ProductDetailContainer = () => {
  const [Product, setProduct] = useState(null);
  const { ProductId } = useParams();

  useEffect(() => {
    const mueblesRef = doc(db, "Muebles", ProductId);

    getDoc(mueblesRef)
      .then((doc) => {
        if (doc.exists()) {
          setProduct({
            id: doc.id,
            ...doc.data(),
          });
        } else {
          console.log("El documento no existe");
        }
      })
      .catch((e) => console.log(e));
  }, [ProductId]);

  console.log(Product)

  return (<>
  {Product ? (
        <ProductDetail Product={Product} />
      ) : (
        <CargandoItem/>
      )}
  </>
      
  );
};

export default ProductDetailContainer;
