import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <h1>Welcome to the Home Page</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    async function getUsers() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.login}>
            <Link to={`${url}/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
      <Switch>
            <Route index element={<p>Add a user and select it</p>}/>
        <Route  path={path}>
          <GithubUserList users={users} />
        </Route>
        <Route path={`${path}/:username`}>
          <ShowGithubUser />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


export default App