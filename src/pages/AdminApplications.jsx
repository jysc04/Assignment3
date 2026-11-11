import { useState } from "react";
import { CheckCircle, XCircle, ClipboardList } from "lucide-react";
import useApplications from "../context/useApplications";

const AdminApplications = () => {
  const {
    adoptionApplications,
    releaseRequests,
    updateAdoptionStatus,
    updateReleaseStatus,
  } = useApplications();

  const [activeTab, setActiveTab] = useState("adoption");

  const applications =
    activeTab === "adoption" ? adoptionApplications : releaseRequests;

  const handleStatusChange = (id, newStatus) => {
    if (activeTab === "adoption") {
      updateAdoptionStatus(id, newStatus);
    } else {
      updateReleaseStatus(id, newStatus);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="admin-applications-page">
      <div className="admin-applications-container">
        <div className="admin-applications-header">
          <div>
            <p className="dashboard-label">ADMINISTRATION</p>
            <h1>Application Management</h1>
            <p>Review and manage submissions from the Pet Haven community.</p>
          </div>

          <ClipboardList size={45} className="dashboard-icon" />
        </div>

        {/* Application Tabs */}
        <div className="application-tabs">
          <button
            className={activeTab === "adoption" ? "active" : ""}
            onClick={() => setActiveTab("adoption")}
          >
            Adoption Applications ({adoptionApplications.length})
          </button>

          <button
            className={activeTab === "release" ? "active" : ""}
            onClick={() => setActiveTab("release")}
          >
            Pet Release Requests ({releaseRequests.length})
          </button>
        </div>

        {/* Application List */}
        <div className="admin-application-list">
          {applications.length === 0 ? (
            <div className="admin-empty-state">
              <ClipboardList size={45} />
              <h2>No Submissions Yet</h2>
              <p>There are currently no submissions in this section.</p>
            </div>
          ) : (
            applications.map((application) => (
              <div className="admin-application-card" key={application.id}>
                <div className="admin-application-top">
                  <div>
                    <h2>
                      {activeTab === "adoption"
                        ? application.petName
                        : application.petName}
                    </h2>

                    <p>Submitted: {formatDate(application.submittedAt)}</p>
                  </div>

                  <span
                    className={`application-status ${application.status.toLowerCase()}`}
                  >
                    {application.status}
                  </span>
                </div>

                <div className="application-details">
                  {activeTab === "adoption" ? (
                    <>
                      <p>
                        <strong>Applicant:</strong> {application.fullName}
                      </p>
                      <p>
                        <strong>Email:</strong> {application.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {application.phone}
                      </p>
                      <p>
                        <strong>Address:</strong> {application.address}
                      </p>
                      <p>
                        <strong>Housing Type:</strong> {application.housingType}
                      </p>
                      <p>
                        <strong>Pet Experience:</strong>{" "}
                        {application.experience}
                      </p>
                      <p>
                        <strong>Reason for Adoption:</strong>
                      </p>
                      <p className="application-reason">{application.reason}</p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Owner:</strong> {application.ownerName}
                      </p>
                      <p>
                        <strong>Email:</strong> {application.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {application.phone}
                      </p>
                      <p>
                        <strong>Address:</strong> {application.address}
                      </p>
                      <p>
                        <strong>Pet Type:</strong> {application.petType}
                      </p>
                      <p>
                        <strong>Breed:</strong> {application.breed}
                      </p>
                      <p>
                        <strong>Age:</strong> {application.age}
                      </p>
                      <p>
                        <strong>Gender:</strong> {application.gender}
                      </p>
                      <p>
                        <strong>Vaccination:</strong> {application.vaccination}
                      </p>
                      <p>
                        <strong>Reason for Release:</strong>
                      </p>
                      <p className="application-reason">{application.reason}</p>
                      <p>
                        <strong>Additional Information:</strong>
                      </p>
                      <p className="application-reason">
                        {application.additionalInfo || "None provided"}
                      </p>
                    </>
                  )}
                </div>

                <div className="application-actions">
                  <button
                    className="approve-button"
                    onClick={() =>
                      handleStatusChange(application.id, "Approved")
                    }
                    disabled={application.status !== "Pending"}
                  >
                    <CheckCircle size={17} />
                    Approve
                  </button>

                  <button
                    className="reject-button"
                    onClick={() =>
                      handleStatusChange(application.id, "Rejected")
                    }
                    disabled={application.status !== "Pending"}
                  >
                    <XCircle size={17} />
                    Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminApplications;
