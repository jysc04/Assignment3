import { useState } from "react";
import { Link } from "react-router-dom";
import useApplications from "../context/useApplications";
import {
  PawPrint,
  User,
  Heart,
  FileText,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

function ReleasePet() {
  const { submitReleaseRequest } = useApplications();
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    petName: "",
    petType: "",
    breed: "",
    age: "",
    gender: "",
    vaccination: "",
    reason: "",
    additionalInfo: "",
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  // Update ordinary input fields
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    submitReleaseRequest({
      ...formData,
    });

    setSubmitted(true);
  }

  // Display confirmation after submission
  if (submitted) {
    return (
      <div className="release-success">
        <CheckCircle size={65} />

        <h1>Request Submitted!</h1>

        <p>
          Thank you, {formData.ownerName}, for contacting Pet Haven about{" "}
          {formData.petName}.
        </p>

        <p>
          Our team will review your request and contact you using the details
          provided.
        </p>

        <Link to="/" className="release-home-btn">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="release-page">
      {/* Page Heading */}
      <section className="release-header">
        <span>
          <PawPrint size={18} />
          WE'RE HERE TO HELP
        </span>

        <h1>Release a Pet</h1>

        <p>
          We understand that circumstances can change. Tell us about your pet so
          our team can explore how we may be able to help.
        </p>
      </section>

      <div className="release-container">
        <Link to="/" className="release-back-link">
          <ArrowLeft size={17} />
          Back to Homepage
        </Link>

        {/* Introduction */}
        <div className="release-intro">
          <Heart size={35} />

          <h2>Every Pet Deserves Care</h2>

          <p>
            Providing accurate information helps us understand your pet's needs
            and assess the support we can offer.
          </p>
        </div>

        <form className="release-form" onSubmit={handleSubmit}>
          {/* Owner Info */}
          <div className="release-section-title">
            <User size={23} />

            <div>
              <h2>Owner Information</h2>
              <p>Tell us how we can contact you.</p>
            </div>
          </div>

          <div className="release-form-grid">
            <div className="release-form-group full-width">
              <label>Full Name *</label>

              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="release-form-group">
              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />

              {formData.email &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                  <span className="field-error">
                    Please enter a valid email address (e.g. example@email.com).
                  </span>
                )}
            </div>

            <div className="release-form-group">
              <label>Phone Number *</label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                minlength="8"
                maxlength="15"
                pattern="[0-9]+"
                required
              />

              {formData.phone &&
                !/^[0-9+\-\s()]{8,15}$/.test(formData.phone) && (
                  <span className="field-error">
                    Please enter a valid phone number containing 8–15
                    characters.
                  </span>
                )}
            </div>

            <div className="release-form-group full-width">
              <label>Residential Address *</label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your residential address"
                rows="3"
                minlength="10"
                maxlength="200"
                pattern="[A-Za-z0-9\s,.-]+"
                required
              />
            </div>
          </div>

          <div className="release-divider" />

          {/* Pet Info */}
          <div className="release-section-title">
            <PawPrint size={23} />

            <div>
              <h2>Pet Information</h2>
              <p>Help us get to know your pet.</p>
            </div>
          </div>

          <div className="release-form-grid">
            <div className="release-form-group">
              <label>Pet's Name *</label>

              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                placeholder="Enter your pet's name"
                required
              />
            </div>

            <div className="release-form-group">
              <label>Animal Type *</label>

              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                required
              >
                <option value="">Select animal type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="release-form-group">
              <label>Breed *</label>

              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                placeholder="Enter breed"
                required
              />
            </div>

            <div className="release-form-group">
              <label>Age *</label>

              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g. 2 years old"
                required
              />
            </div>

            <div className="release-form-group">
              <label>Gender *</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            <div className="release-form-group">
              <label>Vaccination Status *</label>

              <select
                name="vaccination"
                value={formData.vaccination}
                onChange={handleChange}
                required
              >
                <option value="">Select status</option>
                <option value="Fully vaccinated">Fully vaccinated</option>
                <option value="Partially vaccinated">
                  Partially vaccinated
                </option>
                <option value="Not vaccinated">Not vaccinated</option>
                <option value="Unsure">Unsure</option>
              </select>
            </div>
          </div>

          <div className="release-divider" />

          {/* Release Info */}
          <div className="release-section-title">
            <FileText size={23} />

            <div>
              <h2>Release Information</h2>
              <p>Tell us more about your situation.</p>
            </div>
          </div>

          <div className="release-form-group">
            <label>Reason for Releasing Your Pet *</label>

            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="">Select a reason</option>
              <option value="Financial difficulties">
                Financial difficulties
              </option>
              <option value="Housing restrictions">Housing restrictions</option>
              <option value="Health or personal circumstances">
                Health or personal circumstances
              </option>
              <option value="Unable to provide sufficient care">
                Unable to provide sufficient care
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="release-form-group">
            <label>Additional Information</label>

            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Describe your pet's personality, behaviour, medical needs, or anything else we should know..."
              rows="5"
            />
          </div>

          {/* Agreement */}
          <div className="release-terms">
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />

              <span>
                I confirm that the information provided is accurate and
                understand that submitting this form does not guarantee that Pet
                Haven can accept my pet. *
              </span>
            </label>
          </div>

          <button type="submit" className="release-submit-btn">
            Submit Release Request
          </button>

          <p className="release-required">* Required fields</p>
        </form>
      </div>
    </div>
  );
}

export default ReleasePet;
