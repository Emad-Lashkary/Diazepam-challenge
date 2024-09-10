import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Diazepam from "./pages/diazepam/Diazepam";
import Shadyplaylist from "./pages/shadyplaylist/Shadyplaylist";
import Zehnemariz from "./pages/zehnemariz/Zehnemariz";
import Savagevibe from "./pages/savagevibe/Savagevibe";
import Fairy from "./pages/fairy/Fairy";
import Blackheart from "./pages/blackheart/Blackheart";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Navigate replace to="diazepam" />} />
        <Route path="diazepam" element={<Diazepam />} />
        <Route path="shadyplaylist" element={<Shadyplaylist />} />
        <Route path="zehnemariz" element={<Zehnemariz />} />
        <Route path="Savagevibe" element={<Savagevibe />} />
        <Route path="fairy" element={<Fairy />} />
        <Route path="blackheart" element={<Blackheart />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
