import './App.css';
import './components/assets/bootstrap.css';
import Allrouter from './components/Allrouter';
import { BrowserRouter } from 'react-router-dom';
import "./components/assets/style.css";
import "./components/assets/dashboard.css";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Allrouter />
        </BrowserRouter>
    </div>
  );
}

export default App;
