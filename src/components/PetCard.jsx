
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <div className="pet-image">
        <img src={pet.image} alt={pet.name} />

        <span className="pet-tag">
          {pet.type}
        </span>
      </div>

      <div className="pet-info">
        <div className="pet-name-row">
          <h3>{pet.name}</h3>
          <Heart size={20} color="#E58A43" />
        </div>

        <p className="pet-details">
          {pet.breed} · {pet.age}
        </p>

        <p className="pet-description">
          {pet.description}
        </p>

        <Link
          to={`/adoption/${pet.id}`}
          className="pet-adopt-btn"
        >
          Meet {pet.name}
        </Link>
      </div>
    </div>
  );
}

export default PetCard;
