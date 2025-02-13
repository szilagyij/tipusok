import { useState } from 'react';
import axios from 'axios';

const AddNewType = () => {
  const [formData, setFormData] = useState({
    kepek: '',
    megnevezes: '',
    leiras: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      await axios.post('https://localhost:5001/api/UjTipusok', formData);
      setSuccess(true);
      setFormData({ kepek: '', megnevezes: '', leiras: '' });
    } catch (error) {
      console.error('Hiba a mentéskor:', error);
    }
    setSubmitting(false);
  };

  return (
    <div className="form-container">
      <h1>Új típus hozzáadása</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Kép URL:</label>
          <input 
            type="text" 
            value={formData.kepek}
            onChange={(e) => setFormData({...formData, kepek: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Megnevezés:</label>
          <input 
            type="text" 
            value={formData.megnevezes}
            onChange={(e) => setFormData({...formData, megnevezes: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label>Leírás:</label>
          <textarea 
            value={formData.leiras}
            onChange={(e) => setFormData({...formData, leiras: e.target.value})}
          />
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? 'Küldés...' : 'Mentés'}
        </button>

        {success && <div className="success-message">Sikeresen mentve!</div>}
      </form>
    </div>
  );
};

export default AddNewType;