import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Diazepam from "./pages/Diazepam";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate replace to="diazepam" />} />
        <Route path="diazepam" element={<Diazepam />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
