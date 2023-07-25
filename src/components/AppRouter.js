import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Programs from "../pages/Programs";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Program from "../pages/Program";
import Reg from "../pages/Reg";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import RequireAuth from "../hoc/RequireAuth";
import { AuthProvider } from "../hoc/AuthProvider";
import Registr from "../pages/Registr";
import { CookiesProvider } from "react-cookie";

const AppRouter = ({ dbSkills }) => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main dbSkills={dbSkills} />} />
          <Route path="/about" element={<About />} />
          <Route path="/progs" element={<Programs dbSkills={dbSkills} />} />
          <Route path="/prog" element={<Program />} />
          <Route path="/prices" element={<About />} />
          <Route path="/reg" element={<Reg />} />
          <Route
            path="/registr"
            element={
              <RequireAuth>
                <Registr />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin dbSkills={dbSkills} />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default AppRouter;
