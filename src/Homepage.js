import React from 'react';

let Users = () => 
    <ul>



    {/* function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
} */}
    let usersArray = sups.map( (sup)=>sup.author !== )
        <li><a href="/user/#/"{sups[i]}></a></li>
    </ul>

let Homepage = () => 
    <div className="home">
        <h2 className="main-title">Sup?!!</h2>
        <br />
        <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allsups">All Sups</Link>
        </li>
        <li>
          <Link to="/users">by User</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/allsups" component={SupList} />
      {/* <Route path="/users" component={Users} /> */}
    </div>
  </Router>

    </div>

export default Homepage