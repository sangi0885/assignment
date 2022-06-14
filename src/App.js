import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {LayoutOne, LayoutTwo} from "./components/Layout/Layouts";
import Home from './components/Home';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <RouteWrapper path="/" exact component={() => <Home />}  layout={LayoutOne}/>
            </Switch>
        </Router>
    </div>
  );
}

function RouteWrapper({
    component: Component, 
    layout: Layout, 
    ...rest
})
{
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}

export default App;
