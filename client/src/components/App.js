import React, {useContext} from 'react'
import '../App.css';
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup';
import AllFoods from './AllFoods';
import MyPantry from './MyPantry';
import { UserContext } from '../context/user'

function App() {
  const {user, setUser} = useContext(UserContext)
  const history = useHistory()

  function handleLogout(){
    fetch('/logout', { method: "DELETE" })
    .then(setUser(""))
    history.push('/login')
  }

  return (
    <div className="App">
      {user ? (
        <>
          <p>Hello {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
        )
      }
      <Link to="/">
        <Header />
      </Link>
      {user? <Navbar /> : null}
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
  );
}

export default App;
