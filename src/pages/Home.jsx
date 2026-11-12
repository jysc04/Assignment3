import { useEffect, useState } from "react";
import pets from "../data/pets.js";
import { Link } from "react-router-dom";
import {
  Heart,
  Home as HomeIcon,
  ShieldCheck,
  ArrowRight,
  PawPrint,
} from "lucide-react";

import PetCard from "../components/PetCard";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000",
    alt: "Happy dog",
  },
  {
    src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000",
    alt: "Adorable dog",
  },
  {
    src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1000",
    alt: "Cat relaxing",
  },
  {
    src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1000",
    alt: "Cute cat",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
    alt: "Golden retriever",
  },
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previousImage) => (previousImage + 1) % heroImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">
            <PawPrint size={16} />
            WELCOME TO PET HAVEN
          </span>

          <h1>
            Every Pet Deserves
            <span> A Loving Home.</span>
          </h1>

          <p>
            Giving abandoned pets a second chance at happiness. Find your new
            best friend and make a difference in an animal's life today.
          </p>

          <div className="hero-buttons">
            <Link to="/pets" className="primary-btn">
              Find Your Companion
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn About Us
            </Link>
          </div>

          <div className="hero-note">
            <Heart size={17} fill="#E58A43" color="#E58A43" />
            Every adoption gives a pet a second chance.
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-slideshow">
            {heroImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={index === currentImage ? image.alt : ""}
                aria-hidden={index !== currentImage}
                className={
                  currentImage === index ? "hero-slide active" : "hero-slide"
                }
              />
            ))}
          </div>

          <div className="image-caption">
            <span className="caption-icon">
              <Heart size={20} />
            </span>
            <div>
              <strong>Give Love. Save Lives.</strong>
              <p>Be someone's happy ending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-heading">
          <span>WHO WE ARE</span>
          <h2>A Little Love Goes a Long Way</h2>
          <p>
            Pet Haven is dedicated to protecting abandoned cats and dogs and
            helping them find safe, loving homes. We believe every animal
            deserves care, compassion and a second chance.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <Heart size={32} />
            <h3>Compassionate Care</h3>
            <p>
              We provide care and attention to abandoned pets while they wait
              for their forever homes.
            </p>
          </div>

          <div className="feature-card">
            <HomeIcon size={32} />
            <h3>Loving Homes</h3>
            <p>
              We connect suitable adopters with pets looking for a second
              chance.
            </p>
          </div>

          <div className="feature-card">
            <ShieldCheck size={32} />
            <h3>Responsible Adoption</h3>
            <p>
              Our team follows up on applications to help ensure pets find
              suitable homes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Pets */}
      <section className="featured-section">
        <div className="featured-heading">
          <div>
            <span>MEET YOUR NEW BEST FRIEND</span>
            <h2>Pets Looking for a Home</h2>
            <p>These lovely companions are waiting to meet you.</p>
          </div>

          <Link to="/pets" className="view-all-btn">
            View All Pets <ArrowRight size={18} />
          </Link>
        </div>

        <div className="pet-grid">
          {pets.slice(0, 3).map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>

      {/* Adoption Process */}
      <section className="process-section">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Your Journey to Adoption</h2>
          <p>Giving a pet a forever home is easier than you think.</p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Find Your Pet</h3>
            <p>
              Browse our available cats and dogs to find your perfect companion.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Submit a Request</h3>
            <p>
              Complete our adoption application with your details and
              preferences.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Welcome Home</h3>
            <p>
              Our staff will follow up with you to discuss a suitable home for
              the pet.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Be Part of Something Meaningful.</h2>
        <p>
          Whether you adopt, support or help an abandoned pet, you can make a
          difference.
        </p>

        <Link to="/membership" className="cta-btn">
          Become a Member <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}

export default Home;
