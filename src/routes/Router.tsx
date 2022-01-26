import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import List from "../pages/List";
import ItemForm from "../pages/ItemForm";
import { ItemContextProvider } from "../Contexts/ItemContext";

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <ItemContextProvider>
                    <Route path="/list">
                        <List />
                    </Route>
                    <Route path="/item">
                        <ItemForm />
                    </Route>
                </ItemContextProvider>
            </Switch>
        </BrowserRouter>
    )
}