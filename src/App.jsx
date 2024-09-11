import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Diazepam from "./pages/diazepam/Diazepam";
import Shadyplaylist from "./pages/shadyplaylist/Shadyplaylist";
import Zehnemariz from "./pages/zehnemariz/Zehnemariz";
import Savagevibe from "./pages/savagevibe/Savagevibe";
import Fairy from "./pages/fairy/Fairy";
import Blackheart from "./pages/blackheart/Blackheart";
import Dream from "./pages/dream/Dream";
import Deez from "./pages/Deez/Deez";
import Changed from "./pages/changed/Changed";
import Circus from "./pages/diazepam/circus/Circus";

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
        <Route path="Dream" element={<Dream />} />
        <Route path="deez" element={<Deez />} />
        <Route path="changed" element={<Changed />} />
        <Route path="circus" element={<Circus />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
