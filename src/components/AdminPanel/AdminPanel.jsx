import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";

export const AdminPanel = () => {
  const navigate = useNavigate();
  const [checkingAuth, setCheckingAuth] = useState(true); 
  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (auth !== "true") {
      navigate("/admin-panel");
    } else {
      setCheckingAuth(false); 
    }
  }, []);

  if (checkingAuth){
    navigate("/admin-login");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    navigate("/admin-login");
  };
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    code: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: ""
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const procesarUrl = (url) => {
    if (!url.includes("res.cloudinary.com")) return url;
    if (url.includes("q_auto,f_auto,w_800")) return url;
    return url.replace("upload/", "upload/q_auto,f_auto,w_800/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const imagenes = [
      formData.img1,
      formData.img2,
      formData.img3,
      formData.img4,
      formData.img5
    ]
      .filter((url) => url.trim() !== "")
      .map(procesarUrl); 

    try {
      await addDoc(collection(db, "Muebles"), {
          titulo: formData.titulo,
          descripcion: formData.descripcion,
          categoria: formData.categoria,
          code: formData.code,
          img1: imagenes[0] || "",
          img2: imagenes[1] || "",
          img3: imagenes[2] || "",
          img4: imagenes[3] || "",
          img5: imagenes[4] || "",
          creado: serverTimestamp()
        });

      setMensaje("✅ Mueble agregado con éxito");

      setFormData({
        titulo: "",
        descripcion: "",
        categoria: "",
        code: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
      });
    } catch (error) {
      console.error("Error al agregar:", error);
      setMensaje("❌ Error al agregar el mueble");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Agregar nuevo mueble</h2>
      <form onSubmit={handleSubmit}>
        <input name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Título" required />
        <input name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" required />
        <input name="categoria" value={formData.categoria} onChange={handleChange} placeholder="Categoría" required />
        <input name="code" value={formData.code} onChange={handleChange} placeholder="Código" required />
        <input name="img1" value={formData.img1} onChange={handleChange} placeholder="URL de imagen 1" />
        <input name="img2" value={formData.img2} onChange={handleChange} placeholder="URL de imagen 2" />
        <input name="img3" value={formData.img3} onChange={handleChange} placeholder="URL de imagen 3" />
        <input name="img4" value={formData.img4} onChange={handleChange} placeholder="URL de imagen 4" />
        <input name="img5" value={formData.img5} onChange={handleChange} placeholder="URL de imagen 5" />
        <button type="submit">Agregar mueble</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
    
  );
};

export default AdminPanel;
