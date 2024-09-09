import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Diazepam from "./pages/diazepam/Diazepam";
import Shadyplaylist from "./pages/shadyplaylist/Shadyplaylist";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate replace to="diazepam" />} />
        <Route path="diazepam" element={<Diazepam />} />
        <Route path="shadyplaylist" element={<Shadyplaylist />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
