// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./component/Routes/ProtectedRoute";
import PublicRoute from "./component/Routes/PublicRoute";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
