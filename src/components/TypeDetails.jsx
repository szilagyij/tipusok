import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TypeDetails = () => {
  const { id } = useParams();
  const [type, setType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchType = async () => {
      try {
        const response = await axios.get(`https://localhost:5001/api/Tipusok/${id}`);
        setType(response.data);
      } catch (error) {
        console.error('Hiba a betöltéskor:', error);
      }
      setLoading(false);
    };
    fetchType();
  }, [id]);

  return (
    <div className="details-container">
      {loading ? (
        <div className="loading">Betöltés...</div>
      ) : type ? (
        <>
          <h1>{type.megnevezes || 'Név nélküli típus'}</h1>
          {type.kepek && <img src={type.kepek} alt={type.megnevezes} className="detail-image" />}
          <p className="description">{type.leiras || 'Nincs leírás'}</p>
        </>
      ) : (
        <div className="error">Nem található ilyen típus</div>
      )}
    </div>
  );
};

export default TypeDetails;