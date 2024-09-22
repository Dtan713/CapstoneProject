// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// function App() {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   const handleSignIn = () => setIsSignedIn(true);
//   const handleSignOut = () => setIsSignedIn(false);

//   return (
//     <Router>
//       <NavBar isSignedIn={isSignedIn} onSignIn={handleSignIn} onSignOut={handleSignOut} />
//       <Switch>
//         <Route path="/login">
//           {isSignedIn ? <Redirect to="/home" /> : <Login onSignIn={handleSignIn} />}
//         </Route>
//         <Route path="/home">
//           {isSignedIn ? <Home /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/wheel" component={Wheel} />
//         <Route path="/" exact>
//           <Redirect to="/login" />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }
