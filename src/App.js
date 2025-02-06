// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Contact from "./component/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
