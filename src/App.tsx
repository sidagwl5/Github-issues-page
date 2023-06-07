import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Issues from "./screens/issues/Issues";
import { Alert } from "@/ui/atoms/Alert";
import { tx } from "@twind/core";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        preventDuplicate
        classes={{
          root: tx("max-w-max!"),
        }}
        Components={{
          default: Alert,
          success: Alert,
          error: Alert,
          info: Alert,
          warning: Alert,
        }}
      >
        <Routes>
          <Route path="/issues" element={<Issues />} />
          <Route path="*" element={<Navigate to={"/issues"} />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
