import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import PatientDetails from "./pages/patientDetails";
import SearchPage from "./pages/searchLibrary";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/patientDashboard" element={<PatientDetails/>}/>
          <Route path="/searchPage" element={<SearchPage/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
