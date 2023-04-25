import {React, useEffect} from 'react';
import Home from './Components/Home';
import ServicePage from './Components/ServicePage';

function App() {
  useEffect(() => {
        document.title = 'Home - Dexterprolimited';
    }, []);
  return (
    <div className="App">
      
      <Home />
    </div>
  );
}

export default App;
