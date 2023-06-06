import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Issues from "./screens/issues/Issues";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/issues" element={<Issues />} />
        <Route path="*" element={<Navigate to={"/issues"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
