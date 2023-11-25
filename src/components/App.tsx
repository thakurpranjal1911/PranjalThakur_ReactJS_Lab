import React, { useEffect } from "react";
import ShowList from "./ShowList";
import '../App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpenseTracker from './ExpenseTracker';
const App = () => {
    useEffect(() => {

    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/add" element={<ExpenseTracker onTrue={undefined} onClose={undefined}></ExpenseTracker>}></Route>
                    <Route path="/" element={<ShowList></ShowList>}></Route>
                    <Route></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;