import { Link } from "react-router-dom";
import {
  ShieldCheck,
  PawPrint,
  ClipboardList,
  FilePlus,
  Users,
} from "lucide-react";
import { useAuth } from "../context/useAuth";

const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <div>
            <p className="dashboard-label">ADMINISTRATION</p>
            <h1>Welcome, {user.name}!</h1>
            <p>Manage Pet Haven and help animals find loving homes.</p>
          </div>

          <ShieldCheck size={45} className="dashboard-icon" />
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <PawPrint size={30} />
            <h3>Manage Pets</h3>
            <p>View the pets currently listed on the Pet Haven website.</p>
            <Link to="/pets">View Pets</Link>
          </div>

          <div className="dashboard-card">
            <ClipboardList size={30} />
            <h3>Adoption Applications</h3>
            <p>
              Review applications submitted by people interested in adopting.
            </p>
            <Link to="/admin-applications">Review Applications</Link>
          </div>

          <div className="dashboard-card">
            <FilePlus size={30} />
            <h3>Pet Release Requests</h3>
            <p>Review requests from owners who need to release their pets.</p>
            <Link to="/admin-applications">Review Requests</Link>
          </div>

          <div className="dashboard-card">
            <Users size={30} />
            <h3>Member Management</h3>
            <p>View and manage Pet Haven member accounts.</p>
            <span className="dashboard-coming-soon">
              Management coming soon
            </span>
          </div>
        </div>

        <div className="dashboard-account">
          <h2>Administrator Information</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Account Type:</strong> Administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
