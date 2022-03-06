import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/navbar';
import FormSection from './components/formSection';


function App() {
  return (
    <div className="App">
        <Navbar />
        <FormSection />
    </div>
  );
}

export default App;
