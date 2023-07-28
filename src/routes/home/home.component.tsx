import { useEffect } from "react";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import { firebaseApp } from "../../utils/firebase/firebase.utils";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
