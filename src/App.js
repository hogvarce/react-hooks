import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {NavBar} from "./components/NavBar";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FireBaseState} from "./context/firebase/FireBaseState";

function App() {
  return (
      <FireBaseState>
          <AlertState>
            <BrowserRouter>
              <NavBar />
              <div className="container">
                <Alert/>
                <Switch>
                  <Route path={'/'} exact component={Home} />
                    <Route path={'/about'} component={About} />
                </Switch>
              </div>
            </BrowserRouter>
          </AlertState>
      </FireBaseState>
  );
}

export default App;
