import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-wrapper">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
