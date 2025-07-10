import { Routes, Route, Navigate } from "react-router-dom";

import NotFound from "@/pages/NotFound";

import Register from "@/pages/Register";
import Login from "@/pages/Login";
import ForgetPassword from "@/pages/ForgetPassword";
import ResetPassword from "@/pages/ResetPassword";

function AuthRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Navigate to="login" replace />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route
          path="/resetpassword/:userId/:resetToken"
          element={<ResetPassword />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default AuthRouter;
