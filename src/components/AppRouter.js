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

const AppRouter = ({ dbSkills, changeNavFix, changeNavDarkColor }) => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                dbSkills={dbSkills}
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/progs"
            element={
              <Programs
                dbSkills={dbSkills}
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/prog"
            element={
              <Program
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/prices"
            element={
              <About
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/reg"
            element={
              <Reg
                changeNavFix={changeNavFix}
                changeNavDarkColor={changeNavDarkColor}
              />
            }
          />
          <Route
            path="/registr"
            element={
              <RequireAuth>
                <Registr
                  changeNavFix={changeNavFix}
                  changeNavDarkColor={changeNavDarkColor}
                />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <Admin
                  dbSkills={dbSkills}
                  changeNavDarkColor={changeNavDarkColor}
                />
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={<Login changeNavDarkColor={changeNavDarkColor} />}
          />
        </Routes>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default AppRouter;
