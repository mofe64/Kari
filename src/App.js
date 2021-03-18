import './App.css';
import Landing from './pages/landingPage';
import Home from './pages/homePage';
import HowToRegisterMenu from './pages/howToRegisterMenu';
import Register from './pages/registerPage';
import {Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/registerMenu' component={HowToRegisterMenu} />
        <Route exact path='/register/:userType' component = {Register}/>
      </Switch>
    </>
  
  );
}

export default App;
