import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, PawPrint, ArrowLeft } from "lucide-react";
import pets from "../data/pets";
import useApplications from "../context/useApplications";

function Adoption() {
  const { id } = useParams();
  const { submitAdoptionApplication } = useApplications();

  // Find the selected pet
  const pet = pets.find((p) => p.id === Number(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    housingType: "",
    experience: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    submitAdoptionApplication({
      ...formData,
      petId: pet.id,
      petName: pet.name,
    });

    setSubmitted(true);
  }

  if (!pet) {
    return (
      <div className="form-message">
        <h2>Pet Not Found</h2>
        <p>Sorry, we couldn't find the selected pet.</p>
        <Link to="/pets">Back to Our Pets</Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="form-message success-message">
        <Heart size={55} />
        <h2>Application Submitted!</h2>

        <p>
          Thank you, {formData.fullName}, for your interest in adopting{" "}
          {pet.name}.
        </p>

        <p>Our Pet Haven team will follow up with you.</p>

        <Link to="/pets" className="primary-btn">
          Browse More Pets
        </Link>
      </div>
    );
  }

  return (
    <div className="adoption-page">
      <section className="form-header">
        <span>
          <PawPrint size={17} />
          GIVE A PET A FOREVER HOME
        </span>

        <h1>Adoption Application</h1>

        <p>
          You're one step closer to welcoming a new companion into your family.
        </p>
      </section>

      <div className="adoption-container">
        <Link to="/pets" className="back-link">
          <ArrowLeft size={17} />
          Back to Our Pets
        </Link>

        {/* Selected Pet Info */}
        <div className="selected-pet">
          <img src={pet.image} alt={pet.name} />

          <div>
            <span>YOU'RE INTERESTED IN</span>
            <h2>{pet.name}</h2>
            <p>
              {pet.breed} · {pet.age}
            </p>
          </div>
        </div>

        {/* Application Form */}
        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-section-title">
            <h2>Personal Information</h2>
            <p>Tell us a little about yourself.</p>
          </div>

          <div className="form-grid">
            <div className="form-group full-width">
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
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

            <div className="form-group">
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

            <div className="form-group full-width">
              <label>Home Address *</label>
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

          <div className="form-divider"></div>

          <div className="form-section-title">
            <h2>Your Living Environment</h2>
            <p>Help us understand your home environment.</p>
          </div>

          <div className="form-group">
            <label>What type of home do you live in? *</label>

            <select
              name="housingType"
              value={formData.housingType}
              onChange={handleChange}
              required
            >
              <option value="">Select your housing type</option>
              <option value="HDB Flat">HDB Flat</option>
              <option value="Condominium">Condominium</option>
              <option value="Landed Property">Landed Property</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-divider"></div>

          <div className="form-section-title">
            <h2>Pet Ownership Experience</h2>
            <p>Tell us about your experience with animals.</p>
          </div>

          <div className="form-group">
            <label>Have you owned a pet before? *</label>

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Why would you like to adopt {pet.name}? *</label>

            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Tell us why you would like to give this pet a home..."
              rows="5"
              required
            />
          </div>

          <div className="form-notice">
            <Heart size={20} />
            <p>
              Submitting this application does not guarantee adoption. Our staff
              will review your application and contact you for further
              discussion.
            </p>
          </div>

          <button type="submit" className="submit-form-btn">
            Submit Adoption Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adoption;
