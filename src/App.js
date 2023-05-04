import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='text-center my-5'>Les Formulaires en react JS</h1>
        <Home />
      </div>
    )
  }
  
}

export default App;