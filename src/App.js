import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Memory from "./components/Memory";
import Navbar from "./components/Navbar";
import ResourceContextProvider from "./contexts/resources";
import Registers from "./components/Registers";

function App() {
  return (
    <Router>
      <ResourceContextProvider>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <Editor />
                <Registers />
              </div>
            </Route>
            <Route exact path="/memory">
              <Memory />
            </Route>
            <h1>404 INVALID ROUTE</h1>
          </Switch>
        </div>
      </ResourceContextProvider>
    </Router>
  );
}

export default App;
