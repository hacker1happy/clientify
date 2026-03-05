import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const processes = [
    { id: 'duplicate', name: 'Duplicate Process', path: '/duplicate' },
    { id: 'transmission', name: 'Transmission Process', path: '/transmission' },
    { id: 'joint', name: 'Joint Process', path: '/joint' },
  ];

  return (
    <div className="home-container">
      <h1>Document Generation System</h1>
      <p>Select a process to continue</p>
      <div className="process-grid">
        {processes.map((process) => (
          <div
            key={process.id}
            className="process-card"
            onClick={() => navigate(process.path)}
          >
            <h3>{process.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;