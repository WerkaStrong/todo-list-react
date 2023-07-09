import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/tasks/author/AuthorPage";
import { Navigation } from "./common/Navigation";

export default () => (
    <HashRouter>
        <Navigation/>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
                <TasksPage />
            </Route>
        </Switch>
    </HashRouter>
);
