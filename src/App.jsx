import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from 'Router';
import 'styles/app.scss';

function App() {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
}

export default App;
