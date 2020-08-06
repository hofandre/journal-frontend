import React from "react";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Journal from "../Journal/Journal";

const Routing = () => {
    return (
        <Router>
            <Route path='/' component={Journal}/>
        </Router>
    )
}
export default Routing;