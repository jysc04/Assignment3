import { useState } from "react";
import { Search, PawPrint } from "lucide-react";

import PetCard from "../components/PetCard";
import pets from "../data/pets";
import useApplications from "../context/useApplications";

function Pets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All");
  const { unavailablePetIds } = useApplications();

  // Filter pets
  const filteredPets = pets.filter((pet) => {
    const isAvailable = !unavailablePetIds.includes(pet.id);

    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = selectedType === "All" || pet.type === selectedType;

    const matchesAge = selectedAge === "All" || pet.ageCategory === selectedAge;

    return isAvailable && matchesSearch && matchesType && matchesAge;
  });

  return (
    <div className="pets-page">
      {/* Page Heading */}
      <section className="pets-header">
        <span className="pets-label">
          <PawPrint size={17} />
          FIND YOUR NEW BEST FRIEND
        </span>

        <h1>Meet Our Lovely Pets</h1>

        <p>
          Every pet has a story. Find your perfect companion and give them the
          loving home they deserve.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="pets-content">
        <div className="pets-search">
          <Search size={21} />

          <input
            type="text"
            placeholder="Search by pet name or breed..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="pets-filters">
          <div className="filter-group">
            <label>Animal Type</label>

            <div className="filter-options">
              {["All", "Dog", "Cat"].map((type) => (
                <button
                  key={type}
                  className={
                    selectedType === type ? "filter-btn active" : "filter-btn"
                  }
                  onClick={() => setSelectedType(type)}
                >
                  {type === "All" ? "All Pets" : `${type}s`}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Age Group</label>

            <div className="filter-options">
              {["All", "Young", "Adult", "Senior"].map((age) => (
                <button
                  key={age}
                  className={
                    selectedAge === age ? "filter-btn active" : "filter-btn"
                  }
                  onClick={() => setSelectedAge(age)}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="pets-results">
          <h2>Available Pets</h2>

          <p>Showing {filteredPets.length} available pets</p>
        </div>

        {/* Pet Cards */}
        {filteredPets.length > 0 ? (
          <div className="pet-grid">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        ) : (
          <div className="no-pets">
            <PawPrint size={45} />
            <h3>No pets found</h3>
            <p>Try changing your search or filters.</p>

            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedType("All");
                setSelectedAge("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Pets;
