import React from "react";
import { Home } from "./Pages/Home";
import { Success } from "./Pages/Success";
import { Error } from "./Pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Components/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
