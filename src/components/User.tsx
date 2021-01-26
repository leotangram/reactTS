import { useState } from "react";

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: "xyz098",
  name: "",
};

const User = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = (): void => {
    setUser({
      uid: "abc123",
      name: "Leonardo Omaña",
    });
  };

  return (
    <div className="mt-5">
      <h3>Usuario</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>
      <pre>{user ? JSON.stringify(user) : "No hay usuario"}</pre>
    </div>
  );
};

export default User;
