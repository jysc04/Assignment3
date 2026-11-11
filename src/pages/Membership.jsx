import { useState } from "react";
import { Link } from "react-router-dom";

import { PawPrint, Heart, UserPlus, CheckCircle } from "lucide-react";

function Membership() {
  // Store the information entered
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    membershipType: "",
    interests: [],
    reason: "",
    agreeTerms: false,
  });

  // Track whether registration was successful
  const [submitted, setSubmitted] = useState(false);

  // Update form info
  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  // Handle interest checkboxes
  function handleInterestChange(event) {
    const { value, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      interests: checked
        ? [...previousData.interests, value]
        : previousData.interests.filter((interest) => interest !== value),
    }));
  }

  // Submit registration form
  function handleSubmit(event) {
    event.preventDefault();

    console.log("New Membership Registration:", formData);

    setSubmitted(true);
  }

  // Success screen
  if (submitted) {
    return (
      <div className="membership-success">
        <CheckCircle size={65} />

        <h1>Welcome to Pet Haven!</h1>

        <p>
          Thank you, {formData.fullName}, for becoming a supporter of Pet Haven.
        </p>

        <p>Your membership registration has been successfully submitted.</p>

        <Link to="/" className="membership-home-btn">
          Return to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="membership-page">
      {/* Page Heading */}
      <section className="membership-header">
        <span>
          <PawPrint size={18} />
          JOIN OUR COMMUNITY
        </span>

        <h1>Become a Pet Haven Member</h1>

        <p>
          Every act of kindness makes a difference. Join us in giving abandoned
          pets a brighter future.
        </p>
      </section>

      {/* Membership Form */}
      <div className="membership-container">
        <div className="membership-intro">
          <Heart size={35} />

          <h2>Make a Difference Today</h2>

          <p>
            Become part of a community that believes every abandoned animal
            deserves love, care and a second chance at happiness.
          </p>
        </div>

        <form className="membership-form" onSubmit={handleSubmit}>
          {/* Personal Info */}
          <div className="membership-section-title">
            <UserPlus size={23} />

            <div>
              <h2>Personal Information</h2>
              <p>Tell us about yourself.</p>
            </div>
          </div>

          <div className="membership-form-grid">
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

          <div className="membership-divider"></div>

          {/* Membership Type */}
          <div className="membership-section-title">
            <Heart size={23} />

            <div>
              <h2>Membership Details</h2>
              <p>Choose how you would like to support us.</p>
            </div>
          </div>

          <div className="form-group">
            <label>Membership Type *</label>

            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              required
            >
              <option value="">Select membership type</option>
              <option value="General Member">General Member</option>
              <option value="Volunteer Member">Volunteer Member</option>
              <option value="Supporting Member">Supporting Member</option>
            </select>
          </div>

          {/* Interests */}
          <div className="form-group">
            <label>How would you like to support Pet Haven?</label>

            <p className="membership-hint">
              You may select more than one option.
            </p>

            <div className="interest-options">
              {[
                "Volunteering",
                "Pet Adoption",
                "Donations",
                "Events and Fundraising",
              ].map((interest) => (
                <label className="interest-option" key={interest}>
                  <input
                    type="checkbox"
                    value={interest}
                    checked={formData.interests.includes(interest)}
                    onChange={handleInterestChange}
                  />

                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reason for Joining */}
          <div className="form-group">
            <label>Why would you like to join Pet Haven?</label>

            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Tell us why you would like to support our cause..."
              rows="4"
            />
          </div>

          {/* Terms and Conditions */}
          <div className="membership-terms">
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
              />

              <span>
                I confirm that the information provided is accurate and agree to
                be contacted by Pet Haven regarding my membership. *
              </span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="membership-submit-btn">
            Register as a Member
          </button>

          <p className="membership-required">* Required fields</p>
        </form>
      </div>
    </div>
  );
}

export default Membership;
