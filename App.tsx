import { lazy } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const Form = lazy(() => import("./pages/Form/Form"));

function App() {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='form' element={<Form />} />
      <Route path="*" element={<Navigate to='home' replace />} />
    </Routes>
  );
}

export default App;
