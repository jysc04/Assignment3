import { useEffect, useState } from "react";
import ApplicationContext from "./ApplicationContext";

const getStoredData = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

const ApplicationProvider = ({ children }) => {
  const [adoptionApplications, setAdoptionApplications] = useState(() =>
    getStoredData("pethaven_adoption_applications"),
  );

  const [releaseRequests, setReleaseRequests] = useState(() =>
    getStoredData("pethaven_release_requests"),
  );

  const [unavailablePetIds, setUnavailablePetIds] = useState(() =>
    getStoredData("pethaven_unavailable_pets"),
  );

  // Save adoption applications whenever changed
  useEffect(() => {
    localStorage.setItem(
      "pethaven_adoption_applications",
      JSON.stringify(adoptionApplications),
    );
  }, [adoptionApplications]);

  // Save pet release requests whenever changed
  useEffect(() => {
    localStorage.setItem(
      "pethaven_release_requests",
      JSON.stringify(releaseRequests),
    );
  }, [releaseRequests]);

  useEffect(() => {
    localStorage.setItem(
      "pethaven_unavailable_pets",
      JSON.stringify(unavailablePetIds),
    );
  }, [unavailablePetIds]);

  // Add a new adoption application
  const submitAdoptionApplication = (applicationData) => {
    const newApplication = {
      id: Date.now(),
      ...applicationData,
      status: "Pending",
      submittedAt: new Date().toISOString(),
    };

    setAdoptionApplications((previous) => [...previous, newApplication]);

    return newApplication;
  };

  // Add a new pet release request
  const submitReleaseRequest = (requestData) => {
    const newRequest = {
      id: Date.now(),
      ...requestData,
      status: "Pending",
      submittedAt: new Date().toISOString(),
    };

    setReleaseRequests((previous) => [...previous, newRequest]);

    return newRequest;
  };

  // Change the status of adoption application.
  const updateAdoptionStatus = (id, newStatus) => {
    const application = adoptionApplications.find((item) => item.id === id);

    if (!application) return;

    // Prevent approving multiple applications for one adopted pet
    if (
      newStatus === "Approved" &&
      unavailablePetIds.includes(application.petId)
    ) {
      return;
    }

    setAdoptionApplications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );

    // Mark the pet as unavailable when an application is approved
    if (newStatus === "Approved") {
      setUnavailablePetIds((previous) =>
        previous.includes(application.petId)
          ? previous
          : [...previous, application.petId],
      );
    }
  };

  // Change the status of a pet release request
  const updateReleaseStatus = (id, newStatus) => {
    setReleaseRequests((previous) =>
      previous.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request,
      ),
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        adoptionApplications,
        releaseRequests,
        unavailablePetIds,
        submitAdoptionApplication,
        submitReleaseRequest,
        updateAdoptionStatus,
        updateReleaseStatus,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
