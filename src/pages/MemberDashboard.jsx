import { Link } from "react-router-dom";
import { User, PawPrint, Heart } from "lucide-react";
import { useAuth } from "../context/useAuth";

const MemberDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">MEMBER AREA</p>
            <h1>Welcome, {user.name}!</h1>
            <p>Thank you for being part of the Pet Haven community.</p>
          </div>

          <User size={45} className="dashboard-icon" />
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <PawPrint size={30} />
            <h3>Explore Our Pets</h3>
            <p>Meet the animals currently looking for a loving home.</p>
            <Link to="/pets">Browse Pets</Link>
          </div>

          <div className="dashboard-card">
            <Heart size={30} />
            <h3>Adoption</h3>
            <p>Interested in adopting? Start an application for a pet.</p>
            <Link to="/pets">Find a Pet</Link>
          </div>
        </div>

        <div className="dashboard-account">
          <h2>Account Information</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Account Type:</strong> Member
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
