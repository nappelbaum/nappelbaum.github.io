import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useCookies } from "react-cookie";
import axios from "axios";
import Loader from "../components/UI/loader/Loader";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user, signin } = useAuth();
  const [cookies] = useCookies(["snowid"]);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const snowid = JSON.stringify({ id: cookies.snowid });
    axios
      .post("https://bohohome.ru/php/log/checkCookie.php", snowid)
      .then((res) => {
        if (res.data) signin(res.data, () => {});
        setGo(true);
      });
  }, []);

  if (go === true) {
    if (
      !user.login ||
      (location.pathname === "/admin" && user.access === "user")
    ) {
      return (
        <Navigate
          to="/login"
          state={{ from: location.pathname + location.search }}
          replace={true}
        />
      );
    }

    return children;
  } else {
    return <Loader />;
  }
};

export default RequireAuth;
