import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datatable from "./components/datatable/Datatable";

// Example columns (you already pass columns from parent usually)
// For now, keep it minimal so app runs
const dummyColumns = [
  { field: "_id", headerName: "ID", width: 250 },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Example routes */}
        <Route
          path="/users"
          element={<Datatable columns={dummyColumns} />}
        />
        <Route
          path="/hotels"
          element={<Datatable columns={dummyColumns} />}
        />
        <Route
          path="/rooms"
          element={<Datatable columns={dummyColumns} />}
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<div style={{ padding: 20 }}>Admin panel running</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
