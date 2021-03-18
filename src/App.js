import './App.css';
import Landing from './pages/landingPage';
import Home from './pages/homePage';
import HowToRegisterMenu from './pages/howToRegisterMenu';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path ='/registerMenu' component={HowToRegisterMenu} />
      </Switch>
    </>
  
  );
}

export default App;
