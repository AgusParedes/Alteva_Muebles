import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail.jsx";
import { getDoc, doc, collection, query, where, limit, getDocs } from "firebase/firestore";
import "./ProductDetail.scss";
import { db } from '../../Firebase/config';
import { CargandoItem } from '../CargandoItem/CargandoItem'

export const ProductDetailContainer = () => {
  const [Product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { ProductId } = useParams();

  useEffect(() => {
    let isMounted = true;

    setCargando(true);
    setProduct(null);
    setRelatedProducts([]);

    const mueblesRef = doc(db, "Muebles", ProductId);

    getDoc(mueblesRef)
      .then((docSnap) => {
        if (!docSnap.exists()) {
          console.log("El documento no existe");
          return null;
        }
        const productData = { id: docSnap.id, ...docSnap.data() };
        if (isMounted) setProduct(productData);
        return productData;
      })
      .then((productData) => {
        if (!productData?.categoria) return null;
        const relatedQuery = query(
          collection(db, "Muebles"),
          where("categoria", "==", productData.categoria),
          limit(4)
        );
        return getDocs(relatedQuery);
      })
      .then((snapshot) => {
        if (!snapshot) return;
        const items = snapshot.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((item) => item.id !== ProductId)
          .slice(0, 3);
        if (isMounted) setRelatedProducts(items);
      })
      .catch((e) => console.log(e))
      .finally(() => {
        if (isMounted) setCargando(false);
      });

    return () => {
      isMounted = false;
    };
  }, [ProductId]);

  if (cargando) return <CargandoItem />;

  if (!Product) return <p>No se encontró este producto.</p>;

  return <ProductDetail Product={Product} relatedProducts={relatedProducts} />;
};

export default ProductDetailContainer;