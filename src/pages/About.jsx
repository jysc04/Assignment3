import { Link } from "react-router-dom";
import {
  Heart,
  PawPrint,
  Stethoscope,
  House,
  HandHeart,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function About() {
  const timeline = [
    {
      year: "Our Beginning",
      title: "A simple belief",
      description:
        "Pet Haven began with the belief that every abandoned animal deserves kindness, safety and a second chance.",
    },
    {
      year: "Our Purpose",
      title: "Building a safe haven",
      description:
        "We developed our approach around animal welfare, responsible care and helping vulnerable cats and dogs.",
    },
    {
      year: "Our Community",
      title: "Making a difference together",
      description:
        "We bring animal lovers, volunteers and potential adopters together to support animals in need.",
    },
  ];

  const services = [
    {
      icon: <House size={27} />,
      title: "Rescue and Shelter",
      description:
        "Providing a safe and comfortable environment for animals that need temporary care and protection.",
    },
    {
      icon: <Stethoscope size={27} />,
      title: "Health and Wellbeing",
      description:
        "Prioritising health assessments, appropriate veterinary attention and each animal's individual needs.",
    },
    {
      icon: <Heart size={27} />,
      title: "Adoption Support",
      description:
        "Helping potential adopters understand their responsibilities and find a suitable companion.",
    },
    {
      icon: <Users size={27} />,
      title: "Community Outreach",
      description:
        "Encouraging people to support animal welfare through volunteering, awareness and community activities.",
    },
  ];

  const principles = [
    "Every animal should be treated with kindness and respect.",
    "Animal health and safety should always come first.",
    "Adoption should be a responsible, long-term commitment.",
    "Our community plays an important role in animal welfare.",
  ];

  return (
    <div className="about-page">
      {/* Compact intro */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <span className="about-kicker">
            <PawPrint size={16} />
            ABOUT PET HAVEN
          </span>

          <h1>
            More Than a Shelter.
            <br />
            <span>A Second Chance at Life.</span>
          </h1>

          <p>
            We are a community built around compassion, responsible pet care and
            the belief that every animal deserves a loving home.
          </p>
        </div>
      </section>

      {/* About us history */}
      <section className="about-history">
        <div className="about-history-image">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000"
            alt="Dogs spending time together"
          />

          <div className="about-image-caption">
            <Heart size={18} />
            <span>Every animal deserves a chance.</span>
          </div>
        </div>

        <div className="about-history-content">
          <span className="about-kicker">OUR STORY</span>

          <h2>
            Why Pet Haven
            <span> Matters</span>
          </h2>

          <p>
            Many animals experience abandonment, neglect or circumstances that
            leave them without a stable home.
          </p>

          <p>
            Pet Haven exists to represent hope for these animals. We aim to
            provide a safe environment while helping them move towards a better
            future.
          </p>

          <p>
            Our work is centred on compassion, responsible ownership and the
            support of a community that cares about animal welfare.
          </p>

          <div className="about-timeline">
            {timeline.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-marker">
                  <span>{index + 1}</span>
                </div>

                <div className="timeline-content">
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we do */}
      <section className="about-work">
        <div className="about-section-heading">
          <span className="about-kicker">WHAT WE DO</span>

          <h2>Supporting Animals at Every Step</h2>

          <p>
            Our approach focuses on helping animals receive care, find suitable
            homes and enjoy a better quality of life.
          </p>
        </div>

        <div className="about-work-layout">
          <div className="about-work-photo">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1000"
              alt="A dog enjoying time outdoors"
            />
          </div>

          <div className="about-work-list">
            {services.map((service, index) => (
              <div className="about-work-item" key={index}>
                <div className="about-work-icon">{service.icon}</div>

                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* principles */}
      <section className="about-principles">
        <div className="about-principles-content">
          <span className="about-kicker">OUR COMMITMENT</span>

          <h2>Putting Animal Welfare First</h2>

          <p>
            We believe that caring for animals means understanding their needs,
            respecting their wellbeing and making thoughtful decisions about
            their future.
          </p>

          <div className="about-principles-list">
            {principles.map((principle, index) => (
              <div className="about-principle" key={index}>
                <ShieldCheck size={20} />
                <span>{principle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-principles-image">
          <img
            src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=900"
            alt="A happy dog being cared for"
          />
        </div>
      </section>

      {/* Community */}
      <section className="about-community">
        <div className="about-community-image">
          <img
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1000"
            alt="A person spending time with a dog"
          />
        </div>

        <div className="about-community-content">
          <span className="about-kicker">OUR COMMUNITY</span>

          <h2>
            A Better Future Starts
            <span> With People Like You.</span>
          </h2>

          <p>
            Animal welfare is not something one organisation can achieve alone.
            It takes people who are willing to care, contribute and make a
            difference.
          </p>

          <p>
            Whether through adoption, volunteering or membership, every
            contribution helps strengthen our community.
          </p>

          <Link to="/membership" className="about-community-btn">
            Become a Member
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="about-closing">
        <HandHeart size={34} />

        <h2>Be Part of Their Story.</h2>

        <p>
          Meet the animals waiting for a home and discover how you can support
          Pet Haven.
        </p>

        <Link to="/pets" className="about-closing-link">
          Explore Our Pets
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}

export default About;
