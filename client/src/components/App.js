import '../App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup';
import AllFoods from './AllFoods';
import MyPantry from './MyPantry';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/">
          <Header />
        </Link>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/all-foods'>
            <AllFoods />
          </Route>
          <Route path='/my-pantry'>
            <MyPantry />
          </Route>
          <Route>
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
