import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:5001/api/Tipusok');
        setTypes(response.data);
      } catch (error) {
        console.error('Hiba a betöltéskor:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="home-container">
      <h1>Eszközök</h1>
      
        <div className="types-grid">
          {types.map(type => (
            <div key={type.id} className="type-card">
              {type.kepek && <img src={type.kepek} alt={type.megnevezes} />}
              <h3>{type.megnevezes || 'Név nélküli típus'}</h3>
              <Link to={`/tipusok/${type.id}`} className="details-btn">Részletek</Link>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default Home;