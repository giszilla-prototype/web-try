import './App.css';
import { Route, Routes } from 'react-router-dom'
import routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((route, index) => (
            <Route path={route.path} element={route.element} key={index} /> 
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
