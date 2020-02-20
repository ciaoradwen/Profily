import React from 'react';
import './App.css';
import Profile from './components/Profile'

const user = {
  photo: '/bradpitt.jpg',
  name: {
    firstName: "Radouan",
    lastName: 'Hakim'
  },
  profileLink: 'https://www.linkedin.com/'
}

function App() {
  return (
    <div className="App">
   <Profile details={user} /> 
    </div>
  );
}

export default App;
