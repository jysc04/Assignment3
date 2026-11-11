import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Pets from "./pages/Pets";
import Membership from "./pages/Membership";
import Adoption from "./pages/Adoption";
import ReleasePet from "./pages/ReleasePet";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import MemberDashboard from "./pages/MemberDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminApplications from "./pages/AdminApplications";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/adoption/:id" element={<Adoption />} />
          <Route path="/release" element={<ReleasePet />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/member-dashboard"
            element={
              <ProtectedRoute allowedRole="member">
                <MemberDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-applications"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminApplications />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
