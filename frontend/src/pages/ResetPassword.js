import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/reset-password/${token}`, { password });
      alert("Contraseña restablecida con éxito.");

    } catch (error) {
      alert("Hubo un error al restablecer la contraseña.");
    }
  };

  return (
    <div className="container">
      <h1>Restablecer Contraseña</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="password">Nueva Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Ingresa tu nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Restablecer Contraseña
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
