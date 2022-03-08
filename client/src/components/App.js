import React, { useState, useEffect, useContext } from 'react'
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup';
import AllFoods from './AllFoods';
import MyPantry from './MyPantry';
import { UserContext } from '../context/user'

function App() {
  const [pantryItems, setPantryItems] = useState([])
  const { user, setUser } = useContext(UserContext)

  // Used to calculate how many days(daysInt(Integer)) it has been since the user last logged in
  const daysInt = Math.floor((new Date() - new Date(user.last_login + 'T00:00:00')) / 86400000)

  useEffect(() => {
      fetch('/user_foods')
      .then(resp => resp.json())
      .then(items => {
          setPantryItems(items)

          if(daysInt > 0){
              items.forEach(item => {
                  let daysLeft = item.user_days_until_expiration - daysInt
                  if(daysLeft < 0) daysLeft = 0
                  
                  fetch(`/user_foods/${item.id}`, {
                      method: "PATCH",
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ user_days_until_expiration: daysLeft })
                  })
              })
      
              fetch(`/users/${user.id}`, {
                  method: 'PATCH',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ last_login: new Date() })
              })
              .then(resp => resp.json())
              .then(userData => setUser(userData))
          }
      })
  }, [daysInt, setUser, user.id])

  const history = useHistory()

  function handleLogout(){
    fetch('/logout', { method: "DELETE" })
    .then(setUser({
      id: 0,
      username: ''
    }))
    history.push('/')
  }

  const saved = Math.round((user.money_saved + Number.EPSILON) * 100) / 100

  const userInfo = (
    <div id='user-container'>
      <p>Hello {user.username}!</p>
      <p>${saved} saved</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )

  let signInButton 
  
  switch(useLocation().pathname){
    case '/login':
      signInButton = <Link to="/signup"><button>Sign Up</button></Link>
      break
    case '/signup':
      signInButton = <Link to="/login"><button>Login</button></Link>
      break
    default:
      signInButton = (
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

  return (
    <div className="doodle">
      {user.username ? userInfo : signInButton}
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
          <MyPantry pantryItems={pantryItems} setPantryItems={setPantryItems} />
        </Route>
        <Route>
          <h1>404 Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
