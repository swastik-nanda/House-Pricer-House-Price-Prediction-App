import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./PrivateRoute";
import HowItWorks from "./pages/HowItWorks";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage></HomePage>
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/how-it-works"
            element={<HowItWorks></HowItWorks>}
          ></Route>
          <Route path="/features" element={<Features></Features>}></Route>
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact></Contact>
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
