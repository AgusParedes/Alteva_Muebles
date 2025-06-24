import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config"; 
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "AdminUsuario"));
      let authenticated = false;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.username === username && data.password === password) {
          authenticated = true;
        }
      });

      if (authenticated) {
        localStorage.setItem("admin-auth", "true");
        navigate("/admin-panel");
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (err) {
      setError("Error al iniciar sesión");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Ingreso al panel</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
