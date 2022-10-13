import React, { useContext } from "react";
import { UserContext } from "./context/userContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div>HomePage</div>
      <hr />
      {JSON.stringify(user, null, 3)}
    </>
  );
};

export default HomePage;
