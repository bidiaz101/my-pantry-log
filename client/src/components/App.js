import React, { useContext } from 'react'
import { Switch, Route, Link, useHistory } from 'react-router-dom'
import About from './About'
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
    .then(setUser({
      id: 0,
      username: ''
    }))
    history.push('/login')
  }

  const saved = Math.round((user.money_saved + Number.EPSILON) * 100) / 100

  return (
    <div className="doodle">
      {user.username ? (
        <div id='user-container'>
          <p>Hello {user.username}!</p>
          <p>${saved} saved</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
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
      {user.username? <Navbar /> : null}
      <hr />
      <Switch>
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/foods'>
          <AllFoods />
        </Route>
        <Route path='/user-foods'>
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
