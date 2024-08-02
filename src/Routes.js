import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./pages/About";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}