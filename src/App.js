import React from 'react';
import OrderDataContainer from "./Components/OrderData/OrderDataContainer";
import {FormsContainer} from "./Components/Forms/FormsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import {ResultContainer} from "./Components/Result/ResultContainer";
import classes from './App.module.css'



function App () {
    return (
        <BrowserRouter>
            <div className={classes.container}>
                <Route exact path="/master-calc">
                    <OrderDataContainer/>
                    <FormsContainer/>
                </Route>
                <Route  path='/result/:id?' render={() => <ResultContainer/>}/>
            </div>
        </BrowserRouter>



    );
}

export default App;
