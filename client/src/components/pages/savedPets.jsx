// import { Container, Card, Button, Row, Col } from "react-bootstrap";
// import { useQuery, useMutation } from "@apollo/client";
// import { PET_QUERY } from "../../utils/queries";
// import { REMOVE_PET } from "../../utils/mutations";
import { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";




export const savedPets = () => {
    const [ loading, setLoading] = useState(true);
    const [ savedPets, setSavedPets ] = useState([]);
    // const [flipped, setFlipped] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/api/pets"); // Replace with your API endpoint
            const data = await response.json();
            setSavedPets(data);
            setLoading(false);
            // setFlipped(Array(data.length).fill)(false));
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
     
 
     
      const handleDeletePet = async (petId) => {
        try {
          await fetch(`/api/pets/${petId}`, {
            method: "DELETE",
          });
    
          // Assuming removePetId is defined
          deletePetId(petId);
        } catch (error) {
          console.error(error);
        }
      };

    if (loading) {
        return <h2>LOADING...</h2>
    }


    
    <div className="card-container">
    {pets.map((pet, i) => (
      <div className="card" onMouseLeave={flipOnHover(i, false)} key={i}>
        <ReactCardFlip isFlipped={flipped[i]} flipDirection="horizontal">
          <div onMouseEnter={flipOnHover(i, true)}>
            <div>{pet.name}</div>
            <img src={pet.image} alt={pet.name} />
          </div>
          <div>
            <p>{pet.bio}</p>
            <ul>
              <li>{pet.age}</li>
              <li>{pet.breed}</li>
              <li>{pet.gender}</li>
              <li>{pet.location}</li>
            </ul>
          </div>
        </ReactCardFlip>
      </div>
    ))}
  </div>
    };
