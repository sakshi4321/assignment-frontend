import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import PatientDetails from "./pages/patientDetails";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PatientDetails/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
