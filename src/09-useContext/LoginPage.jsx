import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <div>LoginPage</div>
      <button
        onClick={() =>
          setUser({
            id: "12345",
            name: "Boris XD",
            nick: "Fallen",
          })
        }
      >
        Login
      </button>
    </>
  );
};

export default LoginPage;
