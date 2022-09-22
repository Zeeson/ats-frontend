import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.scss';
import Dashboard from './pages/Dashboard';
import { PageProvider } from "./hooks/pageContext";

function App() {
  return (
    <PageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PageProvider>
   
  );
}

export default App;
