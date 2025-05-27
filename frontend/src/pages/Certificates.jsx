import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get('/api/about/certificates');
        setCertificates(res.data);
      } catch (error) {
        console.error('Error fetching certificates:', error);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <div className="container">
      <h1>Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <button
            key={cert + index}
            className="certificate"
            onClick={() => setModalImage(cert)}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <img src={cert} alt={`Certificate ${index + 1}`} />
          </button>
        ))}
      </div>

      {modalImage && (
        <dialog
          open
          aria-label="Certificate viewer"
          className="modal fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          style={{ outline: 'none' }}
          onClose={() => setModalImage(null)}
        >
          <div className="relative">
            <img
              src={modalImage}
              alt="Certificate"
              className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow"
              aria-label="Close modal"
              style={{ cursor: 'pointer' }}
            >
              &times;
            </button>
          </div>
        </dialog>
      )}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => navigate('/about')}>Back to About</button>
        <button onClick={() => navigate('/skills')}>Go to Skills</button>
      </div>
    </div>
  );
};

export default Certificates;
