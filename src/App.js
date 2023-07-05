import React from "react";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { StyledNavLink } from "./styled";
import AuthorPage from "./features/tasks/author/AuthorPage";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink
                        to="/zadania"
                    >
                        Zadania
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink
                        to="/autor"
                    >
                        O autorze
                    </StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
