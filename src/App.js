import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { Route, BrowserRouter as Router} from 'react-router-dom'
import List from './components/list/List';
function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Route exact path="/list" component={List} />
      </Router>
    </div>
  );
}

export default App;
