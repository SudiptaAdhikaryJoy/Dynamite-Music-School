import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
