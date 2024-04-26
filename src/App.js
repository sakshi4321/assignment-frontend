import { BrowserRouter, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import BuildPage from "./pages/buildPage";
import AuthPage from "./pages/authPage";
import ItemPage from "./pages/itemPage";
import { useState } from "react";
import SignupPage from "./pages/signupPage";
/**
 * Renders a ReactJS component that handles user authentication and redirects to protected pages if user is logged in.
 * @component
 * @example
 *   <App />
 * @state {boolean} isLoggedIn - Keeps track of whether the user is logged in or not.
 * @state {function} setIsLoggedIn - Sets the value of isLoggedIn.
 * @prop {function} handleLogout - Function to log the user out.
 * @description
 *   - Uses useState hook to keep track of isLoggedIn state.
 *   - Uses ProtectedRoute component to redirect to protected pages if user is logged in.
 *   - Uses BrowserRouter and Routes to handle routing.
 *   - Uses Route and Navigate components to redirect to different pages.
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false); // Log the user out
    // Here, setting isLoggedIn to false will cause ProtectedRoute to react
    // and redirect to login if on a protected page.
  };
  const ProtectedRoute = ({ children }) => {
    console.log('Checking access for protected route, isLoggedIn:', isLoggedIn);
    if (!isLoggedIn) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupPage setIsLoggedIn={setIsLoggedIn} />} /> 
        <Route 
          path="/buildPage" 
          element={
            <ProtectedRoute>
              <BuildPage onLogout={handleLogout} />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/itemPage" 
          element={
            <ProtectedRoute>
              <ItemPage onLogout={handleLogout}  />
            </ProtectedRoute>
          } 
        />
        {/* Redirect all other routes to the login page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
