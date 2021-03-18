import './App.css';
import Landing from './pages/landingPage';
import Home from './pages/homePage';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path = '/home' component={Home} />
      </Switch>
    </>
  
  );
}

export default App;
